# AWS CDK TypeScript Examples

## Content

- [AWS CDK TypeScript Examples](#aws-cdk-typescript-examples)
  - [Content](#content)
  - [Overview](#overview)
  - [Setup](#setup)
    - [CDK Initialisation](#cdk-initialisation)
    - [Local Setup](#local-setup)
  - [Useful commands](#useful-commands)
  - [Referenced](#referenced)

## Overview

The purpose of this repository is to create a base cdk repository structure for
TypeScript and collated useful examples.

## Setup

### CDK Initialisation

* ```cdk init sample-app --language typescript```

### Local Setup

* Install dependencies from package.json with ```npm install```
* Ensure that the [pre-commit](https://pre-commit.com/) framework is installed and initialise pre-commit in this repository with ```pre-commit install```.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Referenced

* [AWS Docs - CDK Core Concepts](https://docs.aws.amazon.com/cdk/v2/guide/core_concepts.html)
* [AWS CDK API Reference - TypeSCript (Source)](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html)
* [AWS CDK Workshop - The TypeSCript Workshop](https://cdkworkshop.com/20-typescript.html)
* [AWS Docs - Your first AWS CDK app](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html)
* [Medium - Manoj Fernando - AWS CDK — A Beginner’s Guide with Examples](https://enlear.academy/aws-cdk-a-beginners-guide-with-examples-424c600ac409)
