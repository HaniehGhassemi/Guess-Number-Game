# :video_game: Guess Number Game
The Guess Number Game is an exercise project to learn programming with the JavaScript stack. This repository is the new version of the <a href="https://github.com/sajjadghorbani80/WebOnline-Game">webOnline Game repository<a>, which uses the following technologies in this version:
<ul>
<li>Vue.js</li>
<li>NestJS</li>
<li>Postgresql</li>
<li>TypeScript</li>
<li>Redis</li>
<li>Elastic Search</li>
<li>Kibana</li>
<li>Docker</li>
</ul>


<br>

## :dizzy: Run Back-End

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

# initial database
$ yarn prisma migrate deploy --schema=src/prisma/schema.prisma

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## :dizzy: Run Front-End

### Installation

```bash
$ yarn install
```
### Environmet variables

```bash
$ cp .sample.env .env
```
then go to your .env file and change VUE_APP_BASE_API_URL variable to Back-End running address url

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Compiles and hot-reloads for development
```
yarn serve
```

