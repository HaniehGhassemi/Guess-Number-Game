FROM node:16-alpine3.14

WORKDIR /usr/src/app

# Install packages
COPY package.json yarn.lock tsconfig.json tsconfig.build.json ./
RUN yarn install --frozen-lockfile

# Copy project files
COPY . .

# Prepare prisma ORM
RUN yarn prisma generate --schema=./src/prisma/schema.prisma

EXPOSE 3000

RUN yarn build

CMD [ "yarn" ,"start:prod"] 
