
# Getir Nodejs Case Study




## Installation

Clone project and install project dependencies with npm

```bash
  git clone https://github.com/emreimamoglu/getir-nodejs-case-study.git
  cd getir-nodejs-case-study
  npm install
  cp .env.example .env
```
Before starting the project please provide the environment variables.

To start project on development mode

```bash
npm run dev
```

To start project using pm2 service.

```bash
npm run start

```
To run tests :

```bash
npm run test
```
## API Reference

#### Filter Records

```http
  POST /api/records
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `startDate` | `String` | `Date should be in YYYY-MM-DD format` |
  `endDate` | `String`|`Date should be in YYYY-MM-DD format`
  `minCount`|`Number`| `Minimum count wanted for filtering`
  `maxCount`|`Number`| `Maximum number wanted for filtering`


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI` -> Replace <MONGO_URI> with your DB URI

`PORT` -> Port server runs on


## Test Output Documentation

```After running tests, jest creates a file to visualize the test result it can be found at /coverage/lcov-report/index.html. The html file contains formatted and visualized test results.```


## Demo

http://34.219.181.154:3000/api/records
