FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.lock ./
ENV NODE_ENV=production
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
