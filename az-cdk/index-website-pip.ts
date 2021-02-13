import { App } from '@aws-cdk/core';
import { WebsitePipelineStack, ssmSecret } from '@cpmech/az-cdk';
import { envars } from './envars';

const app = new App();
const stackName = `dp-${envars.STAGE}-website-pip`;

new WebsitePipelineStack(app, stackName, {
  githubRepo: 'dp_frontend',
  githubUser: 'cpmech',
  websiteBucketName: `${envars.MYAPP_DOMAIN}-website`,
  cloudfrontDistributionId: envars.MYAPP_CLOUDFRONT_ID_WEBSITE,
  notificationEmails: ['dorival.pedroso@gmail.com'],
  assetsDir: 'build',
  githubSecret: ssmSecret({ name: 'GHTOKEN', version: '1' }),
  envars,
});
