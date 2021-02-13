import { App, Stack, CfnOutput } from '@aws-cdk/core';
import { WebsiteConstruct } from '@cpmech/az-cdk';
import { envars } from './envars';

const app = new App();
const stackName = `dp-${envars.STAGE}-website`;
const stack = new Stack(app, stackName);

const website = new WebsiteConstruct(stack, 'Website', {
  domain: envars.DP_DOMAIN,
  comment: 'DP Website',
  skipMX: false,
  hostedZoneId: envars.DP_HOSTED_ZONE_ID,
  certificateArn: envars.DP_CERTIFICATE_ARN,
});

new CfnOutput(stack, 'CloudFrontId', {
  value: website.cloudfrontDistributionId,
});
