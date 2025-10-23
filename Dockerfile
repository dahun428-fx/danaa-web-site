# Stage 1: build static assets
FROM node:20-alpine AS builder
WORKDIR /app

# Yarn v1 고정
RUN corepack enable && corepack prepare "yarn@1.22.22" --activate

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build:static

# Stage 2: serve with nginx
FROM nginx:1.27-alpine AS runner
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 17777
CMD ["nginx", "-g", "daemon off;"]
