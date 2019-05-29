FROM node:9.11.1-alpine

ENV PORT=8080

ENV NODE_ENV=development

RUN npm install -g http-server

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]