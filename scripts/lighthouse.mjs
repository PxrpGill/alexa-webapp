// Прогоняет Lighthouse по всем маршрутам сайта и сверяет оценки с порогом.
//
// Запуск: pnpm build && pnpm start (из src/), затем из корня репозитория
//   node scripts/lighthouse.mjs                # мобильный профиль, порог 90
//   node scripts/lighthouse.mjs --desktop
//   node scripts/lighthouse.mjs --threshold=95
//   node scripts/lighthouse.mjs --runs=1       # быстрый черновой прогон
//   node scripts/lighthouse.mjs --only=/price,/vrachi
//
// Chrome поднимается один раз на весь прогон. На машинах, где стоит только
// Chrome Dev/Canary, путь берётся из CHROME_PATH.

import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { getAllRoutes } from './routes.mjs';

// Зависимости лежат в src/node_modules (корень npm-проекта — src/),
// а скрипт живёт в scripts/, поэтому резолвим их вручную.
const requireFromSrc = createRequire(
    path.join(import.meta.dirname, '..', 'src', 'package.json')
);
const importFromSrc = (specifier) =>
    import(pathToFileURL(requireFromSrc.resolve(specifier)).href);

const chromeLauncher = await importFromSrc('chrome-launcher');
const { default: lighthouse, desktopConfig } = await importFromSrc('lighthouse');

const BASE = process.env.BASE_URL ?? 'http://localhost:3000';

const DEFAULT_CHROME_PATHS = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Google Chrome Dev.app/Contents/MacOS/Google Chrome Dev',
    '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
];

const CATEGORIES = [
    ['performance', 'perf'],
    ['accessibility', 'a11y'],
    ['best-practices', 'bp'],
    ['seo', 'seo'],
];

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const option = (name, fallback) => {
    const found = args.find((arg) => arg.startsWith(`--${name}=`));

    return found ? found.slice(name.length + 3) : fallback;
};

const isDesktop = flag('desktop');
const profile = isDesktop ? 'desktop' : 'mobile';
const threshold = Number(option('threshold', '90'));
const runs = Number(option('runs', '3'));
const only = option('only', '');
const repoRoot = path.join(import.meta.dirname, '..');
const reportsDir = path.join(repoRoot, '.lighthouse', profile);

/** Chrome ищем по CHROME_PATH, иначе — первый установленный из известных. */
const resolveChromePath = () => {
    if (process.env.CHROME_PATH) return process.env.CHROME_PATH;

    const installed = DEFAULT_CHROME_PATHS.find((candidate) =>
        existsSync(candidate)
    );

    if (installed) return installed;

    // Linux/CI: пусть chrome-launcher ищет сам.
    return undefined;
};

/** Медиана — Lighthouse шумит, одиночный прогон даёт ложные провалы. */
const median = (values) => {
    const sorted = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    return sorted.length % 2
        ? sorted[middle]
        : (sorted[middle - 1] + sorted[middle]) / 2;
};

const slugify = (route) =>
    route === '/' ? 'index' : route.replace(/^\/|\/$/g, '').replace(/\//g, '_');

async function ensureServerIsUp() {
    let html;

    try {
        const response = await fetch(BASE, { redirect: 'manual' });

        if (response.status >= 500) throw new Error(`HTTP ${response.status}`);

        html = await response.text();
    } catch (error) {
        console.error(
            `Сервер ${BASE} недоступен: ${error.message}\n` +
                'Сначала выполните из src/: pnpm build && pnpm start'
        );
        process.exit(1);
    }

    // Порт 3000 в этом проекте часто занят Docker-стеком или `next dev`,
    // и `pnpm start` молча падает с EADDRINUSE. Замер по dev-сборке
    // бессмыслен — там нет минификации, зато есть оверлей devtools.
    const looksLikeDev =
        html.includes('next-devtools') ||
        html.includes('__next_devtools') ||
        html.includes('/_next/static/chunks/[turbopack]');

    if (looksLikeDev) {
        console.error(
            `На ${BASE} отвечает dev-сервер, а не продакшен-сборка.\n` +
                'Замер по dev-серверу недостоверен: нет минификации, ' +
                'подключён оверлей devtools.\n' +
                'Соберите и поднимите прод на свободном порту, например:\n' +
                '  cd src && pnpm build && PORT=3100 pnpm start\n' +
                '  BASE_URL=http://localhost:3100 node scripts/lighthouse.mjs'
        );
        process.exit(1);
    }
}

async function auditRoute(route, port) {
    const scoresPerRun = [];
    const failedAudits = new Map();
    let lastReport = null;

    for (let run = 0; run < runs; run += 1) {
        const result = await lighthouse(
            `${BASE}${route}`,
            {
                port,
                output: 'json',
                logLevel: 'error',
                onlyCategories: CATEGORIES.map(([id]) => id),
            },
            isDesktop ? desktopConfig : undefined
        );

        const { lhr } = result;

        lastReport = result.report;
        scoresPerRun.push(
            Object.fromEntries(
                CATEGORIES.map(([id]) => [
                    id,
                    Math.round((lhr.categories[id].score ?? 0) * 100),
                ])
            )
        );

        // Собираем проваленные аудиты только с последнего прогона —
        // набор от прогона к прогону практически не меняется.
        if (run === runs - 1) {
            for (const audit of Object.values(lhr.audits)) {
                const isFailing =
                    audit.score !== null &&
                    audit.score < 0.9 &&
                    audit.scoreDisplayMode !== 'informative' &&
                    audit.scoreDisplayMode !== 'notApplicable';

                if (isFailing) failedAudits.set(audit.id, audit.title);
            }
        }
    }

    const scores = Object.fromEntries(
        CATEGORIES.map(([id]) => [
            id,
            median(scoresPerRun.map((entry) => entry[id])),
        ])
    );

    await writeFile(path.join(reportsDir, `${slugify(route)}.json`), lastReport);

    return { scores, failedAudits };
}

await ensureServerIsUp();
await mkdir(reportsDir, { recursive: true });

const allRoutes = await getAllRoutes(BASE);
const routes = only
    ? allRoutes.filter((route) => only.split(',').includes(route))
    : allRoutes;

if (!routes.length) {
    console.error('Список маршрутов пуст — нечего проверять.');
    process.exit(1);
}

const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'],
    chromePath: resolveChromePath(),
});

const rows = [];
const problems = [];
const auditTally = new Map();

console.log(
    `Профиль: ${profile}, порог: ${threshold}, прогонов на маршрут: ${runs}\n` +
        `Маршрутов: ${routes.length}, база: ${BASE}\n`
);

try {
    for (const [index, route] of routes.entries()) {
        process.stdout.write(
            `[${index + 1}/${routes.length}] ${route} … `
        );

        const { scores, failedAudits } = await auditRoute(route, chrome.port);

        rows.push({ route, scores });

        for (const [id, title] of failedAudits) {
            const entry = auditTally.get(id) ?? { title, routes: [] };

            entry.routes.push(route);
            auditTally.set(id, entry);
        }

        const below = CATEGORIES.filter(
            ([id]) => scores[id] < threshold
        ).map(([id, short]) => `${short} ${scores[id]}`);

        if (below.length) problems.push(`${route}: ${below.join(', ')}`);

        console.log(
            CATEGORIES.map(([id, short]) => `${short} ${scores[id]}`).join('  ')
        );
    }
} finally {
    await chrome.kill();
}

const pad = (value, width) => String(value).padEnd(width);
const routeWidth = Math.max(...rows.map((row) => row.route.length), 8);

console.log(`\n${'='.repeat(routeWidth + 28)}`);
console.log(
    `${pad('Маршрут', routeWidth)}  ${CATEGORIES.map(([, short]) =>
        pad(short, 5)
    ).join(' ')}`
);

for (const { route, scores } of rows) {
    console.log(
        `${pad(route, routeWidth)}  ${CATEGORIES.map(([id, short]) =>
            pad(scores[id], short.length > 4 ? short.length : 5)
        ).join(' ')}`
    );
}

const averages = Object.fromEntries(
    CATEGORIES.map(([id]) => [
        id,
        Math.round(
            rows.reduce((sum, row) => sum + row.scores[id], 0) / rows.length
        ),
    ])
);

console.log(
    `\n${pad('СРЕДНЕЕ', routeWidth)}  ${CATEGORIES.map(([id, short]) =>
        pad(averages[id], short.length > 4 ? short.length : 5)
    ).join(' ')}`
);

if (auditTally.size) {
    const sorted = [...auditTally.entries()].sort(
        (a, b) => b[1].routes.length - a[1].routes.length
    );

    console.log('\nЧаще всего проваливаются:');

    for (const [id, entry] of sorted.slice(0, 20)) {
        console.log(
            `  ${entry.routes.length.toString().padStart(3)} маршр.  ${id} — ${entry.title}`
        );
    }
}

console.log(`\nОтчёты: ${path.relative(repoRoot, reportsDir)}/`);

if (problems.length) {
    console.log(`\nНИЖЕ ПОРОГА ${threshold} (${problems.length}):`);

    for (const problem of problems) console.log(`  - ${problem}`);

    process.exit(1);
}

console.log(`\nВсе ${routes.length} маршрутов набрали ${threshold}+.`);
