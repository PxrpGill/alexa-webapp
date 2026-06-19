FROM node:22-alpine

WORKDIR /app
RUN corepack enable

COPY src/package.json src/pnpm-lock.yaml ./
RUN pnpm install

EXPOSE 3000

ENV NODE_ENV=development
CMD ["pnpm", "dev"]
