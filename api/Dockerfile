FROM node:12.11
ENTRYPOINT lsyncd -rsync /express-app /express-serve && sleep 10 && npm run dev
WORKDIR /express-serve
RUN mkdir /express-app
COPY . /express-app
RUN cd /express-app && npm install
RUN apt-get update && apt-get install -y lsyncd
