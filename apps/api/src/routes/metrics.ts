import { Router } from 'express';
import { register } from '../config/metrics.js';

export const metricsRouter: Router = Router();

metricsRouter.get('/metrics', async (_req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});
