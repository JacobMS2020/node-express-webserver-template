FROM node:18-alpine

WORKDIR /usr/src/app
COPY ./node/package*.json ./
RUN npm install
COPY ./node ./

EXPOSE 3000
CMD ["node", "server.js"]