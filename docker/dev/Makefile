.PHONY: up down build rebuild logs shell ps

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
