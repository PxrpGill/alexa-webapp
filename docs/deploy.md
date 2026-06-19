# Деплой

## Вариант 1: Docker Compose (рекомендуемый)

### Требования к серверу

- Linux (Ubuntu 22.04+, Debian 12+)
- Docker Engine + Docker Compose plugin
- Домен, направленный на сервер
- Открытые порты 80 (HTTP) и 443 (HTTPS)

### Установка Docker

```bash
# Ubuntu / Debian
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
# выйти и зайти заново
```

### Подготовка

```bash
# клонировать проект
git clone <repo-url> /opt/alexa-webapp
cd /opt/alexa-webapp

# secrets
cp src/.env.example src/.env.local
nano src/.env.local
# → заполнить NEXT_PUBLIC_YANDEX_MAPS_API_KEY
```

### Запуск

```bash
cd docker/prod

# сборка и запуск
make up

# проверить
make ps
```

Сайт будет доступен на `http://<ip>:80`.

### HTTPS (SSL-сертификат)

```bash
# установка certbot
sudo apt install certbot python3-certbot-nginx

# получение сертификата
sudo certbot --nginx -d yourdomain.com

# автообновление (проверить)
sudo certbot renew --dry-run
```

После получения сертификата certbot сам обновит конфигурацию nginx.

> Если используется `docker/prod/nginx/nginx.conf`, certbot создаст отдельный файл в `/etc/nginx/sites-available/`. Альтернатива — настроить SSL вручную, смонтировать сертификаты через volume и указать их в `listen 443 ssl`.

### Обновление

```bash
cd /opt/alexa-webapp
git pull

cd docker/prod
make rebuild
make up
```

## Вариант 2: Без Docker (напрямую Node.js + nginx)

Если Docker недоступен.

### Установка зависимостей

```bash
# node 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash
sudo apt install -y nodejs git nginx

# pnpm
sudo corepack enable
corepack prepare pnpm@latest --activate
```

### Сборка

```bash
cd src
pnpm install
pnpm build
```

### Запуск Next.js

В `output: standalone` сервер лежит в `.next/standalone/server.js`:

```bash
# копируем статику рядом со standalone
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

# запуск
cd .next/standalone
NODE_ENV=production PORT=3000 node server.js
```

Лучше настроить systemd-сервис:

```ini
# /etc/systemd/system/alexa-webapp.service
[Unit]
Description=Alexa WebApp
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/alexa-webapp/src/.next/standalone
ExecStart=/usr/bin/node server.js
Environment=NODE_ENV=production
Environment=PORT=3000
Environment=NEXT_PUBLIC_YANDEX_MAPS_API_KEY=твой_ключ
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now alexa-webapp
```

### Настройка nginx

```nginx
# /etc/nginx/sites-available/alexa-webapp
upstream nextjs {
    server 127.0.0.1:3000;
}

server {
    listen 80;
    server_name yourdomain.com;

    location /_next/static/ {
        proxy_pass http://nextjs;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        proxy_pass http://nextjs;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/alexa-webapp /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### HTTPS

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## Переменные окружения

Обязательные для production:

| Переменная | Где взять |
|-----------|----------|
| `NEXT_PUBLIC_YANDEX_MAPS_API_KEY` | Кабинет разработчика Яндекс.Карт |
| `NEXT_PUBLIC_API_URL` | URL бэкенда (если нужен) |

## CI/CD (GitHub Actions)

Два workflow в `.github/workflows/`:

| Файл | Запуск | Что делает |
|------|--------|-----------|
| `ci.yml` | push/PR в main, изменения в `src/` | lint → typecheck → build |
| `deploy.yml` | push в main (после CI) | сборка Docker + деплой на сервер |

### Secrets для деплоя

В настройках репозитория (Settings → Secrets and variables → Actions) создать:

| Secret | Описание |
|--------|---------|
| `DEPLOY_HOST` | IP или домен сервера |
| `DEPLOY_USER` | Пользователь для SSH |
| `DEPLOY_SSH_KEY` | Приватный SSH-ключ |
| `DEPLOY_PORT` | Порт SSH (опционально, по умолч. 22) |

## Мониторинг

```bash
# логи nginx
docker compose logs nginx

# логи app
docker compose logs app
```

Healthcheck (добавь `app/api/health/route.ts`):

```ts
export async function GET() {
  return Response.json({ status: "ok" });
}
```

Проверка: `curl http://localhost:3000/api/health`.
