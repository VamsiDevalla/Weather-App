FROM node:14-alpine as build-step
WORKDIR /web
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
ARG CLIENT_API_BASE_URL
ENV API_BASE_URL=$CLIENT_API_BASE_URL

RUN yarn build:ssr

FROM node:14-alpine
WORKDIR /web
COPY ["package.json", "yarn.lock", "./"]
RUN yarn --production
COPY --from=build-step /web/build .
ARG WEB_START_ON
ENV WEB_START_ON=$WEB_START_ON
EXPOSE $WEB_START_ON
CMD ["yarn", "start:ssr"]
