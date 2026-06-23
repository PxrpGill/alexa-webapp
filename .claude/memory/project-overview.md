---
name: project-overview
description: Core identity of the alexa-webapp project — dental clinic site built with Next.js 16 App Router and FSD architecture
metadata: 
  node_type: memory
  type: project
  originSessionId: 90c5047f-9eca-470a-9225-e7ab3eafc4fe
---

Dental clinic "Алекса" website. Next.js 16 (App Router) + React 19 + TypeScript 5 strict. Feature-Sliced Design architecture. Source lives in `src/`, all dev commands run from there with pnpm.

**Why:** Commercial dental clinic web presence — multiple service pages (therapy, orthodontics, implants, etc.), price list, consultation modal, staff cards, Yandex Maps embed.

**How to apply:** When adding a new page, follow the pattern: thin `app/<route>/page.tsx` → `views/<name>-page/` for composition → reuse existing `widgets/` or create new ones. Data goes in `views/<page>/models/<page>.constants.ts`.

Key stack decisions:
- No test framework (none installed)
- Redux Toolkit installed but NOT wired up — app uses React Context only
- Biome for lint + format (not ESLint/Prettier)
- `output: "standalone"` in next.config.mjs — required for Docker, never remove
- babel-plugin-react-compiler active (`reactCompiler: true`)
- `@svgr/webpack` for SVG-as-component imports from `@/public/icons/`

Related: [[architecture-fsd]], [[styling-conventions]], [[docker-infrastructure]]
