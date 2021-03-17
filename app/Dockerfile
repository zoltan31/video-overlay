FROM node:12.11-alpine
ENTRYPOINT npm start
RUN mkdir /angular-app
WORKDIR /angular-app
COPY . /angular-app
RUN npm install
RUN npm build
