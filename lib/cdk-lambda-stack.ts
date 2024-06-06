/*
    Example is derived from https://cdkworkshop.com/20-typescript/30-hello-cdk/200-lambda.html
*/

import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class LambdaStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Defines AWS Lambda resource
        const hello = new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NODEJS_16_X,
            code: lambda.Code.fromAsset('lib/lambda-handler'),
            handler: 'lambda-handler.handler'
        });
    }
}
