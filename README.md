# foryouandyourcustomers

This nodejs application is a AWS lambda function. It pulls the latest CSV file from the S3 bucket, parses it and sends it to the API.

# Getting Started

```bash
npm install
```

# Execution

```bash
node index.js
```

# ZIP

Run the command below to zip everything in the project to file called "deploy.zip". Then upload the zip file into the AWS Lambda function

```bash
npm run zip
```

# Upload

## Prerequisites

- [AWS CLI – Quick configuration with aws configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
- [AWS CLI – Install version 2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

Run the command below to upload the zipped filed to the AWS Lambda function

```bash
npm run upload
```
