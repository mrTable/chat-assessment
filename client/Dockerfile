FROM node:10.15-alpine

WORKDIR /app
ENV NODE_PATH=src/

ADD client/package.json /app/
RUN npm install

ADD ./client /app/
