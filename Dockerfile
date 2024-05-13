FROM node:lts-alpine as build_image
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
ENV NODE_ENV=production
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:lts-alpine
WORKDIR /usr/src/app
# copy from build image
COPY --from=build_image /usr/src/app/ ./
COPY --from=build_image /usr/src/app/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]
