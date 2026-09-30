import express from 'express';
import type { Application } from 'express';

export function createApp(): Application {
  const app = express();

  app.use(express.json({ limit: '10kb' }));

  return app;
}
