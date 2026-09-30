import { createServer } from 'node:http';

import { env } from './src/config/env.js';
import { createApp } from './src/app.js';
import { pool } from './src/config/db.js';

const app = createApp();

const server = createServer(app);

async function bootstrap() {
  // check db connection
  const dbConnect = await pool.query('SELECT 1');
  console.log(
    'Database connection successful, Row Count: ',
    dbConnect.rowCount,
  );

  server.listen(env.PORT, () => {
    console.log(`API server running on port ${env.PORT}`);
  });
}

bootstrap().catch((error) => {
  console.error('Failed to start API server: ', error);
  process.exit(1);
});

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

function shutdown(signal: string) {
  console.log(`${signal} received. Server shutting down...`);

  // safety timer to force shutdown when server.close() hangs
  const timer = setTimeout(() => {
    console.log('Forced shutdown due to timeout');
    process.exit(1);
  }, 10000);

  server.close(async () => {
    clearTimeout(timer);
    await pool.end();
    console.log('DB connection closed');
    console.log('HTTP server closed');
    process.exit(0);
  });
}
