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
FROM nginx:1.27-alpine AS production

# Copy built files to Nginx web root
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy Nginx configuration for SPA routing and caching
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose HTTP
EXPOSE 80

# Use the default nginx start command
CMD ["nginx", "-g", "daemon off;"]
