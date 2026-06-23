---
name: architecture-fsd
description: "Feature-Sliced Design layer structure, folder conventions, and data flow for alexa-webapp"
metadata: 
  node_type: memory
  type: project
  originSessionId: 90c5047f-9eca-470a-9225-e7ab3eafc4fe
---

FSD layers (dependency direction: app → views → widgets → features → entities → shared):

- `app/` — Next.js route files, thin wrappers that only import+render a view
- `views/` — page compositions; own `models/` with typed constants passed as props to widgets
- `widgets/` — self-contained UI sections (hero slider, FAQ, price table, etc.)
- `features/` — user interaction modules; currently has `consultation-modal`
- `entities/` — business models: `employee/`, `news/`
- `shared/` — stateless primitives: `ui/`, `helpers/`, `hooks/`, `types/`, `styles/`, `config/`

**Widget folder convention:**
```
widgets/<name>/
├── index.tsx          # default export — only public surface
├── index.module.css
├── types/             # prop types (never inside the component file)
├── ui/                # sub-components
├── models/            # constants, contexts
└── hooks/
```

**Data flow:** Mock constants in `views/<page>/models/<page>.constants.ts` are typed against `widgets/<name>/types/<name>.types.ts` and spread/passed as props. No real API calls yet.

**Important patterns:**
- `"use client"` required on any component with hooks/state/context/browser APIs
- `PropsWithClassName` from `shared/types/props-with-classname.ts` — most widgets accept optional `className` for parent spacing
- `AnimationWrapper` from `shared/ui/animation-wrapper` — wraps sections for scroll-triggered animations
- Global `.container` CSS class handles max-width centering

**Why:** FSD enforces one-way dependencies and colocation. Adding features in the wrong layer (e.g., business logic in `shared/`) violates the architecture.

**How to apply:** Before creating a file, decide which layer it belongs to. Never import from a higher layer (e.g., `widgets` must not import from `views`).
