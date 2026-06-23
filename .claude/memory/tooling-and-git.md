---
name: tooling-and-git
description: "Biome linting, git hooks, pnpm, VS Code workspace, and CI setup for alexa-webapp"
metadata: 
  node_type: memory
  type: project
  originSessionId: 90c5047f-9eca-470a-9225-e7ab3eafc4fe
---

**Package manager:** pnpm only. Lockfile: `pnpm-lock.yaml`. Never npm or yarn.

**Linter/Formatter:** Biome (not ESLint/Prettier). Single quotes, trailing commas `"es5"`, semicolons always.
- `useImportType` → error
- `noArrayIndexKey` → warning; suppress with `/** biome-ignore-all lint/suspicious/noArrayIndexKey: reason */`

**Git pre-push hook:** `.githooks/pre-push` runs `pnpm build` before every push, rejects on failure.
Enable once per clone: `git config core.hooksPath .githooks`

**Commit convention:** `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `perf:`, `chore:`, `infra:`, `test:`
Commit agent: `@commit`

**TypeScript:** Strict mode. Path alias `@/*` → `src/*`. Typecheck: `tsc --noEmit` (no npm script alias).

**VS Code:** Open `instrument-shop.code-workspace` (sets `src/` as root). Required extension: `biomejs.biome`. Auto-format and organize imports on save.

**CI (GitHub Actions):**
- `ci.yml`: lint → typecheck → build on every push/PR
- `deploy.yml`: CI + SSH deploy using secrets `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`, `DEPLOY_PORT`

**How to apply:** Always run `pnpm lint:fix` before committing. If the pre-push hook blocks, fix the build — never skip hooks.
