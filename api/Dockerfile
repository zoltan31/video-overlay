FROM node:12.11-alpine
ENTRYPOINT npm start
RUN mkdir /express-app
WORKDIR /express-app
COPY . /express-app
RUN npm install
