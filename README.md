# Getting Started with Cypress Playground

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is created to play with Cypress.io and Sorry-cypress.

## Setup Projects

Download [Docker](https://www.docker.com/products/docker-desktop/)


Install packages use:
```
  npm i
```

## Start App

To start app use:

> App starting is required when running tests.

```
  npm run start
```

## Available Test Scripts

### `1. Cypress.io:`

To play with cypress.io use:

```
  npm run cypress-io
```

This script will run tests with recording option and data will be sent to Cypress.io.


### `2. Sorry-cypress:`

Run below script in computer root:

```
  docker-compose -f ./docker-compose.minio.yml up
```

This script will init and setup docker containers of sorry-cypress to store test data and run tests.

To play with sorry-cypress use:

```
  npm run cypress-cloud
```

This script will run tests with recording option. Because we host sorry-cypress in local, data will be saved to local Database (MongoDB).

We can view the Dashboard at [http://localhost:8080](http://localhost:8080)


## Learn More

To learn more about Cypress.io, check out the [Cypress Cloud](https://docs.cypress.io/guides/cloud/introduction).

To learn more about sorry-cypress, check out the [sorry-cypress](https://docs.sorry-cypress.dev/guide/get-started).
