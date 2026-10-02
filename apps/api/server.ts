import { createServer } from 'node:http';

import { env } from './src/config/env.js';
import { createApp } from './src/app.js';
import { pool } from './src/config/db.js';
import { logger } from './src/config/logger.js';
import { redis } from './src/config/redis.js';

const app = createApp();

const server = createServer(app);

async function bootstrap() {
  // check db connection
  const dbConnect = await pool.query('SELECT 1');
  logger.info({ rowCount: dbConnect.rowCount }, 'DB connection successful');

  // connect redis
  await redis.connect();
  logger.info('Redis connection successful');

  server.listen(env.PORT, () => {
    logger.info({ port: env.PORT }, 'API Server running');
  });
}

bootstrap().catch((error) => {
  logger.fatal(error, 'Failed to start API server');
  process.exit(1);
});

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

function shutdown(signal: string) {
  logger.info({ signal }, 'Signal received. Shutting down server');

  // safety timer to force shutdown when server.close() hangs
  const timer = setTimeout(() => {
    logger.warn('Forced shutdown due to timeout');
    process.exit(1);
  }, 10000);

  server.close(async () => {
    clearTimeout(timer);
    logger.info('HTTP server closed');

    await pool.end();
    logger.info('DB connection closed');

    if (redis.isOpen) {
      await redis.quit();
      logger.info('Redis connection closed');
    }

    process.exit(0);
  });
}
