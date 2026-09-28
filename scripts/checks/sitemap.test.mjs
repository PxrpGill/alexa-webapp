import { join } from 'node:path';
import { SRC } from './alias-hook.mjs';

// Бэкенд заведомо мёртв: порт 9 (discard) никто не слушает.
process.env.API_URL = 'http://127.0.0.1:9';
process.env.NEXT_PUBLIC_API_URL = 'http://127.0.0.1:9';

const { default: sitemap } = await import(`${SRC}/app/sitemap.ts`);

let failures = 0;
const check = (name, actual, expected) => {
    const ok = actual === expected;
    if (!ok) failures++;
    console.log(`${ok ? 'pass' : 'FAIL'} ${name}${ok ? '' : `: получено ${JSON.stringify(actual)}, ожидалось ${JSON.stringify(expected)}`}`);
};

const entries = await sitemap();

check('карта построена, а не брошено исключение', Array.isArray(entries), true);
check('34 статических записи', entries.length, 34);
check('нет /letter', entries.some((e) => e.url.includes('/letter')), false);
check('нет динамических записей при мёртвом API', entries.some((e) => /\/blog\/|\/vakansii\//.test(e.url)), false);
check('главная без хвостового слеша', entries[0].url, 'https://aleksa-dent.ru');
check('у главной приоритет 1', entries[0].priority, 1);
check('у внутренних приоритет 0.7', entries[1].priority, 0.7);

console.log(failures ? `\nПРОВАЛЕНО: ${failures}` : '\nВсе проверки пройдены');
process.exit(failures ? 1 : 0);
