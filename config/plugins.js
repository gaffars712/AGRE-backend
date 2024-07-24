require('dotenv').config();
const awsConfig = require('./awsConfig.js');

module.exports = ({ env }) => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 10, // Default is 5
    }
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: awsConfig.accessKeyId,
        secretAccessKey: awsConfig.secretAccessKey,
        region: awsConfig.region,
        params: {
          ACL: 'public-read',
          signedUrlExpires: 15 * 60,
          Bucket: awsConfig.bucket,
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'en',
      locales: ['en', 'ar'],
    },
  },
  email: {
    config: {
      provider: 'strapi-provider-email-nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASS'),
        },
        // Optional settings
        secure: false, // Use TLS
        tls: {
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: env('SMTP_DEFAULT_FROM', 'shaikhgaffar@sdlccorp.com'),
        defaultReplyTo: env('SMTP_DEFAULT_REPLY_TO', 'shaikhgaffar@sdlccorp.com'),
      },
    },
  },
});





