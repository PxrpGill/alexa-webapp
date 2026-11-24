FROM node:24-alpine AS deps
WORKDIR /app
# Версия pnpm берётся из package.json (packageManager), а не "последняя"
# из corepack: иначе сборка может приехать на другом мажоре pnpm.
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
# pnpm-workspace.yaml обязателен: в нём лежат overrides, без него
# `--frozen-lockfile` падает с ERR_PNPM_LOCKFILE_CONFIG_MISMATCH.
COPY src/package.json src/pnpm-lock.yaml src/pnpm-workspace.yaml src/.npmrc ./
RUN pnpm install --frozen-lockfile

FROM node:24-alpine AS builder
WORKDIR /app
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
COPY src/ ./
COPY --from=deps /app/node_modules ./node_modules
ENV NEXT_TELEMETRY_DISABLED=1
# canonical, og:url и sitemap запекаются в предрендеренный HTML на этапе
# сборки, поэтому домен обязан быть известен здесь, а не только в рантайме.
ARG NEXT_PUBLIC_SITE_URL=https://aleksa-dent.ru
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
# Адрес бэкенда тоже нужен на сборке: пререндер ходит в API за данными
# (без него все страницы запекаются пустыми, а generateStaticParams отдаёт []),
# а NEXT_PUBLIC_API_URL вшивается в клиентский бандл. .env.local в образ
# не попадает (.dockerignore), а .env.example Next не читает.
ARG API_URL
ARG NEXT_PUBLIC_API_URL
ENV API_URL=$API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN pnpm build

FROM node:24-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NODE_ENV=production
CMD ["node", "server.js"]
