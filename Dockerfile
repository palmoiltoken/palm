FROM node:20.14.0-alpine3.20 AS builder

# Setup NodeJS
RUN apk add --update

# Setup PNPM
RUN corepack enable && \
    corepack prepare pnpm@9.2.0 --activate

# Make the 'app' folder the current working directory.
WORKDIR /app

COPY . .

RUN rm -rf node_modules/

# Install project dependencies (for production).
RUN pnpm i

# Build app
RUN pnpm run build

# NodeJS utilities

ARG PORT=3000
ENV PORT=$PORT

ARG MODE=dev
ENV MODE=$MODE

EXPOSE $PORT

# Serve build result
CMD ["npm", "run", "start"]

# CMD tail -f /dev/null