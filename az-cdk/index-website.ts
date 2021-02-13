import { App, Stack, CfnOutput } from '@aws-cdk/core';
import { WebsiteConstruct } from '@cpmech/az-cdk';
import { envars } from './envars';

const app = new App();
const stackName = `mystack-${envars.STAGE}-website`;
const stack = new Stack(app, stackName);

const website = new WebsiteConstruct(stack, 'Website', {
  domain: envars.MYAPP_DOMAIN,
  comment: 'My Website',
  skipMX: false,
  hostedZoneId: envars.MYAPP_HOSTED_ZONE_ID,
  certificateArn: envars.MYAPP_CERTIFICATE_ARN,
});

new CfnOutput(stack, 'CloudFrontId', {
  value: website.cloudfrontDistributionId,
});
