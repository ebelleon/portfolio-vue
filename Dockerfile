# develop stage
FROM node:lts-alpine as develop
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# build stage
FROM develop as build
RUN npm run build

# production stage
FROM nginx:stable-alpine as prod
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]