FROM node:12.11
ENTRYPOINT lsyncd -rsync /angular-app /angular-serve && sleep 10 && npm start
WORKDIR /angular-serve
RUN mkdir /angular-app
COPY . /angular-app
RUN cd /angular-app && npm install && npm run build
RUN apt-get update && apt-get install -y lsyncd
