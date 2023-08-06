# Common build stage
FROM node:16.18-buster-slim as common-build-stage

# install open ssl for prisma
RUN apt-get update && apt-get install -y fuse3 openssl

COPY . ./app

WORKDIR /app

COPY package*.json ./

RUN npm install

# schema doesn't change much so these will stay cached
ADD prisma .
RUN npm run prisma:generate

EXPOSE 3000

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "start"]
