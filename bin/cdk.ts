#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { QueueStack } from '../lib/cdk-queue-stack';
import { LambdaStack } from '../lib/cdk-lambda-stack';

const app = new cdk.App();
new QueueStack(app, 'QueueStack');
new LambdaStack(app, 'LambdaStack');
