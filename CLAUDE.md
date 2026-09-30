# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Russian-language marketing site for the «Алекса» dental clinic (two branches: Ландышевая / Волкова). Next.js 16 App Router + React 19, Feature-Sliced Design.

## Commands

The npm project root is `src/`, **not** the repo root. Every command below runs from `src/`.

```bash
pnpm dev            # dev server (Turbopack)
pnpm build          # production build
pnpm start          # production server
pnpm lint           # biome check .
pnpm lint:fix       # biome check --write .
pnpm format         # biome format --write .
pnpm lint:css       # stylelint "**/*.css"
pnpm lint:css:fix   # stylelint "**/*.css" --fix
tsc --noEmit        # type check (no script alias)
```

No test framework is installed — there is no test command. Always **pnpm**, never npm/yarn.

Before pushing, run what CI runs: `pnpm lint` + `tsc --noEmit` + `pnpm build`.

## Repo layout

```
src/            # the Next.js app (package.json lives here)
docker/dev|prod # compose stacks, each with a Makefile
docs/           # deploy.md, docker.md, postcss-mixins.md, superpowers/{plans,specs}
.githooks/      # pre-push
```

`src/AGENTS.md` is **auto-generated and re-added by `next dev`** (see `node_modules/next/dist/server/lib/generate-agent-files.js`); `src/CLAUDE.md` is just `@AGENTS.md`. Don't hand-edit them — commit the regenerated block with your work instead of fighting the diff. The root `AGENTS.md` is hand-written and mirrors this file for other agents (opencode/zed); when you change project conventions, update both or they drift.

## Architecture

Dependency direction — a layer may import from below, never above:

`app → views → widgets → features → entities → shared`

| Layer | Role |
|-------|------|
| `app/` | Thin App Router wrappers: fetch server data, set metadata, render one view |
| `views/` | One folder per route; composes widgets, feeds them constants from `models/` |
| `widgets/` | Presentational sections (47 of them: sliders, FAQ, tables, price, map) |
| `features/` | Interactive modules with their own mutation hooks (modals, apply forms) |
| `entities/` | Business objects with `api/`, `ui/<x>-card/`, `types/` (`news`, `promotion`, `vacancies`, `employee`, `branch`, `annual-care`) |
| `shared/` | `api/`, `config/`, `helpers/`, `hooks/`, `styles/`, `types/`, `ui/` |

Entry: `app/layout.tsx` → `ReactQueryCustomProvider` → `Layout` widget (header/menu/footer/breadcrumbs) → page view.

### Folder convention (widgets, views, features, entities)

```
<name>/
├── index.tsx           # default export — the only public surface
├── index.module.css
├── types/              # prop types live HERE, not in index.tsx
├── ui/                 # sub-components (each with its own index.module.css)
├── models/             # constants, contexts, pure logic
└── hooks/
```

`shared/ui/*` is the exception: several export named (`AnimationWrapper`, `Accordion`) rather than default.

### Data flow

Two coexisting sources — do not assume "all data is mock":

1. **Static content** — typed constants in `views/<page>/models/<page>.constants.ts` (and `widgets/<w>/models/`), typed against `types/`, spread into widgets: `<FaqSection {...MOCK_FAQ_SECTION} />`. Copy is Russian HTML strings with `&nbsp;`/`&#8209;`, rendered via `dangerouslySetInnerHTML` (the Biome rule is deliberately `off`).
2. **Real backend** — `/api/v1/*` on a separate service. Paths are centralized in `shared/api/api-urls.ts` (never inline a URL). Axios singleton: `shared/config/api-instance.ts`, 30s timeout, base URL `API_URL ?? NEXT_PUBLIC_API_URL ?? http://localhost:8000`.
   - **Reads**: server-side fetchers wrapped in React `cache()` (`entities/news/api/get-all-news.ts`, `shared/api/get-all-branches.ts`). Called from `app/*/page.tsx` with `export const revalidate = 60`, result passed into the view as `initial*Data`. They swallow errors and return `undefined`/the error — callers must guard.
   - **Writes**: `shared/api/post-*.ts` + a per-feature `use-post-*.ts` TanStack mutation hook (`features/consultation-modal/hooks/use-post-consultation.ts`).
   - React Query is wired in `shared/config/react-query-custom-provider.tsx` (`staleTime` 60s, streamed hydration). **Redux Toolkit is a dependency but not wired up** — no store, no slices, no Provider. Shared state is React Context.

### Global state & cross-cutting patterns

- **`LayoutProvider`** (`shared/config/layout-context.tsx`) owns menu open state, the three global modals (consultation / appointment / DMS) and `currentBranch` (persisted to a cookie via `shared/hooks/set-branch-in-cookies.ts`). `useLayoutContext()` throws if used outside it.
- **Declarative buttons** — content constants carry `SiteButtonProps` (`{ href?, title?, isOpenConsultationModal?, isOpenDMSModal?, isOpenFeedbackModal? }`); `shared/helpers/define-site-button-props.ts` turns that into real props (opens the right modal, or smooth-scrolls for `#anchor` hrefs). Add a CTA by extending the constant, not by wiring a handler in the widget.
- **`Picture`** (`shared/ui/picture`) is the image primitive — data shape is `poster: { avif?/webp?/original?: { src, mobile? } }`, emitting `<source>` per format with a 767px mobile swap. Content constants use this shape; there is no `next/image` usage.
- **`AnimationWrapper`** (`shared/ui/animation-wrapper`) wraps sections for scroll reveal; `as` picks the tag. All instances share one IntersectionObserver + rAF scheduler in `lib/coordinator.ts` — keep new animation work going through the wrapper rather than adding observers.
- **Forms** — react-hook-form + shared generic rule factories in `shared/config/validation-rules.ts` (`FULL_NAME_VALIDATION<T>()`, `PHONE_VALIDATION<T>()`, …). Reuse them; messages are user-facing Russian.
- **Shared constants** — phones, messengers, map/branch data and the doctor roster live in `shared/config/global-constants.constants.ts`; route paths in `shared/config/site-navigation.ts`.
- `app/error.tsx`, `app/global-error.tsx`, `app/not-found.tsx` all render `views/error-page` with a `status` prop.

### Routing notes

Service pages live under `/landyshevaya/<service>`. `next.config.mjs` holds a long list of permanent redirects from legacy flat URLs (`/ortodontiya` → `/landyshevaya/ortodontiya`) plus `/landyshevaya` → `/` — add a redirect there when a service URL moves. `/media/*` is rewritten to the backend so uploaded images are same-origin.

## Styling

PostCSS + CSS modules; `postcss.config.js` defines breakpoints/scale factors as `postcss-simple-vars`, so they are **build-time `$vars`, not CSS custom properties**. Mixins auto-load from `shared/styles/mixins/`.

```css
@import "shared/styles"; /* once per file — makes every mixin available */
```

`html { font-size: 1vw }` (clamped to 14.41px above 1441px) is what makes rem-based sizing fluid — so never write raw px. Use:

```css
@mixin responsive <property | --custom-prop>, <mobile-px>, <desktop-px>;
@mixin responsive font-size, 16, 24;
@mixin responsive --gap, 10, 20;
```

Breakpoints: `$mobile: 767px`, `$small-desktop: 1441px`, `$desktop: 1920px` (plus `-min` variants). Scale factors 3.75 / 14.4 / 14.41.

Typography: the real scale is `text-xs … text-7xl`; `h1`–`h6` / `b1`–`b4` are backward-compatible aliases over it (`h1 = text-7xl`, `b2 = text-base`). `@mixin button` is a constant 15px. Also `@mixin transition <prop>[, dur]` / `@mixin transitionOptions`.

Global `.container` handles max-width centering and responsive side padding; `body.child-theme` switches the palette on children's pages. Colors are CSS custom properties in `shared/styles/colors.css` (`var(--color-white-1)`).

### Ритм секций

Вертикальные отступы между секциями страницы **не задаются локально** — они живут в `shared/styles/sections.css` (подключён в `app/layout.tsx`) как токены на `:root` плюс глобальные утилитарные классы:

| класс | токен | значение |
|-------|-------|----------|
| `section` | `--section-gap` | `60, 60` — базовый отступ между секциями |
| `section-sm` | `--section-gap-sm` | `20, 35` — подряд идущие слайдеры |
| `section-md` | `--section-gap-md` | `30, 30` — заголовочный блок страницы |
| `section-pad` | `--section-gap-pad` | `40, 60` — тот же ритм внутренним отступом, для секций с собственным фоном |
| `page-offset` | `--header-offset` | `88, 100` — компенсация фиксированного хедера, на `<main>` |

View передаёт их строкой: `<FaqSection {...MOCK} className="section" />`, а `<main className="page-offset">`. Правка одного токена меняет ритм на всех 39 страницах. Локальный класс завести можно, но только под действительно уникальное значение — и тогда рядом с глобальным: ``className={`${css.titleBlock} section-md container`}``.

Always `import css from "./index.module.css"` and `className={css.root}`. Full mixin reference: `docs/postcss-mixins.md`. Skills `postcss-responsive` and `widget-development` cover this in depth.

## Linting

Biome is the linter/formatter for JS/TS and **explicitly ignores CSS** (`!!**/*.css`) — CSS is stylelint's job (`.stylelintrc.json`, `stylelint-config-standard` + `stylelint-order`, which enforces `@mixin` calls first, then declarations, then nested rules).

Biome: 4-space indent, 80 cols, single quotes (double in JSX), `trailingCommas: "es5"`, semicolons always. `useImportType` and `noUnusedImports` are errors; `noArrayIndexKey` and `noNonNullAssertion` are warnings; `noDangerouslySetInnerHtml` is off. Import order is enforced by the assist action (node → packages → `@/` alias → `../` → `./`, blank line between groups).

Suppress with a file-level comment when justified:
`/** biome-ignore-all lint/suspicious/noArrayIndexKey: reason */`

The repo is not uniformly formatted — **never run `pnpm lint:fix` or `pnpm format` repo-wide**; scope formatting to the files you touched.

## Next.js / TS config quirks

- `output: "standalone"` — required for Docker; do not remove.
- `reactCompiler: true`, `experimental.inlineCss: true`, `expireTime: 60`.
- SVGs are React components via an `@svgr/webpack` Turbopack rule: `import ArrowSVG from "@/public/icons/slider-arrow.svg"` (types in `src/svgr.d.ts`).
- `"use client"` is required in anything using hooks/state/context/browser APIs — most widgets are client components.
- Path alias `@/*` → `src/*`. TS strict.
- `pnpm-workspace.yaml` pins security `overrides` (postcss, js-yaml, sharp, svgo…) — they exist to keep `pnpm audit` green; don't drop them when bumping deps.

## Env variables

Defined in `src/.env.example`; real values go in `src/.env.local` (gitignored).

| Variable | Default | Notes |
|----------|---------|-------|
| `NEXT_PUBLIC_YANDEX_MAPS_API_KEY` | — | Yandex Maps widget |
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | client-side base URL |
| `API_URL` | `http://localhost:8000` | server-side; takes precedence. `http://host.docker.internal:8000` in Docker dev |
| `NEXT_PUBLIC_SITE_URL` | `https://aleksa-dent.ru` | canonical / `og:url` / sitemap origin. **Baked in at build time** — `docker/prod` passes it as a build `ARG`, not just `env_file`, because the 35 static pages are prerendered with it. |

## Docker

```bash
cd docker/dev  && make up    # hot-reload dev (src/ mounted)
cd docker/prod && make up    # multi-stage standalone build + nginx on :80
```

Build context is the repo root; env comes from `src/.env.local` + `src/.env.example`. Makefiles also expose `up-d`, `down`, `build`, `rebuild`, `logs`, `shell`, `ps`. Details in `docs/docker.md` / `docs/deploy.md`.

## Git & CI

Pre-push hook (`.githooks/pre-push`) runs `CI=true pnpm build` **and** `pnpm audit --audit-level=high`, rejecting the push if either fails. Enable once per clone:

```bash
git config core.hooksPath .githooks
```

`.github/workflows/ci.yml` runs lint → typecheck → build on push/PR to `main` (paths `src/**`). `deploy.yml` reuses CI, then SSHes into the host, `git pull`, rebuilds `docker/prod`.

**Caveat:** both workflows are keyed to a `main` branch that does not exist — the default branch is `master`, and feature work lands via `feat/*` PRs into it. So CI and auto-deploy currently never fire; treat the local pre-push hook as the only gate, and run lint/typecheck/build yourself.

Commit messages are Conventional-Commit-style in Russian: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `perf:`, `chore:`, `infra:`, `test:`.
