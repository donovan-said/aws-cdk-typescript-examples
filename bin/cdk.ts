#!/usr/bin/env node

/*
- https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.Stack.html
*/

import * as cdk from 'aws-cdk-lib';
import { QueueStack } from '../lib/cdk-queue-stack';
import { LambdaStack } from '../lib/cdk-lambda-stack';

// Environment configuration
const dev = { account: '11111111', region: 'eu-west-1' };
// const test = { account: '222222222', region: 'eu-west-2' };
// const prod = { account: '333333333', region: 'eu-west-2' };

// Global tags
const tags = { "managed_by": "aws-cdk" };

// App instantiation
const app = new cdk.App();

// Stacks
new QueueStack(app, 'QueueStack', {
    description: "SQS and SNS Stack",
    stackName: "sample-app-queue-stack",
    env: dev,
});

new LambdaStack(app, 'LambdaStack', {
    description: "Lambda Stack",
    stackName: "sample-app-lambda-stack",
    tags: tags,
    env: dev
});
