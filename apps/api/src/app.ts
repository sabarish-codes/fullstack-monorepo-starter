import express from 'express';
import type { Application } from 'express';

export function createApp(): Application {
  const app = express();
  return app;
}
