FROM node:12-alpine

EXPOSE 3000

WORKDIR /frontend

COPY ["package.json", "yarn.lock", "./"]

RUN yarn

COPY . .

CMD ["yarn", "dev"]
