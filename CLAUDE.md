# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `src/`:

```bash
pnpm dev          # dev server
pnpm build        # production build
pnpm start        # production server
pnpm lint         # biome check .
pnpm lint:fix     # biome check --write .
pnpm format       # biome format --write .
tsc --noEmit      # type check (no script alias)
```

No test framework — no test command exists.

Always use **pnpm**. Never npm or yarn.

## Architecture

Feature-Sliced Design. Source root is `src/`. Dependency direction: `app → views → widgets → features → entities → shared`.

| Layer | Role |
|-------|------|
| `app/` | Thin Next.js App Router wrappers — only import and render a view |
| `views/` | Compose a page from widgets; data from `models/` constants |
| `widgets/` | Self-contained sections (slider, FAQ, form, etc.) |
| `features/` | User interaction modules (`consultation-modal`) |
| `entities/` | Business models (`employee/`, `news/`) |
| `shared/` | Stateless building blocks — UI, helpers, hooks, types, styles, config |

### Data flow

Constants are defined in `views/<page>/models/<page>.constants.ts`, typed against `widgets/<name>/types/<name>.types.ts`, and passed as props. No API calls exist yet — all data is mock.

### Widget folder convention

```
widgets/<name>/
├── index.tsx              # default export, the only public surface
├── index.module.css
├── types/                 # prop type definitions (not in the component file)
├── ui/                    # sub-components
├── models/                # constants, contexts, logic
└── hooks/
```

Views follow the same layout.

## Coding patterns

- **`"use client"`** — required on any component using hooks, state, context, or browser APIs.
- **CSS modules** — always `import css from "./index.module.css"`, apply as `className={css.root}`. The global `.container` class handles max-width centering.
- **`PropsWithClassName`** — from `shared/types/props-with-classname.ts`; most widgets accept an optional `className?: string` for spacing from the parent.
- **SVG icons** — imported as React components: `import ArrowSVG from "@/public/icons/arrow.svg"`. Works via `@svgr/webpack` Turbopack rule — no wrapping needed.
- **`AnimationWrapper`** — from `shared/ui/animation-wrapper`; wraps sections for scroll-triggered reveal animations.
- **Redux** — `@reduxjs/toolkit` is installed but not wired up. No store, no slices, no Provider. The app uses React Context (`LayoutProvider`, `PriceSectionContext`).
- **Path alias** — `@/*` maps to `src/*`.

## Styling

PostCSS with CSS modules. Plugins: import, mixins, simple-vars, nested, autoprefixer.

Import global styles: `@import "shared/styles";` — this makes all mixins available automatically.

### Responsive mixin

```css
@mixin responsive <property | --var>, <mobile-px>, <desktop-px>;
/* e.g. */
@mixin responsive font-size, 16, 24;
@mixin responsive --gap, 10, 20;
```

The mixin emits `calc(…rem)` at each breakpoint divided by scale factors (3.75 mobile, 14.4 small-desktop, 14.41 desktop).

### Breakpoint variables

```css
$mobile: 767px          /* ≤ 767px */
$small-desktop: 1441px  /* 768px – 1441px */
$desktop: 1920px        /* ≥ 1442px */
```

Usage: `@media (max-width: $mobile) { … }`

Typography mixins: `h1`–`h6`, `b1`–`b4`, `button` — set font-size responsively + line-height/weight.

Full mixin docs: `docs/postcss-mixins.md`.

## Next.js config quirks

- `output: "standalone"` — required for Docker; do not remove.
- `reactCompiler: true` — babel-plugin-react-compiler is active.
- `experimental.inlineCss: true`
- SVG import rule in `next.config.mjs` handles `@/public/icons/*.svg` via Turbopack.

## Linting

Biome is the sole linter + formatter. Single quotes, trailing commas `"es5"`, semicolons always.
`useImportType` is an error; `noArrayIndexKey` is a warning (suppress with `/** biome-ignore-all lint/suspicious/noArrayIndexKey: reason */`).

## Git hooks

A pre-push hook runs `pnpm build` before every `git push` and rejects on failure.

Enable once per clone:
```bash
git config core.hooksPath .githooks
```

## Docker

```
docker/dev/   — cd docker/dev && make up    # hot-reload dev
docker/prod/  — cd docker/prod && make up   # nginx on :80, standalone output
```

CI (`.github/workflows/ci.yml`) runs lint → typecheck → build on every push/PR.

## Env variables

| Variable | Default | Notes |
|----------|---------|-------|
| `NEXT_PUBLIC_YANDEX_MAPS_API_KEY` | — | `.env.example` |
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | hardcoded in `shared/config/api-instance.ts` |

`.env.local` in `src/` is gitignored.
