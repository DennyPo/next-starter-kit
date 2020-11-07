FROM node:12-alpine

EXPOSE 3000

WORKDIR /frontend

ENV NEXT_PUBLIC_API_URL="http://localhost:3000/api"

COPY ["package.json", "yarn.lock", "./"]

RUN yarn

COPY . .

CMD ["yarn", "dev"]
