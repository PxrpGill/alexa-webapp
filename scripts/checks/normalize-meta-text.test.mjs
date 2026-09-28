import { SRC } from './alias-hook.mjs';

const { normalizeMetaText } = await import(
    `${SRC}/shared/helpers/normalize-meta-text.ts`
);

let failures = 0;
const check = (name, actual, expected) => {
    const ok = actual === expected;
    if (!ok) failures++;
    console.log(`${ok ? 'pass' : 'FAIL'} ${name}${ok ? '' : `: получено ${JSON.stringify(actual)}, ожидалось ${JSON.stringify(expected)}`}`);
};

check('undefined на входе', normalizeMetaText(undefined, 60), undefined);
check('пустая строка', normalizeMetaText('', 60), undefined);
check('строка из пробелов', normalizeMetaText('   ', 60), undefined);
check('HTML-сущности', normalizeMetaText('Клиника&nbsp;&laquo;Алекса&raquo;', 60), 'Клиника «Алекса»');
check('теги вырезаются', normalizeMetaText('<p>Текст <b>жирный</b></p>', 60), 'Текст жирный');
check('схлопывание пробелов', normalizeMetaText('а  \n  б', 60), 'а б');
check('короткая строка не трогается', normalizeMetaText('Коротко', 60), 'Коротко');
check('обрезка по границе слова', normalizeMetaText('один два три четыре пять', 12), 'один два…');

const long = normalizeMetaText('я'.repeat(100), 60);
check('обрезка без пробелов укладывается в лимит', long.length <= 60, true);

console.log(failures ? `\nПРОВАЛЕНО: ${failures}` : '\nВсе проверки пройдены');
process.exit(failures ? 1 : 0);
