import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { openapiSpec } from '../docs/openapi.js';

export const docsRouter: Router = Router();

docsRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpec));
