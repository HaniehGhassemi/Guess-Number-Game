
## Guess Number Game

## Installation

```bash
$ yarn install
```
## Environmet variables
```bash
$ cp .sample.env .env
```
Then fill the .env file variables with the appropriate values
## Running the app

```bash
# start docker containers: app, postgreSQL, redis, elasticsearch, kibana, filebeat
$ docker compose up -d
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
