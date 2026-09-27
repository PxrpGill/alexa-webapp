import { join } from 'node:path';
import { SRC } from './alias-hook.mjs';

// Проверяет настоящий модуль через хук резолвера, а не копию логики.
const load = async (value) => {
    const { execFileSync } = await import('node:child_process');
    const out = execFileSync(process.execPath, [
        '--import', join(import.meta.dirname, 'alias-hook.mjs'),
        '--input-type=module', '-e', `
            process.env.NEXT_PUBLIC_SITE_URL = ${value === undefined ? 'undefined' : JSON.stringify(value)};
            const m = await import(${JSON.stringify(SRC + '/shared/config/seo/seo.constants.ts')});
            new URL(m.SITE_URL);
            console.log(m.SITE_URL);
        `,
    ], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    return out.trim().split('\n').pop();
};

let failures = 0;
const check = async (name, value, expected) => {
    let actual;
    try {
        actual = await load(value);
    } catch (error) {
        actual = `БРОСИЛО: ${String(error.stderr).split('\n').find((l) => l.includes('Error')) ?? 'неизвестно'}`;
    }
    const ok = actual === expected;
    if (!ok) failures++;
    console.log(`${ok ? 'pass' : 'FAIL'} ${name}${ok ? '' : `: получено ${JSON.stringify(actual)}, ожидалось ${JSON.stringify(expected)}`}`);
};

const FALLBACK = 'https://aleksa-dent.ru';

await check('нет переменной', undefined, FALLBACK);
await check('без протокола', 'aleksa-dent.ru', FALLBACK);
await check('хвостовой слеш', 'https://staging.example.com/', 'https://staging.example.com');
await check('валидный домен', 'https://staging.example.com', 'https://staging.example.com');
// Регрессии из ревью: проходят проверку протокола, но непарсимы
await check('пробел внутри', 'https://aleksa dent.ru', FALLBACK);
await check('мусор в хосте', 'https://%%%', FALLBACK);
await check('незакрытая скобка', 'http://[bad', FALLBACK);

console.log(failures ? `\nПРОВАЛЕНО: ${failures}` : '\nВсе проверки пройдены');
process.exit(failures ? 1 : 0);
