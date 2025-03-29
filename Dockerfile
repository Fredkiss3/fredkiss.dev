FROM node:20-alpine AS base
WORKDIR /app

# install dependencies
RUN npm install -g pnpm@8
COPY package.json ./pnpm-lock.yaml ./

FROM base AS prod-deps
RUN pnpm install --frozen-lockfile --prod

FROM base AS build-deps
RUN pnpm install --frozen-lockfile

# build the app
FROM build-deps AS build
COPY . .
RUN pnpm run build


FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
USER node
CMD node ./dist/server/entry.mjs