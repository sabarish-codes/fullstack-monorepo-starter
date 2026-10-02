FROM node:24-alpine AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/api/package.json apps/api/package.json

RUN pnpm install --frozen-lockfile

COPY apps/api apps/api

RUN pnpm --filter api build

RUN pnpm --filter api deploy --prod /app/deploy


FROM node:24-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

COPY --from=build /app/deploy ./

CMD ["node", "dist/server.js"]