import { join } from 'node:path';
import { SRC } from './alias-hook.mjs';

process.env.NEXT_PUBLIC_SITE_URL = 'https://aleksa-dent.ru';
const { buildMetadata } = await import(`${SRC}/shared/helpers/build-metadata.ts`);
const { PAGE_META } = await import(`${SRC}/shared/config/seo/page-meta.constants.ts`);

let failures = 0;
const check = (name, actual, expected) => {
    const ok = actual === expected;
    if (!ok) failures++;
    console.log(`${ok ? 'pass' : 'FAIL'} ${name}${ok ? '' : `: получено ${JSON.stringify(actual)}, ожидалось ${JSON.stringify(expected)}`}`);
};

// Без переопределений берутся значения реестра
const blog = buildMetadata('/blog');
check('title из реестра', blog.title, PAGE_META['/blog'].title);
check('canonical равен маршруту', blog.alternates.canonical, '/blog');
check('og:title получает суффикс', blog.openGraph.title, `${PAGE_META['/blog'].title} | Стоматология «Алекса»`);

// Пустые переопределения (то, что отдают динамические страницы при мёртвом API)
const emptyOverrides = buildMetadata('/blog', {});
check('пустые переопределения не затирают реестр', emptyOverrides.title, PAGE_META['/blog'].title);

// Переопределения применяются
const overridden = buildMetadata('/blog', { title: 'Статья про импланты' });
check('переопределение title применяется', overridden.title, 'Статья про импланты');
check('description остаётся из реестра', overridden.description, PAGE_META['/blog'].description);

// isAbsoluteTitle у главной
const home = buildMetadata('/');
check('главная отдаёт absolute title', home.title?.absolute, PAGE_META['/'].title);
check('главная без суффикса в og:title', home.openGraph.title, PAGE_META['/'].title);

// isNoIndex у /letter
const letter = buildMetadata('/letter');
check('letter закрыт от индексации', letter.robots?.index, false);
check('обычная страница без robots', blog.robots, undefined);

// Регрессия из ревью: у статей блога пропадал og:image, потому что страница
// собирала openGraph вручную. Теперь она разворачивает объект из buildMetadata.
check('og:image есть у каждой страницы', Array.isArray(blog.openGraph?.images) && blog.openGraph.images.length === 1, true);
check('og:image ведёт на /og с заголовком', blog.openGraph?.images?.[0]?.url, `/og?title=${encodeURIComponent(PAGE_META['/blog'].title)}`);
check('og:image размером 1200x630', `${blog.openGraph?.images?.[0]?.width}x${blog.openGraph?.images?.[0]?.height}`, '1200x630');
check('og:image статьи берёт её заголовок', overridden.openGraph?.images?.[0]?.url, `/og?title=${encodeURIComponent('Статья про импланты')}`);

console.log(failures ? `\nПРОВАЛЕНО: ${failures}` : '\nВсе проверки пройдены');
process.exit(failures ? 1 : 0);
