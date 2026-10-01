import express from 'express';
import type { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { pinoHttp } from 'pino-http';
import { logger } from './config/logger.js';
import { env } from './config/env.js';
import { rateLimiter } from './middleware/rateLimit.js';
import { checkRouter } from './routes/check.js';
import { metricsRouter } from './routes/metrics.js';
import { docsRouter } from './routes/docs.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

export function createApp(): Application {
  const app = express();

  app.use(pinoHttp({ logger }));

  app.use(helmet());

  app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));

  app.use(express.json({ limit: '10kb' }));

  app.use(rateLimiter);

  app.use(checkRouter);

  app.use(metricsRouter);

  app.use(docsRouter);

  app.use(notFound);

  app.use(errorHandler);

  return app;
}
