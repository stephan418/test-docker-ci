FROM node:current-alpine3.10

RUN npm i -g ts-node@9.1.1

RUN mkdir /home/app

COPY . /home/app
RUN echo test

WORKDIR /home/app
RUN npm i

CMD ["ts-node", "/home/app/src/app.ts"]
