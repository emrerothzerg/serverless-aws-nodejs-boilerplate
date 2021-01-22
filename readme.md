# Serverless AWS Nodejs Boilerplate

Easy boilerplate for microservices.

## Install

Run `yarn` to install packages

## Environment variables

Go to `config` folder and rename `environment.yml.example` to `environment.yml`

Add your AWS region, AWS profile for your lambdas and project name.

### Creating a new lambda

Run `yarn new:lambda newLambdaName` (replace `newLambdaName` with your new lambda's name)

### Deploy a single lambda

Run `yarn deploy:lambda yourLambdaName`

### Deploy the project

Run `yarn deploy`
