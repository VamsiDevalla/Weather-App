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
ARG API_START_ON
ENV API_START_ON=$API_START_ON
EXPOSE $API_START_ON
CMD ["yarn", "start"]
