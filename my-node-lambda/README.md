# my-node-lambda

A serverless TypeScript Lambda function that prints and responds with "hello world".

## Prerequisites

- Node.js >= 18

## Install Dependencies

```bash
cd my-node-lambda
npm install
```

## Run Locally

Start the local server with Serverless Offline:

```bash
npm run dev
```

The API will be available at `http://localhost:3000/dev/hello`.

## Run Tests

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

## Run Tests with Coverage

```bash
npm run test:coverage
```

## Deploy to AWS

```bash
npm run deploy
```
