FROM node:24-alpine

WORKDIR /app
RUN corepack enable

COPY src/package.json src/pnpm-lock.yaml src/.npmrc ./
COPY docker/dev/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000

ENV NODE_ENV=development
ENTRYPOINT ["/entrypoint.sh"]
