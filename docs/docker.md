# Docker

Два окружения: `dev` (hot-reload) и `prod` (standalone + nginx).

## Разработка

```bash
cd docker/dev

# запуск
make up

# запуск в фоне
make up-d

# остановка
make down

# пересборка образа
make build

# полная пересборка (без кэша)
make rebuild

# логи
make logs

# терминал внутри контейнера
make shell
```

Принцип работы:
- `src/` монтируется в контейнер через volume
- изменения на хосте сразу видны внутри (HMR работает)
- `node_modules` и `.next` сохраняются в контейнере (anonymous volumes — не перетираются с хоста)

Порт: `$APP_PORT` (по умолчанию 3000).

## Production

```bash
cd docker/prod

# сборка и запуск
make up

# остановка
make down

# пересборка
make rebuild

# логи
make logs
```

Принцип работы:
- multi-stage Dockerfile: `deps` → `builder` → `runner`
- Next.js standalone сборка
- nginx — reverse proxy перед Next.js

Composition:
```
nginx :80  →  app :3000
```

Порт: `$NGINX_PORT` (по умолчанию 80).

## Окружение

Переменные подтягиваются из `src/.env.local` и `src/.env.example`:

| Переменная | Описание |
|-----------|----------|
| `NEXT_PUBLIC_YANDEX_MAPS_API_KEY` | Ключ Яндекс.Карт |
| `NEXT_PUBLIC_API_URL` | URL бэкенда (по умолч. `http://localhost:8000`) |
| `APP_PORT` | Порт для dev-окружения (только dev) |
| `NGINX_PORT` | Порт для nginx (только prod) |

Создай `src/.env.local`:

```env
NEXT_PUBLIC_YANDEX_MAPS_API_KEY=твой_ключ
```

## Структура

```
docker/
├── dev/
│   ├── Makefile              # shortcut: up, logs, shell и т.д.
│   ├── Dockerfile            # node:22-alpine + pnpm dev
│   ├── docker-compose.yml
│   └── .env                  # APP_PORT=3000
└── prod/
    ├── Makefile              # shortcut: up, logs и т.д.
    ├── Dockerfile            # multi-stage standalone
    ├── docker-compose.yml
    ├── .env                  # NGINX_PORT=80
    └── nginx/
        └── nginx.conf        # reverse proxy, gzip, security headers

.dockerignore                 # игнор node_modules, .next, .git и т.д.
```

## Детали реализации

### Dockerfile (prod)

Три стадии:
1. **deps** — установка зависимостей (кэшируется)
2. **builder** — Next.js сборка
3. **runner** — минимальный образ под пользователем `nextjs` (uid 1001)

Использует `next.config.mjs` с `output: "standalone"`.

### Dev Dockerfile

Одна стадия:
- Установка зависимостей при сборке
- Запуск `pnpm dev` с HMR
- Код идёт через volume, пересборка образа не требуется при изменениях

### nginx

- Прокси на `app:3000`
- Security headers: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- Gzip для text/css/js/json/svg/fonts
- Кэширование: `/_next/static/` — 365d, immutable; `/static/` — 30d
- WebSocket support (нужен для Next.js)
