export const openapiSpec = {
  openapi: '3.0.3',

  info: {
    title: 'API',
    version: '1.0.0',
    description: 'API documentation',
  },

  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],

  paths: {
    '/check': {
      get: {
        summary: 'Check API status',

        responses: {
          '200': {
            description: 'API is running',
          },
        },
      },
    },
  },
};
