FROM node:10.5.0-alpine

WORKDIR /app
ADD . /app

RUN yarn install && yarn build

EXPOSE 3000

CMD ["yarn", "serve"]
