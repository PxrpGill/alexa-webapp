# nextjs-16-template

## Tech Stack

| Category | Stack |
|----------|-------|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5 |
| **State Management** | Redux Toolkit + Redux 5 |
| **HTTP Client** | Axios |
| **Styling** | PostCSS (import, mixins, simple-vars, nested, autoprefixer) |
| **Linter / Formatter** | Biome |
| **Package Manager** | pnpm |

## Architecture

Feature-Sliced Design (FSD) — modular separation into `app`, `views`, `widgets`, `features`, `entities`, `shared`.

## Scripts

```bash
pnpm dev          # start dev server
pnpm build        # production build
pnpm start        # start production server
pnpm lint         # check code with Biome
pnpm lint:fix     # auto-fix lint issues
pnpm format       # format code with Biome
```
