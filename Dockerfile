FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm prune --production
RUN npm run build
EXPOSE 2222
