FROM node:dubnium

WORKDIR /srv

COPY ./package.json ./package.json

RUN yarn

COPY ./client ./client
COPY ./config ./config
COPY ./public ./public

RUN yarn build

COPY ./server ./server

EXPOSE 80

ENTRYPOINT [ "yarn" ]

CMD [ "start" ]
