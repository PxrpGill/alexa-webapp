#!/bin/sh
set -e

export CI=true

rm -rf node_modules .pnpm-store || true
pnpm install --ignore-scripts
pnpm rebuild sharp

exec pnpm dev
