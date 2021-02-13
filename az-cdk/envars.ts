import { initEnvars } from '@cpmech/envars';

export const envars = {
  MYAPP_DOMAIN: '',
  MYAPP_HOSTED_ZONE_ID: '',
  MYAPP_CERTIFICATE_ARN: '',
  MYAPP_CLOUDFRONT_ID_WEBSITE: '',

  GROUP: '',
  STAGE: '',
};

initEnvars(envars);

// enforce prod for the website
if (envars.GROUP === 'website') {
  envars.STAGE = 'prod';
}
