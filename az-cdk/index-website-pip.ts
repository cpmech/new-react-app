import { App } from '@aws-cdk/core';
import { WebsitePipelineStack, ssmSecret } from '@cpmech/az-cdk';
import { envars } from './envars';

const app = new App();
const stackName = `mystack-${envars.STAGE}-website-pip`;

new WebsitePipelineStack(app, stackName, {
  githubRepo: 'myrepo',
  githubUser: 'myusername',
  websiteBucketName: `${envars.MYAPP_DOMAIN}-website`,
  cloudfrontDistributionId: envars.MYAPP_CLOUDFRONT_ID_WEBSITE,
  notificationEmails: ['my.email@gmail.com'],
  assetsDir: 'build',
  githubSecret: ssmSecret({ name: 'GHTOKEN', version: '1' }),
  envars,
});
