# Стоматологическая клиника «Алекса»

Веб-приложение на Next.js 16 (App Router) с Feature-Sliced Design архитектурой.

## Tech Stack

| Категория | Технология |
|-----------|-----------|
| **Фреймворк** | Next.js 16 (App Router) |
| **UI** | React 19 |
| **Язык** | TypeScript 5 (strict) |
| **Стейт-менеджмент** | Redux Toolkit + Redux 5 (не подключён) |
| **HTTP-клиент** | Axios |
| **Стили** | PostCSS (import, mixins, simple-vars, nested, autoprefixer) |
| **CSS-модули** | `.module.css` |
| **Линтер / Форматтер** | Biome |
| **Пакетный менеджер** | pnpm |
| **Компилятор React** | babel-plugin-react-compiler |
| **SVG** | @svgr/webpack (Turbopack) |

## Быстрый старт

```bash
# установка зависимостей
cd src && pnpm install

# дев-сервер
pnpm dev

# production сборка
pnpm build

# production сервер
pnpm start
```

Открой [http://localhost:3000](http://localhost:3000).

## Структура проекта

```
src/
├── app/                       # Next.js App Router (роуты, layout)
├── views/                     # Композиции страниц (одна папка на роут)
├── widgets/                   # Переиспользуемые секции
│   └── <name>/
│       ├── index.tsx          # Главный экспорт (default)
│       ├── index.module.css
│       ├── types/             # Типы пропсов
│       ├── ui/                # Под-компоненты
│       ├── models/            # Константы, контексты, логика
│       └── hooks/             # Хуки
├── features/                  # Модули взаимодействия (пусто)
├── entities/                  # Бизнес-сущности (employee/, news/)
└── shared/                    # Переиспользуемое
    ├── config/                # API-инстанс, константы, контексты, шрифты
    ├── helpers/               # Утилиты
    ├── hooks/                 # Общие хуки
    ├── styles/                # reset.css, colors.css, global.css, mixins/
    ├── types/                 # Общие типы (PropsWithClassName и др.)
    └── ui/                    # Переиспользуемые UI-компоненты

docker/
├── dev/                       # Локальная разработка (hot-reload)
└── prod/                      # Боевой запуск (nginx + standalone)
```

## Архитектура (FSD)

Приложение следует принципам Feature-Sliced Design:

```
app/ → views/ → widgets/ → features/ → entities/
                                      → shared/
```

- **`app/`** — тонкие обёртки над `views/`, только импорт и рендер
- **`views/`** — собирают страницу из виджетов, данные из `models/` констант
- **`widgets/`** — самодостаточные секции (слайдер, FAQ, форма и т.д.)
- **`entities/`** — бизнес-модели (карточка сотрудника, новости)
- **`shared/`** — кирпичики без бизнес-логики

### Поток данных

```
views/<page>/models/<page>.constants.ts  →  widgets/<name>/types/<name>.types.ts
       │                                           │
       └─── импорт констант ────→ props ────────→───┘
```

## Скрипты

Все команды выполняются из `src/`:

| Команда | Действие |
|---------|----------|
| `pnpm dev` | Запуск дев-сервера |
| `pnpm build` | Production сборка |
| `pnpm start` | Запуск production сервера |
| `pnpm lint` | Проверка кода Biome |
| `pnpm lint:fix` | Автоисправление Biome |
| `pnpm format` | Форматирование Biome |

Типчекинг (без скрипта, но работает):
```bash
tsc --noEmit
```

## Docker

Два окружения: `dev` (hot-reload) и `prod` (standalone + nginx).

Подробная документация — в [`docs/docker.md`](docs/docker.md).

```bash
cd docker/dev && make up          # разработка
cd docker/prod && make up         # production
```

## Переменные окружения

| Переменная | Значение по умолчанию | Где определена |
|-----------|----------------------|----------------|
| `NEXT_PUBLIC_YANDEX_MAPS_API_KEY` | — | `.env.example` |
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | `shared/config/api-instance.ts` |

Файл `.env.local` в `src/` — для реальных ключей (gitignored). Docker подтягивает env из `src/.env.local` + `src/.env.example`.

## Линтинг и форматирование

- **Biome** — единственный линтер и форматтер
- Одиночные кавычки, trailing commas (es5), точки с запятой
- `useImportType` — ошибка, `noArrayIndexKey` — предупреждение
- VS Code: автоформат и organise imports при сохранении
- Требуемое расширение: `biomejs.biome`

### SVG-иконки

Импортируются как React-компоненты через Turbopack:

```tsx
import ArrowSVG from "@/public/icons/slider-arrow.svg";
```

### PostCSS

Плагины: import, mixins, simple-vars, nested, autoprefixer.

Брейкпоинты:
- `mobile-min`: 375px, `mobile`: 767px
- `small-desktop-min`: 768px, `small-desktop`: 1441px
- `desktop-min`: 1442px, `desktop`: 1920px

Миксины: `shared/styles/mixins/`, импорт `@import "shared/styles"`.
