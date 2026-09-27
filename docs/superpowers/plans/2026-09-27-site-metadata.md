# Единый SEO-слой мета-информации — план реализации

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Дать всем 37 живым маршрутам сайта уникальные и грамотные метаданные, канонические адреса, Open Graph, карту сайта, robots и микроразметку организации.

**Architecture:** Централизованный реестр `shared/config/seo/page-meta.constants.ts` (путь → title/description) плюс хелпер `buildMetadata(route)`, который собирает из записи полный объект `Metadata` с canonical и OG. Каждая `page.tsx` становится однострочником. Тот же реестр — источник для `sitemap.ts`.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript strict, `next/og` (`ImageResponse`), Biome, pnpm.

**Spec:** `docs/superpowers/specs/2026-09-27-site-metadata-design.md`

## Global Constraints

- Все команды выполняются из `src/`, пакетный менеджер — только **pnpm**.
- Домен: `SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aleksa-dent.ru'`.
- Шаблон заголовка: `'%s | Стоматология «Алекса»'`. Содержательная часть title — **не длиннее 36 символов**.
- Description — **140–160 символов**, уникальный на каждой странице.
- В метаданных **запрещены HTML-сущности** (`&nbsp;`, `&mdash;`, `&laquo;`) — только живые символы.
- `keywords` не используется ни на одной странице.
- Без превосходных степеней и обещаний результата лечения (38-ФЗ «О рекламе»).
- Тексты берутся **дословно** из таблиц реестра в спеке — не переписывать по памяти.
- Biome: 4 пробела, 80 колонок, одинарные кавычки в TS, `useImportType` — ошибка.
- **Никогда** не запускать `pnpm lint:fix` или `pnpm format` по всему репозиторию — только на затронутых файлах.
- Тестового фреймворка нет. Роль «красного теста» играют `tsc --noEmit`, `pnpm build` и проверка фактического HTML через curl.

## Review Focus

Пять условий, которые спека подразумевает, но ни один шаг реализации сам по себе не проверяет. Тест на каждое добавлен в задачу, владеющую кодом.

1. **Бэкенд недоступен при сборке sitemap.** `getAllNews()` возвращает `undefined`, `getAvailableVacancies()` — `{ total: 0, results: [] }`. `/sitemap.xml` обязан отдать статическую часть, а не 500. → тест в Задаче 6.
2. **`generateMetadata` для несуществующего slug.** Вызывается раньше `notFound()` и получает `undefined`. Обязан вернуть фолбэк раздела, а не бросить на `response.title`. → тест в Задаче 5.
3. **Заголовок из API с HTML-сущностями или длиннее 60 символов.** Попадёт в `<title>` как есть и отрендерится текстом. Нужна нормализация. → тест в Задаче 5.
4. **`NEXT_PUBLIC_SITE_URL` задан без протокола.** `new URL('aleksa-dent.ru')` бросает `TypeError` на старте модуля и роняет всё приложение, а не одну страницу. → тест в Задаче 1.
5. **Файл шрифта недоступен для `ImageResponse`.** `/opengraph-image` отдаёт 500, краулеры получают битую карточку на каждой странице. Нужен фолбэк на системный шрифт. → тест в Задаче 8.

---

## File Structure

**Создаются:**

| Файл | Ответственность |
|---|---|
| `src/shared/config/seo/seo.constants.ts` | `SITE_URL`, `SITE_NAME`, `TITLE_TEMPLATE`, дефолтные title/description |
| `src/shared/config/seo/types/index.ts` | `PageMeta`, `SiteRoute` |
| `src/shared/config/seo/page-meta.constants.ts` | Реестр из 35 записей |
| `src/shared/config/seo/organization.ts` | JSON-LD `Dentist` + два `LocalBusiness` |
| `src/shared/config/seo/fonts/Involve-SemiBold-subset.ttf` | Шрифт для `ImageResponse` |
| `src/shared/helpers/build-metadata.ts` | Реестр → `Metadata` |
| `src/app/sitemap.ts` | Карта сайта |
| `src/app/robots.ts` | robots.txt |
| `src/app/opengraph-image.tsx` | OG-картинка 1200×630 |

**Изменяются:** `src/app/layout.tsx`, `src/app/not-found.tsx`, 35 файлов `page.tsx`, `src/public/favicon/site.webmanifest`.

**Удаляется:** `src/shared/config/general-meta.constants.ts`.

---

### Task 1: Фундамент — константы, типы, хелпер, корневой layout

**Files:**
- Create: `src/shared/config/seo/seo.constants.ts`
- Create: `src/shared/config/seo/types/index.ts`
- Create: `src/shared/helpers/build-metadata.ts`
- Modify: `src/app/layout.tsx`
- Delete: `src/shared/config/general-meta.constants.ts`

**Interfaces:**
- Consumes: `SITE_NAVIGATION` из `@/shared/config/site-navigation`.
- Produces:
  - `SITE_URL: string`, `SITE_NAME: string`, `TITLE_TEMPLATE: string`, `DEFAULT_TITLE: string`, `DEFAULT_DESCRIPTION: string`
  - `type SiteRoute = (typeof SITE_NAVIGATION)[keyof typeof SITE_NAVIGATION]`
  - `type PageMeta = { title: string; description: string; isAbsoluteTitle?: boolean; isNoIndex?: boolean }`
  - `buildMetadata(route: SiteRoute, overrides?: Partial<PageMeta>): Metadata`

- [ ] **Step 1: Написать константы**

Создать `src/shared/config/seo/seo.constants.ts`:

```ts
const FALLBACK_SITE_URL = 'https://aleksa-dent.ru';

const normalizeSiteUrl = (rawUrl: string | undefined): string => {
    if (!rawUrl) return FALLBACK_SITE_URL;

    const trimmedUrl = rawUrl.trim().replace(/\/+$/, '');

    if (!/^https?:\/\//.test(trimmedUrl)) return FALLBACK_SITE_URL;

    return trimmedUrl;
};

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const SITE_NAME = 'Стоматология «Алекса»';
export const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;
export const DEFAULT_TITLE =
    'Семейная стоматология «Алекса» в Ростове-на-Дону';
export const DEFAULT_DESCRIPTION =
    'Семейная стоматология в Ростове-на-Дону: терапия под микроскопом, имплантация, ортодонтия, детский приём, лечение во сне. Два филиала. Запишитесь на консультацию.';
export const OG_LOCALE = 'ru_RU';
```

`normalizeSiteUrl` закрывает пункт 4 Review Focus: без него `new URL('aleksa-dent.ru')` в `metadataBase` бросит `TypeError` на старте модуля и уронит всё приложение.

- [ ] **Step 2: Написать типы**

Создать `src/shared/config/seo/types/index.ts`:

```ts
import type { SITE_NAVIGATION } from '@/shared/config/site-navigation';

export type SiteRoute = (typeof SITE_NAVIGATION)[keyof typeof SITE_NAVIGATION];

export type PageMeta = {
    title: string;
    description: string;
    isAbsoluteTitle?: boolean;
    isNoIndex?: boolean;
};
```

- [ ] **Step 3: Проверить, что нормализация домена работает**

Run:
```bash
cd src && npx tsx -e "
process.env.NEXT_PUBLIC_SITE_URL='aleksa-dent.ru';
" 2>/dev/null || true
cd src && node --input-type=module -e "
const normalize = (raw) => {
  if (!raw) return 'https://aleksa-dent.ru';
  const t = raw.trim().replace(/\/+\$/, '');
  if (!/^https?:\/\//.test(t)) return 'https://aleksa-dent.ru';
  return t;
};
console.assert(normalize(undefined) === 'https://aleksa-dent.ru', 'undefined');
console.assert(normalize('aleksa-dent.ru') === 'https://aleksa-dent.ru', 'no protocol');
console.assert(normalize('https://staging.example.com/') === 'https://staging.example.com', 'trailing slash');
console.log('ok');
new URL(normalize('aleksa-dent.ru'));
console.log('URL constructed without throwing');
"
```
Expected: `ok` и `URL constructed without throwing`. Если печатает assertion-ошибку — логика нормализации неверна, править до перехода дальше.

- [ ] **Step 4: Написать хелпер**

Создать `src/shared/helpers/build-metadata.ts`:

```ts
import type { Metadata } from 'next';
import { PAGE_META } from '@/shared/config/seo/page-meta.constants';
import {
    DEFAULT_DESCRIPTION,
    DEFAULT_TITLE,
    OG_LOCALE,
    SITE_NAME,
} from '@/shared/config/seo/seo.constants';
import type { PageMeta, SiteRoute } from '@/shared/config/seo/types';

export const buildMetadata = (
    route: SiteRoute,
    overrides?: Partial<PageMeta>,
): Metadata => {
    const registryMeta = PAGE_META[route];

    const meta: PageMeta = {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        ...registryMeta,
        ...overrides,
    };

    const title = meta.isAbsoluteTitle
        ? { absolute: meta.title }
        : meta.title;

    return {
        title,
        description: meta.description,
        alternates: { canonical: route },
        openGraph: {
            type: 'website',
            locale: OG_LOCALE,
            siteName: SITE_NAME,
            url: route,
            title: meta.isAbsoluteTitle
                ? meta.title
                : `${meta.title} | ${SITE_NAME}`,
            description: meta.description,
        },
        ...(meta.isNoIndex
            ? { robots: { index: false, follow: true } }
            : {}),
    };
};
```

Спред `...registryMeta` перед `...overrides` даёт нужный порядок приоритета: дефолт → реестр → переопределение вызывающего.

- [ ] **Step 5: Переписать корневой layout**

В `src/app/layout.tsx` заменить импорт `GENERAL_META` и блок `metadata`:

```ts
import {
    DEFAULT_DESCRIPTION,
    DEFAULT_TITLE,
    OG_LOCALE,
    SITE_NAME,
    SITE_URL,
    TITLE_TEMPLATE,
} from '@/shared/config/seo/seo.constants';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: DEFAULT_TITLE,
        template: TITLE_TEMPLATE,
    },
    description: DEFAULT_DESCRIPTION,
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        locale: OG_LOCALE,
        siteName: SITE_NAME,
        url: '/',
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
    },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false },
};
```

И в том же файле заменить `<html lang="en"` на `<html lang="ru"`.

- [ ] **Step 6: Удалить старые константы**

```bash
cd src && rm shared/config/general-meta.constants.ts
grep -rn "general-meta" src/ && echo "ОСТАЛИСЬ ССЫЛКИ — починить" || echo "ссылок нет"
```
Expected: `ссылок нет`.

- [ ] **Step 7: Проверить сборку**

Файл `page-meta.constants.ts` ещё не существует, поэтому `tsc` упадёт на импорте в хелпере — это ожидаемое «красное» состояние, оно закрывается Задачей 2.

Run: `cd src && npx tsc --noEmit 2>&1 | grep -v "page-meta.constants" | head -20`
Expected: пусто (других ошибок типов нет).

- [ ] **Step 8: Закоммитить**

```bash
cd /Users/this_is_gilya/projects/alexa-webapp
git add src/shared/config/seo src/shared/helpers/build-metadata.ts src/app/layout.tsx
git add -A src/shared/config/general-meta.constants.ts
git commit -m "feat: добавить фундамент SEO-слоя и исправить lang документа

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 2: Реестр метаданных — 35 записей

**Files:**
- Create: `src/shared/config/seo/page-meta.constants.ts`
- Modify: `src/shared/config/seo/types/index.ts` (расширение `SiteRoute`, см. Step 1)

**Interfaces:**
- Consumes: `PageMeta`, `SiteRoute` из Задачи 1; `SITE_NAVIGATION`.
- Produces: `PAGE_META: Record<SiteRoute, PageMeta>`

- [ ] **Step 1: Перенести все 35 записей из спеки**

Тексты копируются **дословно** из четырёх таблиц раздела «Реестр: 35 статических записей» в `docs/superpowers/specs/2026-09-27-site-metadata-design.md`. Открыть спеку рядом и переносить, не пересказывая.

Структура файла:

```ts
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import type { PageMeta, SiteRoute } from './types';

export const PAGE_META: Record<SiteRoute, PageMeta> = {
    [SITE_NAVIGATION.landyshevayaBase]: {
        title: 'Семейная стоматология «Алекса» в Ростове-на-Дону',
        description:
            'Семейная стоматология в Ростове-на-Дону: терапия под микроскопом, имплантация, ортодонтия, детский приём, лечение во сне. Два филиала. Запишитесь на консультацию.',
        isAbsoluteTitle: true,
    },
    [SITE_NAVIGATION.letter]: {
        title: 'Письмо руководителю',
        description:
            'Форма обращения к руководителю стоматологии «Алекса». Напишите о качестве лечения, работе администраторов или предложите улучшение.',
        isNoIndex: true,
    },
    // … остальные 33 записи из таблиц спеки
};
```

`landyshevayaBase` — это `'/'`, главная; единственная запись с `isAbsoluteTitle`. `letter` — единственная с `isNoIndex`.

Сервисные маршруты лежат в `SITE_NAVIGATION.landyshevayaServices`, а не на верхнем уровне, поэтому ключи для них пишутся так:

```ts
    [SITE_NAVIGATION.landyshevayaServices.parodontologiya]: {
        title: 'Лечение дёсен: пародонтология',
        description:
            'Лечим воспаление и кровоточивость дёсен, пародонтит и пародонтоз. Чистка пародонтальных карманов, шинирование подвижных зубов, поддерживающая терапия.',
    },
```

Из-за вложенности `landyshevayaServices` тип `SiteRoute` из Задачи 1 не покроет сервисные пути. Расширить его в `src/shared/config/seo/types/index.ts`:

```ts
type FlatRoute = (typeof SITE_NAVIGATION)[keyof typeof SITE_NAVIGATION];
type ServiceRoute =
    (typeof SITE_NAVIGATION.landyshevayaServices)[keyof typeof SITE_NAVIGATION.landyshevayaServices];

export type SiteRoute = Extract<FlatRoute, string> | ServiceRoute;
```

`Extract<FlatRoute, string>` отсекает объект `landyshevayaServices`, который иначе попал бы в объединение.

- [ ] **Step 2: Проверить полноту реестра**

Run:
```bash
cd src && npx tsc --noEmit 2>&1 | head -20
```
Expected: пусто. `Record<SiteRoute, PageMeta>` требует **все** ключи — если запись пропущена, `tsc` назовёт недостающий путь. Это и есть тест на полноту.

- [ ] **Step 3: Проверить правила копирайта**

Run:
```bash
cd src && node --input-type=module -e "
import('./shared/config/seo/page-meta.constants.ts').catch(() => {});
" 2>/dev/null
cd src && grep -oE \"'[^']{20,}'\" shared/config/seo/page-meta.constants.ts | grep -E '&[a-z]+;|&#' && echo 'НАЙДЕНЫ HTML-СУЩНОСТИ' || echo 'сущностей нет'
grep -c "title:" shared/config/seo/page-meta.constants.ts
```
Expected: `сущностей нет`, и `title:` встречается 35 раз.

- [ ] **Step 4: Проверить уникальность описаний**

Run:
```bash
cd src && grep -A2 "description:" shared/config/seo/page-meta.constants.ts \
  | grep -oE "'[^']{100,}'" | sort | uniq -d
```
Expected: пусто — ни одного повторяющегося description.

- [ ] **Step 5: Линт и коммит**

```bash
cd src && npx biome check --write shared/config/seo/
cd /Users/this_is_gilya/projects/alexa-webapp
git add src/shared/config/seo/
git commit -m "feat: добавить реестр метаданных для всех страниц

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 3: Подключить 15 сервисных страниц

**Files:**
- Modify: все 15 файлов `src/app/landyshevaya/*/page.tsx`, кроме `src/app/landyshevaya/page.tsx`

**Interfaces:**
- Consumes: `buildMetadata` из Задачи 1, `PAGE_META` из Задачи 2.
- Produces: ничего для последующих задач.

- [ ] **Step 1: Зафиксировать исходное состояние**

Run:
```bash
cd src && grep -L "buildMetadata" app/landyshevaya/*/page.tsx | wc -l
```
Expected: `16` (15 сервисных + мёртвая `app/landyshevaya/page.tsx`). Это «красное» состояние.

- [ ] **Step 2: Переписать каждую страницу**

В девяти взрослых и шести детских страницах удалить весь блок `export const generateMetadata = () => {...}` (там, где он есть) и заменить на одну строку. Образец для `app/landyshevaya/parodontologiya/page.tsx`:

```ts
import type { Metadata } from 'next';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import PeriodontologyPage from '@/views/periodontology-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaServices.parodontologiya,
);

export default function Periodontology() {
    return <PeriodontologyPage />;
}
```

Существующий `export const revalidate = 60` и дефолтный экспорт страницы **не трогать** — меняется только блок метаданных.

Ключи `landyshevayaServices` для остальных четырнадцати: `konsultaciya-stomatologa`, `terapiya-vz`, `ortodontiya-vz`, `ortopediya-vz`, `hirurgiya-i-implantaciya`, `gnatologiya`, `gigiena-i-profilaktika-vz`, `lechenie-vo-sne-vz`, `konsultaciya-detskogo-stomatologa`, `detskaya-terapiya`, `detskaya-hirurgiya`, `ortodontiya`, `gigiena-i-profilaktika`, `lechenie-vo-sne`. Ключи с дефисом пишутся в квадратных скобках со строкой: `SITE_NAVIGATION.landyshevayaServices['terapiya-vz']`.

- [ ] **Step 3: Проверить, что старых блоков не осталось**

Run:
```bash
cd src && grep -l "generateMetadata" app/landyshevaya/*/page.tsx
```
Expected: пусто.

- [ ] **Step 4: Проверить типы**

Run: `cd src && npx tsc --noEmit 2>&1 | head -20`
Expected: пусто.

- [ ] **Step 5: Проверить фактический вывод**

Run:
```bash
cd src && pnpm build && pnpm start &
sleep 15
for p in parodontologiya gnatologiya ortodontiya-vz ortopediya-vz; do
  echo -n "$p: "
  curl -s "http://localhost:3000/landyshevaya/$p" | grep -oE '<title>[^<]*</title>'
done
kill %1
```
Expected: четыре разных заголовка, среди них «Лечение дёсен: пародонтология | Стоматология «Алекса»» и «Гнатология и лечение ВНЧС | Стоматология «Алекса»». Ни одного «Алекса» в одиночку, и описание ортодонтии больше не про протезы.

- [ ] **Step 6: Линт и коммит**

```bash
cd src && npx biome check --write app/landyshevaya/
cd /Users/this_is_gilya/projects/alexa-webapp
git add src/app/landyshevaya/
git commit -m "feat: подключить метаданные к страницам услуг

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 4: Подключить 20 основных, информационных и юридических страниц

**Files:**
- Modify: `src/app/(home)/page.tsx`, `src/app/volkova/page.tsx`, `src/app/price/page.tsx`, `src/app/vrachi/page.tsx`, `src/app/raspisanievrachej/page.tsx`, `src/app/o-klinike/page.tsx`, `src/app/akcii/page.tsx`, `src/app/blog/page.tsx`, `src/app/vakansii/page.tsx`, `src/app/dms/page.tsx`, `src/app/pacientu/page.tsx`, `src/app/nalogovyjvychet/page.tsx`, `src/app/rekvizity/page.tsx`, `src/app/nadzornye-organy/page.tsx`, `src/app/dokumenty-i-licenzii/page.tsx`, `src/app/privacy/page.tsx`, `src/app/personal-data/page.tsx`, `src/app/letter/page.tsx`, `src/app/pravilaokazaniyamedicinskihuslug/page.tsx`, `src/app/pravilavneseniyaoplatyzamedicinskieuslugi/page.tsx`
- Modify: `src/app/not-found.tsx`

**Interfaces:**
- Consumes: `buildMetadata`, `PAGE_META`.
- Produces: ничего.

- [ ] **Step 1: Переписать простые страницы**

Образец для `src/app/price/page.tsx`:

```ts
import type { Metadata } from 'next';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import PricePage from '@/views/price-page';

export const metadata: Metadata = buildMetadata(SITE_NAVIGATION.price);

export default function Price() {
    return <PricePage />;
}
```

- [ ] **Step 2: Переписать страницы с серверными данными**

У `(home)` и `vakansii` уже есть `generateMetadata` и асинхронный дефолтный экспорт. Удалить блок `generateMetadata`, добавить `export const metadata`, **сохранив** `export const revalidate = 60` и всю логику фетчинга. Для `src/app/(home)/page.tsx`:

```ts
import type { Metadata } from 'next';
import { getAllNews } from '@/entities/news/api/get-all-news';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import HomePage from '@/views/home-page';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata(
    SITE_NAVIGATION.landyshevayaBase,
);

export default async function Home() {
    const initialNewsPageData = await getAllNews();

    return <HomePage initialNewsData={initialNewsPageData} />;
}
```

- [ ] **Step 3: Добавить метаданные странице 404**

В `src/app/not-found.tsx` добавить:

```ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Страница не найдена',
    robots: { index: false, follow: false },
};
```

Здесь `buildMetadata` не используется: у `/not-found` нет записи в `SITE_NAVIGATION` и не должно быть canonical.

- [ ] **Step 4: Проверить типы и отсутствие остатков**

Run:
```bash
cd src && npx tsc --noEmit 2>&1 | head -20
grep -rl "generateMetadata" app/ | grep -v "\[slug\]"
```
Expected: `tsc` молчит; второй grep пуст (`generateMetadata` остаётся только у двух динамических маршрутов).

- [ ] **Step 5: Проверить, что заглушек не осталось**

Run:
```bash
cd src && pnpm build && pnpm start &
sleep 15
for p in "" price vrachi o-klinike akcii blog dms rekvizity privacy letter; do
  echo -n "/$p -> "
  curl -s "http://localhost:3000/$p" | grep -oE '<title>[^<]*</title>'
done
echo -n "noindex на /letter: "
curl -s http://localhost:3000/letter | grep -oE '<meta name="robots"[^>]*>'
kill %1
```
Expected: десять разных осмысленных заголовков, нигде не `<title>Алекса</title>`; на `/letter` присутствует `noindex`.

- [ ] **Step 6: Линт и коммит**

```bash
cd src && npx biome check --write app/
cd /Users/this_is_gilya/projects/alexa-webapp
git add src/app/
git commit -m "feat: подключить метаданные к основным и юридическим страницам

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 5: Динамические страницы — блог и вакансии

**Files:**
- Modify: `src/app/blog/[slug]/page.tsx`
- Modify: `src/app/vakansii/[slug]/page.tsx`
- Create: `src/shared/helpers/normalize-meta-text.ts`

**Interfaces:**
- Consumes: `buildMetadata`; `getSingleNews(slug): Promise<SingleNewsProps | undefined>`; `getDetailVacancy({ vacancySlug }): Promise<DetailVacancyType | undefined>`.
- Produces: `normalizeMetaText(raw: string | undefined, maxLength: number): string | undefined`

- [ ] **Step 1: Написать нормализацию текста из API**

Закрывает пункт 3 Review Focus. Создать `src/shared/helpers/normalize-meta-text.ts`:

```ts
const HTML_ENTITIES: Record<string, string> = {
    '&nbsp;': ' ',
    '&mdash;': '—',
    '&ndash;': '–',
    '&laquo;': '«',
    '&raquo;': '»',
    '&#8209;': '‑',
    '&amp;': '&',
    '&quot;': '"',
};

export const normalizeMetaText = (
    raw: string | undefined,
    maxLength: number,
): string | undefined => {
    if (!raw) return undefined;

    let text = raw.replace(/<[^>]*>/g, '');

    for (const [entity, char] of Object.entries(HTML_ENTITIES)) {
        text = text.split(entity).join(char);
    }

    text = text.replace(/\s+/g, ' ').trim();

    if (!text) return undefined;
    if (text.length <= maxLength) return text;

    const cut = text.slice(0, maxLength - 1);
    const lastSpace = cut.lastIndexOf(' ');

    return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
};
```

- [ ] **Step 2: Проверить нормализацию**

Run:
```bash
cd src && node --input-type=module -e "
const E = {'&nbsp;':' ','&mdash;':'—','&laquo;':'«','&raquo;':'»'};
const n = (raw, max) => {
  if (!raw) return undefined;
  let t = raw.replace(/<[^>]*>/g, '');
  for (const [e, c] of Object.entries(E)) t = t.split(e).join(c);
  t = t.replace(/\s+/g, ' ').trim();
  if (!t) return undefined;
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const ls = cut.lastIndexOf(' ');
  return (ls > 0 ? cut.slice(0, ls) : cut).trimEnd() + '…';
};
console.assert(n(undefined, 60) === undefined, 'undefined');
console.assert(n('', 60) === undefined, 'пустая строка');
console.assert(n('Клиника&nbsp;&laquo;Алекса&raquo;', 60) === 'Клиника «Алекса»', 'сущности: ' + n('Клиника&nbsp;&laquo;Алекса&raquo;', 60));
console.assert(n('<p>Текст</p>', 60) === 'Текст', 'теги');
console.assert(n('а'.repeat(100), 60).length <= 60, 'обрезка');
console.log('ok');
"
```
Expected: `ok` без assertion-ошибок.

- [ ] **Step 3: Подключить метаданные блога**

В `src/app/blog/[slug]/page.tsx` добавить импорты:

```ts
import type { Metadata } from 'next';
import { PAGE_META } from '@/shared/config/seo/page-meta.constants';
import { OG_LOCALE, SITE_NAME } from '@/shared/config/seo/seo.constants';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { buildMetadata } from '@/shared/helpers/build-metadata';
import { normalizeMetaText } from '@/shared/helpers/normalize-meta-text';
```

и перед дефолтным экспортом:

```ts
export const generateMetadata = async ({
    params,
}: SingleBlogPageParams): Promise<Metadata> => {
    const { slug } = await params;
    const news = await getSingleNews(slug);

    const title = normalizeMetaText(news?.title, 60);
    const description = normalizeMetaText(news?.description, 160);

    return {
        ...buildMetadata(SITE_NAVIGATION.blog, {
            ...(title ? { title } : {}),
            ...(description ? { description } : {}),
        }),
        alternates: { canonical: `${SITE_NAVIGATION.blog}/${slug}` },
        openGraph: {
            type: 'article',
            locale: OG_LOCALE,
            siteName: SITE_NAME,
            url: `${SITE_NAVIGATION.blog}/${slug}`,
            title: title ?? PAGE_META[SITE_NAVIGATION.blog].title,
            description:
                description ?? PAGE_META[SITE_NAVIGATION.blog].description,
        },
    };
};
```

Условные спреды `...(title ? { title } : {})` существенны: `getSingleNews` глотает ошибки и возвращает `undefined`, и без них `title: undefined` перезатрёт фолбэк реестра. Это пункт 2 Review Focus.

- [ ] **Step 4: Подключить метаданные вакансии**

В `src/app/vakansii/[slug]/page.tsx` — то же самое, с поправкой на форму ответа (`hero.vacancy_name`, `hero.description`) и с `type: 'website'`:

```ts
export const generateMetadata = async ({
    params,
}: DetailVacancyParams): Promise<Metadata> => {
    const { slug } = await params;
    const vacancy = await getDetailVacancy({ vacancySlug: slug });

    const title = normalizeMetaText(vacancy?.hero?.vacancy_name, 60);
    const description = normalizeMetaText(vacancy?.hero?.description, 160);

    return {
        ...buildMetadata(SITE_NAVIGATION.vakansii, {
            ...(title ? { title } : {}),
            ...(description ? { description } : {}),
        }),
        alternates: { canonical: `${SITE_NAVIGATION.vakansii}/${slug}` },
    };
};
```

- [ ] **Step 5: Проверить фолбэк на несуществующем slug**

Run:
```bash
cd src && pnpm build && pnpm start &
sleep 15
echo -n "несуществующая статья: "
curl -s http://localhost:3000/blog/takoj-stati-net-12345 | grep -oE '<title>[^<]*</title>'
echo -n "несуществующая вакансия: "
curl -s http://localhost:3000/vakansii/takoj-vakansii-net-12345 | grep -oE '<title>[^<]*</title>'
kill %1
```
Expected: обе страницы отвечают 404-страницей и **не падают с 500**; заголовок — «Страница не найдена», а не пустой и не выброшенное исключение. Ключевое: в выводе `pnpm start` нет необработанного `TypeError`.

- [ ] **Step 6: Линт и коммит**

```bash
cd src && npx biome check --write app/blog app/vakansii shared/helpers/normalize-meta-text.ts
cd /Users/this_is_gilya/projects/alexa-webapp
git add src/app/blog src/app/vakansii src/shared/helpers/normalize-meta-text.ts
git commit -m "feat: собирать метаданные статей и вакансий из ответа API

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 6: robots.txt и карта сайта

**Files:**
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`

**Interfaces:**
- Consumes: `PAGE_META`, `SITE_URL`, `getAllNews`, `getAvailableVacancies`.
- Produces: ничего.

- [ ] **Step 1: Написать robots**

Создать `src/app/robots.ts`:

```ts
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/shared/config/seo/seo.constants';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/letter', '/api/'],
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
```

- [ ] **Step 2: Написать карту сайта**

Создать `src/app/sitemap.ts`:

```ts
import type { MetadataRoute } from 'next';
import { getAllNews } from '@/entities/news/api/get-all-news';
import { PAGE_META } from '@/shared/config/seo/page-meta.constants';
import { SITE_URL } from '@/shared/config/seo/seo.constants';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import { getAvailableVacancies } from '@/views/vacancies-page/api/get-available-vacancies';

export const revalidate = 3600;

const EXCLUDED_ROUTES: Array<string> = [SITE_NAVIGATION.letter];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const lastModified = new Date();

    const staticEntries = Object.entries(PAGE_META)
        .filter(([route]) => !EXCLUDED_ROUTES.includes(route))
        .map(([route]) => ({
            url: `${SITE_URL}${route === '/' ? '' : route}`,
            lastModified,
            priority: route === '/' ? 1 : 0.7,
        }));

    const [news, vacancies] = await Promise.all([
        getAllNews(),
        getAvailableVacancies(),
    ]);

    const newsEntries = (news?.items ?? [])
        .filter((item) => Boolean(item.slug))
        .map((item) => ({
            url: `${SITE_URL}${SITE_NAVIGATION.blog}/${item.slug}`,
            lastModified,
            priority: 0.5,
        }));

    const vacancyEntries = (vacancies?.results ?? []).map((item) => ({
        url: `${SITE_URL}${SITE_NAVIGATION.vakansii}/${item.slug}`,
        lastModified,
        priority: 0.5,
    }));

    return [...staticEntries, ...newsEntries, ...vacancyEntries];
}
```

`news?.items ?? []` и `vacancies?.results ?? []` обязательны: оба фетчера глотают ошибки, `getAllNews` возвращает `undefined`, а `NewsCardProps.slug` опционален. Это пункт 1 Review Focus.

- [ ] **Step 3: Проверить поведение при недоступном бэкенде**

Run:
```bash
cd src && API_URL=http://127.0.0.1:9 NEXT_PUBLIC_API_URL=http://127.0.0.1:9 pnpm build \
  && API_URL=http://127.0.0.1:9 pnpm start &
sleep 15
echo -n "HTTP-код sitemap при мёртвом бэкенде: "
curl -s -o /tmp/sitemap-offline.xml -w '%{http_code}\n' http://localhost:3000/sitemap.xml
echo -n "число URL в карте: "
grep -c "<loc>" /tmp/sitemap-offline.xml
kill %1
```
Expected: код `200` и **34** записи — статическая часть без `/letter`. Если код 500, `sitemap.ts` не защищён от `undefined` и его нужно чинить.

- [ ] **Step 4: Проверить при живом бэкенде**

Run:
```bash
cd src && pnpm build && pnpm start &
sleep 15
curl -s http://localhost:3000/robots.txt
echo -n "всего URL: "; curl -s http://localhost:3000/sitemap.xml | grep -c "<loc>"
echo -n "letter в карте (должно быть 0): "; curl -s http://localhost:3000/sitemap.xml | grep -c "letter" || true
kill %1
```
Expected: в `robots.txt` присутствуют `Disallow: /letter` и ссылка на sitemap; URL не меньше 34; `/letter` отсутствует.

- [ ] **Step 5: Линт и коммит**

```bash
cd src && npx biome check --write app/robots.ts app/sitemap.ts
cd /Users/this_is_gilya/projects/alexa-webapp
git add src/app/robots.ts src/app/sitemap.ts
git commit -m "feat: добавить robots.txt и карту сайта

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 7: Микроразметка организации

**Files:**
- Create: `src/shared/config/seo/organization.ts`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `YANDEX_MAP_INFO_CARD`, `MOBILE_PHONE` из `@/shared/config/global-constants.constants`; `SITE_URL`, `SITE_NAME`.
- Produces: `ORGANIZATION_JSON_LD: object`

- [ ] **Step 1: Собрать схему**

Создать `src/shared/config/seo/organization.ts`. Адреса и координаты переиспользуются из существующих констант, чтобы не разъехались; `&nbsp;` из контентных строк вычищаются.

```ts
import {
    MOBILE_PHONE,
    YANDEX_MAP_INFO_CARD,
} from '@/shared/config/global-constants.constants';
import { SITE_NAME, SITE_URL } from './seo.constants';

const stripEntities = (value: string): string =>
    value.replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

const OPENING_HOURS = [
    {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
    },
];

const BRANCH_LOCALITY: Record<string, string> = {
    'Поселок Янтарный': 'посёлок Янтарный',
    'Ростов-на-Дону': 'Ростов-на-Дону',
};

const departments = YANDEX_MAP_INFO_CARD.branches.map((branch) => ({
    '@type': 'LocalBusiness',
    name: `${SITE_NAME} — ${stripEntities(branch.title)}`,
    telephone: branch.phone,
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'RU',
        addressRegion: 'Ростовская область',
        addressLocality:
            BRANCH_LOCALITY[branch.locality] ?? branch.locality,
        streetAddress: stripEntities(branch.title),
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: branch.cords[0],
        longitude: branch.cords[1],
    },
    openingHoursSpecification: OPENING_HOURS,
}));

export const ORGANIZATION_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: SITE_NAME,
    legalName: 'Общество с ограниченной ответственностью «Алекса»',
    url: SITE_URL,
    email: 'oooalexa@bk.ru',
    telephone: MOBILE_PHONE.landyshevaya,
    taxID: '6161055650',
    identifier: { '@type': 'PropertyValue', name: 'ОГРН', value: '1096193002597' },
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'RU',
        addressRegion: 'Ростовская область',
        addressLocality: 'Ростов-на-Дону',
        streetAddress: 'ул. Волкова, д. 22',
        postalCode: '344092',
    },
    department: departments,
};
```

Поле номера лицензии **не заполняется** — в репозитории его нет, а выдумывать реквизит медицинской лицензии нельзя. Отмечено в рисках спеки.

- [ ] **Step 2: Вставить скрипт в layout**

В `src/app/layout.tsx` внутри `<body>`, перед `<ReactQueryCustomProvider>`:

```tsx
<script
    type="application/ld+json"
    // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD требует инлайн-скрипта
    dangerouslySetInnerHTML={{
        __html: JSON.stringify(ORGANIZATION_JSON_LD),
    }}
/>
```

- [ ] **Step 3: Проверить, что разметка валидный JSON и без сущностей**

Run:
```bash
cd src && pnpm build && pnpm start &
sleep 15
curl -s http://localhost:3000/ \
  | grep -oE '<script type="application/ld\+json">.*?</script>' \
  | sed -E 's|<script[^>]*>||; s|</script>||' > /tmp/ld.json
node -e "
const d = require('/tmp/ld.json');
console.assert(d['@type'] === 'Dentist', 'тип');
console.assert(d.department.length === 2, 'два филиала, получено: ' + d.department.length);
console.assert(!JSON.stringify(d).includes('&nbsp;'), 'остались HTML-сущности');
console.assert(typeof d.department[0].geo.latitude === 'number', 'координаты не число');
console.log('ok');
"
kill %1
```
Expected: `ok`. Если падает на `&nbsp;` — `stripEntities` применён не ко всем строкам.

- [ ] **Step 4: Добавить разметку статьи блога**

Спека требует `Article` на статьях. Дописать в `src/shared/config/seo/organization.ts`:

```ts
type ArticleJsonLdParams = {
    title: string;
    description?: string;
    slug: string;
    publishDate?: string;
};

export const buildArticleJsonLd = ({
    title,
    description,
    slug,
    publishDate,
}: ArticleJsonLdParams) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    ...(description ? { description } : {}),
    ...(publishDate ? { datePublished: publishDate } : {}),
    url: `${SITE_URL}/blog/${slug}`,
    publisher: {
        '@type': 'Dentist',
        name: SITE_NAME,
        url: SITE_URL,
    },
});
```

Условные спреды нужны по той же причине, что и в Задаче 5: `SingleNewsProps.description`
и `publishDate` опциональны, а `datePublished: undefined` даёт невалидную разметку.

В `src/app/blog/[slug]/page.tsx` внутри дефолтного экспорта, после проверки
`if (!initialSingleNewsPage) return notFound();`:

```tsx
const articleJsonLd = buildArticleJsonLd({
    title: normalizeMetaText(initialSingleNewsPage.title, 200) ?? '',
    description: normalizeMetaText(initialSingleNewsPage.description, 300),
    slug,
    publishDate: initialSingleNewsPage.publishDate,
});

return (
    <>
        <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD требует инлайн-скрипта
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <SingleBlogPage {...initialSingleNewsPage} />
    </>
);
```

- [ ] **Step 5: Проверить разметку статьи**

Run:
```bash
cd src && pnpm build && pnpm start &
sleep 15
SLUG=$(curl -s http://localhost:3000/sitemap.xml \
  | grep -oE '<loc>[^<]*/blog/[^<]+</loc>' | head -1 \
  | sed -E 's|.*/blog/||; s|</loc>||')
echo "проверяем статью: ${SLUG:-НЕТ СТАТЕЙ В КАРТЕ}"
if [ -n "$SLUG" ]; then
  curl -s "http://localhost:3000/blog/$SLUG" \
    | grep -oE '"@type":"Article"[^}]*' | head -1
fi
kill %1
```
Expected: в выводе присутствует `"@type":"Article"` с непустым `headline`.
Если статей в карте нет — бэкенд пуст, шаг считается пройденным после ручной
проверки на любой существующей статье.

- [ ] **Step 6: Линт и коммит**

```bash
cd src && npx biome check --write shared/config/seo/organization.ts app/layout.tsx app/blog
cd /Users/this_is_gilya/projects/alexa-webapp
git add src/shared/config/seo/organization.ts src/app/layout.tsx src/app/blog
git commit -m "feat: добавить микроразметку организации, филиалов и статей

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 8: OG-картинка

**Files:**
- Create: `src/shared/config/seo/fonts/Involve-SemiBold-subset.ttf`
- Create: `src/app/opengraph-image.tsx`

**Interfaces:**
- Consumes: `SITE_URL`, `SITE_NAME`, `DEFAULT_TITLE`.
- Produces: маршрут `/opengraph-image`.

- [ ] **Step 1: Подготовить шрифт**

`ImageResponse` не принимает woff2, а Involve есть только в woff2. Конвертация разовая, результат коммитится.

Run:
```bash
python3 -m pip install --user --quiet fonttools brotli
mkdir -p src/shared/config/seo/fonts
python3 -c "
from fontTools.ttLib import TTFont
from fontTools.subset import Subsetter
f = TTFont('src/public/fonts/Involve-SemiBold.woff2')
f.flavor = None
s = Subsetter()
s.populate(unicodes=list(range(0x20, 0x7F)) + list(range(0x400, 0x500)) + [0x2014, 0x2116, 0xAB, 0xBB, 0x2026])
s.subset(f)
f.save('src/shared/config/seo/fonts/Involve-SemiBold-subset.ttf')
"
ls -la src/shared/config/seo/fonts/
```
Expected: файл создан, размер заметно меньше 118 КБ (полного TTF).

- [ ] **Step 2: Написать маршрут картинки**

Создать `src/app/opengraph-image.tsx`:

```tsx
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { DEFAULT_TITLE, SITE_URL } from '@/shared/config/seo/seo.constants';

export const alt = DEFAULT_TITLE;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const FONT_PATH = join(
    process.cwd(),
    'shared/config/seo/fonts/Involve-SemiBold-subset.ttf',
);

const loadFont = async (): Promise<Array<{
    name: string;
    data: Buffer;
    weight: 600;
    style: 'normal';
}>> => {
    try {
        const data = await readFile(FONT_PATH);

        return [{ name: 'Involve', data, weight: 600, style: 'normal' }];
    } catch (error) {
        console.error('OG font unavailable, falling back', error);

        return [];
    }
};

export default async function OpengraphImage() {
    const fonts = await loadFont();
    const domain = SITE_URL.replace(/^https?:\/\//, '');

    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#183826',
                padding: '80px',
                fontFamily: fonts.length ? 'Involve' : 'sans-serif',
            }}
        >
            <div style={{ display: 'flex', color: '#a3d2b9', fontSize: 36 }}>
                Стоматология «Алекса»
            </div>
            <div
                style={{
                    display: 'flex',
                    color: '#ffffff',
                    fontSize: 72,
                    lineHeight: 1.15,
                }}
            >
                {DEFAULT_TITLE}
            </div>
            <div style={{ display: 'flex', color: '#7fc29e', fontSize: 32 }}>
                {domain}
            </div>
        </div>,
        { ...size, ...(fonts.length ? { fonts } : {}) },
    );
}
```

`loadFont` с `try/catch` и пустым массивом закрывает пункт 5 Review Focus: без него недоступный файл шрифта даёт 500 на каждой OG-карточке сайта.

- [ ] **Step 3: Проверить, что картинка отдаётся**

Run:
```bash
cd src && pnpm build && pnpm start &
sleep 15
echo -n "код и тип: "
curl -s -o /tmp/og.png -w '%{http_code} %{content_type}\n' http://localhost:3000/opengraph-image
file /tmp/og.png
kill %1
```
Expected: `200 image/png`, и `file` опознаёт «PNG image data, 1200 x 630».

- [ ] **Step 4: Проверить фолбэк без шрифта**

Run:
```bash
cd src && mv shared/config/seo/fonts/Involve-SemiBold-subset.ttf /tmp/font-backup.ttf
pnpm build && pnpm start &
sleep 15
echo -n "код без шрифта: "
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3000/opengraph-image
kill %1
mv /tmp/font-backup.ttf shared/config/seo/fonts/Involve-SemiBold-subset.ttf
```
Expected: `200`. Если `500` — фолбэк не работает, чинить до коммита.

- [ ] **Step 5: Линт и коммит**

```bash
cd src && npx biome check --write app/opengraph-image.tsx
cd /Users/this_is_gilya/projects/alexa-webapp
git add src/app/opengraph-image.tsx src/shared/config/seo/fonts/
git commit -m "feat: генерировать картинку Open Graph фирменным шрифтом

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 9: Починка веб-манифеста и итоговая проверка

**Files:**
- Modify: `src/public/favicon/site.webmanifest`
- Create: `scripts/check-metadata.mjs` *(временный скрипт проверки, коммитится вместе с работой)*

**Interfaces:**
- Consumes: запущенное приложение на `localhost:3000`.
- Produces: таблица проверки по всем маршрутам.

- [ ] **Step 1: Починить манифест**

В `src/public/favicon/site.webmanifest` пути к иконкам указывают на `/android-chrome-*.png`, а файлы лежат в `/favicon/`. Исправить оба `src` на `/favicon/android-chrome-192x192.png` и `/favicon/android-chrome-512x512.png`, а `theme_color` привести к фирменному: `"#45a771"`.

- [ ] **Step 2: Проверить, что иконки доступны**

Run:
```bash
cd src && pnpm build && pnpm start &
sleep 15
for i in 192x192 512x512; do
  echo -n "android-chrome-$i: "
  curl -s -o /dev/null -w '%{http_code}\n' "http://localhost:3000/favicon/android-chrome-$i.png"
done
kill %1
```
Expected: обе строки `200`.

- [ ] **Step 3: Написать скрипт обхода**

Создать `scripts/check-metadata.mjs` в корне репозитория:

```js
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

const pick = (html, re) => (html.match(re)?.[1] ?? '').trim();

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

    if (response.status !== 200) problems.push(`${route}: HTTP ${response.status}`);
    if (!title || title === 'Алекса') problems.push(`${route}: заглушка в title`);
    if (title.length > 65) problems.push(`${route}: title ${title.length} симв.`);
    if (!description) problems.push(`${route}: нет description`);
    if (description.length < 120 || description.length > 175)
        problems.push(`${route}: description ${description.length} симв.`);
    if (!canonical) problems.push(`${route}: нет canonical`);
    if (!ogTitle) problems.push(`${route}: нет og:title`);
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
```

- [ ] **Step 4: Прогнать полную проверку**

Run:
```bash
cd src && pnpm build && pnpm start &
sleep 15
node ../scripts/check-metadata.mjs
kill %1
```
Expected: `Все 35 маршрутов прошли проверку.` и код выхода 0. Любая строка в разделе «ПРОБЛЕМЫ» — дефект, который чинится до завершения задачи.

- [ ] **Step 5: Прогнать то, что гоняет CI**

Run:
```bash
cd src && pnpm lint && npx tsc --noEmit && pnpm build
```
Expected: все три команды завершаются успешно.

- [ ] **Step 6: Коммит**

```bash
cd /Users/this_is_gilya/projects/alexa-webapp
git add src/public/favicon/site.webmanifest scripts/check-metadata.mjs
git commit -m "fix: починить пути иконок в веб-манифесте и добавить проверку метаданных

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

## Что осознанно не делается

- `BreadcrumbList` и `FAQPage` — отложены, отдельная задача поверх готового слоя.
- Номер медицинской лицензии в JSON-LD — в репозитории его нет, выдумывать нельзя.
- `src/app/landyshevaya/page.tsx` — мёртвый маршрут за редиректом `next.config.mjs:38`, в этой работе не трогается.
