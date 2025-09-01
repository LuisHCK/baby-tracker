# Base image
FROM oven/bun:alpine AS base
WORKDIR /usr/src/app

# Install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# --- Development ---
FROM base AS development
COPY . .
EXPOSE 5173
CMD ["bun", "run", "dev", "--host"]

# --- Build ---
FROM base AS build
COPY . .
RUN bun run build

# --- Production ---
FROM oven/bun:alpine AS production
WORKDIR /usr/src/app
# Only copy the built files and public assets
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/public ./public

# Serve static files
EXPOSE 3000
CMD ["bunx", "serve", "dist"]
