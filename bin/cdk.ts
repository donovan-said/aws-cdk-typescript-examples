#!/usr/bin/env node

/*
- https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.Stack.html
*/

import * as cdk from 'aws-cdk-lib';
import { QueueStack } from '../lib/cdk-queue-stack';
import { LambdaStack } from '../lib/cdk-lambda-stack';

// App instantiation
const app = new cdk.App();

// Environment configuration
const environ = "dev"
const account = app.node.tryGetContext('account')[environ];
const cdk_env = { account: account['account_id'], region: account['region'] };

// Global tags
const tags = app.node.tryGetContext('tags');

// Stacks
new QueueStack(app, 'QueueStack', {
    description: "SQS and SNS Stack",
    stackName: "sample-app-queue-stack",
    tags: tags,
    env: cdk_env,
});

new LambdaStack(app, 'LambdaStack', {
    description: "Lambda Stack",
    stackName: "sample-app-lambda-stack",
    tags: tags,
    env: cdk_env
});
