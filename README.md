# AWS CDK TypeScript Examples

## Content

- [AWS CDK TypeScript Examples](#aws-cdk-typescript-examples)
  - [Content](#content)
  - [Overview](#overview)
  - [Setup](#setup)
    - [CDK Initialisation](#cdk-initialisation)
    - [Genral Setup](#genral-setup)
  - [Useful commands](#useful-commands)
  - [Referenced](#referenced)

## Overview

The purpose of this repository is to create a base cdk repository structure for
TypeScript and collated useful examples.

## Setup

### CDK Initialisation

* ```cdk init cdk-examples-typescript --language```

### Genral Setup

* Initialise pre-commit in this repository with ```pre-commit install```.
  If the [pre-commit](https://pre-commit.com/) framework isn't install, please install it.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Referenced

* [AWS CDK API Reference - TypeSCript (Source)](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html)
* [AWS CDK Workshop - The TypeSCript Workshop](https://cdkworkshop.com/20-typescript.html)
* [AWS Docs - Your first AWS CDK app](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html)
* [Medium - Manoj Fernando - AWS CDK — A Beginner’s Guide with Examples](https://enlear.academy/aws-cdk-a-beginners-guide-with-examples-424c600ac409)
