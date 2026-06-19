# Docker Infrastructure

```
/ (project root)
├── .dockerignore
├── .github/workflows/
│   ├── ci.yml              # lint → typecheck → build
│   └── deploy.yml          # CI + SSH deploy
├── docs/
│   ├── docker.md           # Docker usage guide
│   └── deploy.md           # Server deployment guide
├── AGENTS.md               # AI agent instructions
├── src/                    # Next.js application
├── docker/
│   ├── dev/                # cd docker/dev && docker compose up
│   │   ├── Makefile        # up, down, logs, shell
│   │   ├── Dockerfile      # node:22-alpine + pnpm dev
│   │   ├── docker-compose.yml
│   │   └── .env            # APP_PORT=3000
│   └── prod/               # cd docker/prod && docker compose up -d
│       ├── Makefile        # up, down, logs
│       ├── Dockerfile      # multi-stage (deps → build → runner)
│       ├── docker-compose.yml
│       ├── .env            # NGINX_PORT=80
│       └── nginx/
│           └── nginx.conf  # reverse proxy, gzip, security headers, caching

## Commands

| Action | Command |
|--------|---------|
| Dev hot-reload | `cd docker/dev && make up` |
| Dev logs | `cd docker/dev && make logs` |
| Dev shell | `cd docker/dev && make shell` |
| Prod deploy | `cd docker/prod && make up` |
| Prod rebuild | `cd docker/prod && make rebuild` |
| CI check | `cd src && pnpm lint && tsc --noEmit && pnpm build` |

## Key Details

- `next.config.mjs` has `output: "standalone"` — essential for Docker
- Build context is project root (`../..` from compose files)
- Dev mounts `src/` as volume with hot reload; `node_modules` and `.next` preserved via anonymous volumes
- Prod multi-stage Dockerfile: deps → builder → runner (user `nextjs`, uid 1001)
- Nginx: proxies to `app:3000`, security headers, gzip, WebSocket, static cache 365d
- Env from `src/.env.local` + `src/.env.example` via `env_file`
- `.dockerignore` at project root
- CI runs lint, typecheck, build on every push/PR
- Deploy via SSH using `appleboy/ssh-action` with secrets: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`, `DEPLOY_PORT`
