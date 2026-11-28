.PHONY: up down build rebuild logs shell ps

# Compose подставляет build-аргументы и environment из окружения, а не из
# env_file, поэтому API_URL читаем из src/.env.local — единый источник правды
# (как в docker/prod/Makefile). Пустое значение → дефолт из compose
# (host.docker.internal:8000).
ENV_LOCAL := ../../src/.env.local
API_URL ?= $(shell sed -n 's/^API_URL=//p' $(ENV_LOCAL) 2>/dev/null)
export API_URL

up:
	docker compose up

up-d:
	docker compose up -d

down:
	docker compose down

build:
	docker compose build

rebuild:
	docker compose build --no-cache

logs:
	docker compose logs -f

shell:
	docker compose exec app sh

ps:
	docker compose ps
