FROM node:20-alpine AS runtime
WORKDIR /app

# install dependencies
RUN npm install -g pnpm@8
COPY package.json ./pnpm-lock.yaml .
RUN pnpm install --frozen-lockfile

# build the app
COPY . .
RUN pnpm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
USER node
CMD node ./dist/server/entry.mjs