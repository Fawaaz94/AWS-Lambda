## foryouandyourcustomers

This nodejs application is a AWS lambda function. It pulls the latest CSV file from the S3 bucket, parses it and sends it to the API.

## Getting Started

```bash
npm install
```

## Execution

```bash
node index.js
```

## ZIP

Run the command below to zip everything in the project. Then upload the zip file into the AWS Lambda function

```bash
zip -r deploy.zip ./ 
```
