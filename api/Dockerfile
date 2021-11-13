FROM node:14-alpine as build-step
WORKDIR /api
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
RUN yarn build

FROM node:14-alpine
WORKDIR /api
COPY ["package.json", "yarn.lock", "./"]
RUN yarn --production
COPY --from=build-step /api/build .
EXPOSE 8000
CMD ["yarn", "start"]
