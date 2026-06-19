# AGENTS.md

## Commands (run from `src/`)

| Command | Action |
|---------|--------|
| `pnpm dev` | Next.js dev server |
| `pnpm build` | Production build |
| `pnpm start` | Production server |
| `pnpm lint` | `biome check .` |
| `pnpm lint:fix` | `biome check --write .` |
| `pnpm format` | `biome format --write .` |

No test framework installed — no test command exists.

## Package manager

Always use **pnpm**. Lockfile is `pnpm-lock.yaml`. Never npm or yarn.

## Architecture

Feature-Sliced Design (FSD). Source is in `src/`. Directory roles:

| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js App Router pages and layouts |
| `views/` | Page-level compositions (one per route group) |
| `widgets/` | Reusable section components |
| `features/` | User interaction modules (currently empty) |
| `entities/` | Business entities (`employee/`, `news/`) |
| `shared/` | Reusable UI, helpers, hooks, types, styles, config |

Entrypoint: `src/app/layout.tsx` → `Layout` widget → page-specific `views/`.

### Widget/view folder convention

```
widgets/<name>/
├── index.tsx              # main export (default)
├── index.module.css
├── types/                 # component prop types
├── ui/                    # sub-components
├── models/                # constants, contexts, logic
└── hooks/                 # hooks
```

Views follow the same pattern. Data flows: `views/<page>/models/` → typed constants → widgets.

`app/` route groups are thin wrappers that import and render a view:

```tsx
// app/(home)/page.tsx
import HomePage from "@/views/home-page";
export default function Home() { return <HomePage />; }
```

### Redux

Redux Toolkit is a dependency but **not yet wired up** — no store, slices, or Provider. The app uses React Context (`LayoutProvider`, `PriceSectionContext`).

## Coding patterns

- **SVG icons**: imported as React components — `import ArrowSVG from "@/public/icons/slider-arrow.svg"`. Uses `@svgr/webpack` via Turbopack (see `next.config.mjs`).
- **`"use client"`**: required in any widget using hooks, state, context, or browser APIs.
- **CSS modules**: always `import css from "./index.module.css"`, apply as `className={css.root}`. The `container` class is a shared global utility.
- **`PropsWithClassName`**: from `shared/types/props-with-classname.ts` — most widgets accept an optional `className?: string` for layout spacing from parent.
- **Type locations**: component prop types live in `widgets/<name>/types/`, not in the component file.
- **Models as constants**: view/widget mock data is typed constants in `models/` dirs, imported and spread into widgets.
- **Biome suppression**: use file-level comments when needed — `/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */`.
- **AnimationWrapper**: from `shared/ui/animation-wrapper` — wraps sections for scroll-triggered animations.

## Linting & formatting

Biome is the sole linter + formatter. Single quotes, trailing commas "es5", semicolons always.
`useImportType` is error, `noArrayIndexKey` is warn.
VS Code auto-formats and organizes imports on save (via workspace file).

## Next.js quirks

- `output: "standalone"` enabled — required for Docker
- `reactCompiler: true` (React compiler babel plugin)
- `experimental.inlineCss: true`
- SVG imports from `@/public/icons/*.svg` via `@svgr/webpack` (Turbopack rule)
- Path alias `@/*` maps to `src/*`

## Styling

PostCSS with CSS modules (`.module.css`). Plugins: import, mixins, simple-vars, nested, autoprefixer.

Breakpoint CSS variables:
- `mobile-min`: 375px, `mobile`: 767px
- `small-desktop-min`: 768px, `small-desktop`: 1441px
- `desktop-min`: 1442px, `desktop`: 1920px
- Scale factors: `mobile-scale-factor`: 3.75, `standard-desktop-scale-factor`: 14.4, `big-desktop-scale-factor`: 14.41

Mixins dir: `shared/styles/mixins/`. Import path: `shared/styles/`.

## Env variables

| Variable | Default | Defined in |
|----------|---------|------------|
| `NEXT_PUBLIC_YANDEX_MAPS_API_KEY` | — | `.env.example` |
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | `shared/config/api-instance.ts` (NOT in `.env.example`) |

`.env.local` is gitignored.

## Docker

```
docker/
├── dev/          # cd docker/dev && docker compose up
└── prod/         # cd docker/prod && docker compose up -d (nginx on :80)
```

- Build context is project root (`../..` from compose files)
- Dev mounts `src/` as volume with hot reload
- Prod uses multi-stage `output: standalone` + nginx reverse proxy
- Env from `src/.env.local` + `src/.env.example` via `env_file`
- `.dockerignore` at project root

## TypeScript

Strict mode, `@/*` → `src/*`. No typecheck script but `tsc --noEmit` works.

## VS Code

Open `instrument-shop.code-workspace` (uses `src/` as root). Required extension: `biomejs.biome`.

## Git hook

Pre-push hook in `.githooks/pre-push` — runs `pnpm build` before every `git push` and rejects if build fails.

To enable (one-time per clone):

```bash
git config core.hooksPath .githooks
```

## Commit agent

```bash
# call the commit subagent
@commit
```

Conventional commit types: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `perf:`, `chore:`, `infra:`, `test:`.
