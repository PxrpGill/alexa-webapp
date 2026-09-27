// Обходит все маршруты запущенного приложения и проверяет их метаданные.
// Запуск: pnpm start (из src/), затем node scripts/check-metadata.mjs
const BASE = process.env.BASE_URL ?? 'http://localhost:3000';

const ROUTES = [
    '/', '/volkova', '/price', '/vrachi', '/raspisanievrachej', '/o-klinike',
    '/akcii', '/blog', '/vakansii', '/dms', '/pacientu', '/nalogovyjvychet',
    '/rekvizity', '/nadzornye-organy', '/dokumenty-i-licenzii', '/privacy',
    '/personal-data', '/letter', '/pravilaokazaniyamedicinskihuslug',
    '/pravilavneseniyaoplatyzamedicinskieuslugi',
    '/landyshevaya/konsultaciya-stomatologa', '/landyshevaya/terapiya-vz',
    '/landyshevaya/ortodontiya-vz', '/landyshevaya/ortopediya-vz',
    '/landyshevaya/hirurgiya-i-implantaciya', '/landyshevaya/parodontologiya',
    '/landyshevaya/gnatologiya', '/landyshevaya/gigiena-i-profilaktika-vz',
    '/landyshevaya/lechenie-vo-sne-vz',
    '/landyshevaya/konsultaciya-detskogo-stomatologa',
    '/landyshevaya/detskaya-terapiya', '/landyshevaya/detskaya-hirurgiya',
    '/landyshevaya/ortodontiya', '/landyshevaya/gigiena-i-profilaktika',
    '/landyshevaya/lechenie-vo-sne',
];

const decode = (value) =>
    value
        .replace(/&quot;/g, '"')
        .replace(/&#x27;|&#39;/g, "'")
        .replace(/&amp;/g, '&');

const pick = (html, re) => decode((html.match(re)?.[1] ?? '').trim());

const seenTitles = new Map();
const seenDescriptions = new Map();
const problems = [];

for (const route of ROUTES) {
    const response = await fetch(`${BASE}${route}`);
    const html = await response.text();

    const title = pick(html, /<title>([^<]*)<\/title>/);
    const description = pick(html, /<meta name="description" content="([^"]*)"/);
    const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
    const ogTitle = pick(html, /<meta property="og:title" content="([^"]*)"/);
    const ogImage = pick(html, /<meta property="og:image" content="([^"]*)"/);

    if (response.status !== 200) problems.push(`${route}: HTTP ${response.status}`);
    if (!title || title === 'Алекса') problems.push(`${route}: заглушка в title`);
    if (title.length > 65) problems.push(`${route}: title ${title.length} симв.`);
    if (!description) problems.push(`${route}: нет description`);
    else if (description.length < 120 || description.length > 175)
        problems.push(`${route}: description ${description.length} симв.`);
    if (!canonical) problems.push(`${route}: нет canonical`);
    if (!ogTitle) problems.push(`${route}: нет og:title`);
    if (!ogImage) problems.push(`${route}: нет og:image`);
    if (/&[a-z]+;|&#\d+;/.test(`${title}${description}`))
        problems.push(`${route}: HTML-сущности в метаданных`);

    if (seenTitles.has(title)) problems.push(`${route}: title дублирует ${seenTitles.get(title)}`);
    else seenTitles.set(title, route);

    if (seenDescriptions.has(description)) problems.push(`${route}: description дублирует ${seenDescriptions.get(description)}`);
    else seenDescriptions.set(description, route);

    console.log(`${route}\n  T(${title.length}): ${title}\n  D(${description.length}): ${description}\n  C: ${canonical}`);
}

console.log(`\n${'='.repeat(60)}`);
if (problems.length) {
    console.log(`ПРОБЛЕМЫ (${problems.length}):`);
    for (const p of problems) console.log(`  - ${p}`);
    process.exit(1);
}
console.log(`Все ${ROUTES.length} маршрутов прошли проверку.`);
