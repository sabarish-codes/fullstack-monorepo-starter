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
        description: 'Liveness check. Confirms the API process is responding.',

        responses: {
          '200': {
            description: 'API is running',
          },
        },
      },
    },

    '/health': {
      get: {
        summary: 'Check API readiness',
        description:
          'Readiness check. Verifies connectivity to PostgreSQL and Redis.',

        responses: {
          '200': {
            description: 'API, PostgreSQL, and Redis are all healthy',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/HealthResponse' },
                example: {
                  status: 'ok',
                  checks: { database: true, redis: true },
                },
              },
            },
          },
          '503': {
            description: 'One or more dependencies are unavailable',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/HealthResponse' },
                example: {
                  status: 'not_ready',
                  checks: { database: true, redis: false },
                },
              },
            },
          },
        },
      },
    },
  },

  components: {
    schemas: {
      HealthResponse: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            enum: ['ok', 'not_ready'],
          },
          checks: {
            type: 'object',
            properties: {
              database: { type: 'boolean' },
              redis: { type: 'boolean' },
            },
            required: ['database', 'redis'],
          },
        },
        required: ['status', 'checks'],
      },
    },
  },
};
