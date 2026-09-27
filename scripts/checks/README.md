# Проверки SEO-слоя

Тестового фреймворка в проекте нет. Эти файлы проверяют настоящие модули
из `src/` — Node 24 сам снимает типы с `.ts`, а `alias-hook.mjs` резолвит
алиас `@/`.

```bash
# модульные проверки (сервер не нужен)
for t in site-url normalize-meta-text build-metadata sitemap og-title; do
  node --import ./scripts/checks/alias-hook.mjs ./scripts/checks/$t.test.mjs
done

# обход всех маршрутов (нужен запущенный pnpm start из src/)
node scripts/check-metadata.mjs
```

`sitemap.test.mjs` намеренно указывает API на мёртвый порт: карта сайта
обязана отдавать статическую часть, а не падать.
