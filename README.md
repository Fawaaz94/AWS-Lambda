# AWS Lambda App
		
This nodejs application is a AWS lambda function. It pulls the latest CSV file from a S3 bucket, parses it and sends it to an API.


## Getting Started

```bash
npm install
```

## Execution

```bash
node index.js
```

## ZIP

Run the command below to zip everything in the project to a file called **deploy.zip**.


```bash
npm run zip
```


## Upload

You can either upload the zip file **deploy.zip** manually using the AWS lambda function UI, or use the run command below with a terminal.


### Prerequisites

- [AWS CLI – Quick configuration with aws configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
- [AWS CLI – Install version 2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)


Run the command below to upload the zipped **deploy.zip** file to the AWS Lambda function


```bash
npm run upload
```

