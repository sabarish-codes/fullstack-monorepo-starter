import { Router } from 'express';

import { pool } from '../config/db.js';
import { redis } from '../config/redis.js';

export const healthRouter: Router = Router();

healthRouter.get('/health', async (_req, res) => {
  const checks = {
    database: false,
    redis: false,
  };

  try {
    await pool.query('SELECT 1');
    checks.database = true;
  } catch {
    checks.database = false;
  }

  try {
    if (redis.isReady) {
      await redis.ping();
      checks.redis = true;
    }
  } catch {
    checks.redis = false;
  }

  const healthy = checks.database && checks.redis;

  res.status(healthy ? 200 : 503).json({
    status: healthy ? 'ok' : 'not_ready',
    checks,
  });
});
