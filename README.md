![CircleCI branch](https://img.shields.io/circleci/project/github/nlitwin/bidirectional-translation-app/master.svg)
[![Coverage Status](https://coveralls.io/repos/github/nlitwin/bidirectional-translation-app/badge.svg?branch=master)](https://coveralls.io/github/nlitwin/bidirectional-translation-app?branch=master)

# Bidirectional Translation App

An app providing all your needs for the bidirectional translation method!

## Working locally

``` bash
# if you have nvm, just switch to the node version defined in .nvmrc
# if not, make sure you have node >= 8.10.0 and npm >= 5.7.1
nvm use

# install dependencies
npm install

# serve with hot reload at localhost:8085
npm start

# TDD with Cypress
npm run cypress:open
```

## Running tests

``` bash
# run all tests
npm test

# run unit tests
npm run test:unit

# run e2e tests
npm run test:e2e

# open Cypress for e2e tests
npm run cypress:open
```

## Production build

``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
