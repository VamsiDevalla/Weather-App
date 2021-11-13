FROM node:14-alpine as build-step
WORKDIR /web
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
ARG REACT_APP_GOOGLE_MAP_KEY
ARG REACT_APP_API_BASE_URL
RUN yarn build:ssr

FROM node:14-alpine
WORKDIR /web
COPY ["package.json", "yarn.lock", "./"]
RUN yarn --production
COPY --from=build-step /web/build .
EXPOSE 4200
CMD ["yarn", "start:ssr"]
