import express from 'express';
import type { Application } from 'express';
import { pinoHttp } from 'pino-http';
import { logger } from './config/logger.js';

export function createApp(): Application {
  const app = express();

  app.use(pinoHttp({ logger }));

  app.use(express.json({ limit: '10kb' }));

  return app;
}
