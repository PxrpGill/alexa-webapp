.PHONY: up down build rebuild logs ps

# Сборке нужен адрес бэкенда (см. Dockerfile), а compose берёт build-аргументы
# из окружения, не из env_file. Читаем их из src/.env.local, чтобы источник
# правды остался один; переменная из окружения имеет приоритет.
ENV_LOCAL := ../../src/.env.local
API_URL ?= $(shell sed -n 's/^API_URL=//p' $(ENV_LOCAL) 2>/dev/null)
NEXT_PUBLIC_API_URL ?= $(shell sed -n 's/^NEXT_PUBLIC_API_URL=//p' $(ENV_LOCAL) 2>/dev/null)
export API_URL NEXT_PUBLIC_API_URL

up:
	docker compose up -d

down:
	docker compose down

build:
	docker compose build

rebuild:
	docker compose build --no-cache

logs:
	docker compose logs -f

ps:
	docker compose ps
