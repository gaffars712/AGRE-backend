module.exports = ({env}) => ({
    // 'strapi-plugin-populate-deep': {
    //     config: {
    //       defaultDepth: 10, // Default is 5
    //     }
    //   },
      upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            s3Options: {
              credentials: {
                // accessKeyId: env('AWS_ACCESS_KEY_ID'),
                accessKeyId: 'AKIA2PORGW6MI2AXP65P',
                // secretAccessKey: env('AWS_ACCESS_SECRET'),
                secretAccessKey: '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',
              },
            //   region: env('AWS_REGION'),
              region: 'us-east-1',
              params: {
                ACL: 'public-read',
                signedUrlExpires:  15 * 60,
                // Bucket: env('AWS_BUCKET'),
                Bucket: 'sdlc-scrapi',
              },
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
});





