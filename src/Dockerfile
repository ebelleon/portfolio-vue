FROM node:lts-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run generate
RUN rm /app/dist/README.md
RUN npm prune --production

FROM nginx:stable-alpine AS server
COPY --from=build /app/dist /usr/share/nginx/html