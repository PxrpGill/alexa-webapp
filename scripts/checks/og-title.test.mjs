import { join } from 'node:path';
import { SRC } from './alias-hook.mjs';

const { resolveOgTitle } = await import(`${SRC}/shared/config/seo/resolve-og-title.ts`);
const { DEFAULT_TITLE } = await import(`${SRC}/shared/config/seo/seo.constants.ts`);

let failures = 0;
const check = (name, actual, expected) => {
    const ok = actual === expected;
    if (!ok) failures++;
    console.log(`${ok ? 'pass' : 'FAIL'} ${name}${ok ? '' : `: получено ${JSON.stringify(actual)}, ожидалось ${JSON.stringify(expected)}`}`);
};

const allowed = new Set(['Прайс-лист', 'Гнатология и лечение ВНЧС']);

check('известный заголовок проходит', resolveOgTitle('Прайс-лист', allowed), 'Прайс-лист');
check('второй известный проходит', resolveOgTitle('Гнатология и лечение ВНЧС', allowed), 'Гнатология и лечение ВНЧС');
check('произвольный текст отбрасывается', resolveOgTitle('Клиника закрыта, врачи уволены', allowed), DEFAULT_TITLE);
check('пустой параметр', resolveOgTitle('', allowed), DEFAULT_TITLE);
check('отсутствующий параметр', resolveOgTitle(null, allowed), DEFAULT_TITLE);
check('пробелы по краям обрезаются', resolveOgTitle('  Прайс-лист  ', allowed), 'Прайс-лист');
check('подстрока известного не проходит', resolveOgTitle('Прайс', allowed), DEFAULT_TITLE);
check('известный с добавкой не проходит', resolveOgTitle('Прайс-лист и ещё текст', allowed), DEFAULT_TITLE);

console.log(failures ? `\nПРОВАЛЕНО: ${failures}` : '\nВсе проверки пройдены');
process.exit(failures ? 1 : 0);
