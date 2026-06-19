FROM node:24-alpine

WORKDIR /app
RUN corepack enable

COPY src/package.json src/pnpm-lock.yaml ./
RUN pnpm install --ignore-scripts && pnpm rebuild sharp

EXPOSE 3000

ENV NODE_ENV=development
CMD ["pnpm", "dev"]
