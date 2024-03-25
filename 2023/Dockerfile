# Build and compile the webapp
FROM node:16-alpine

WORKDIR /app

RUN apk add --update curl && rm -rf /var/cache/apk/*
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6

COPY package.json ./

RUN pnpm install  --shamefully-hoist

COPY . .

RUN pnpm run build 

RUN pnpm run telemetry:disable 

CMD ["pnpm", "run", "start"]
