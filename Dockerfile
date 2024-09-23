# Webapp based on caddy
FROM caddy:2.8-alpine

WORKDIR /var/www/html

COPY ./dist/ ./
COPY ./Caddyfile /etc/caddy/Caddyfile
