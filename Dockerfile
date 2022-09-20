FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
COPY ./.env.docker ./.env

EXPOSE 3001
CMD [ "npm", "start" ]
