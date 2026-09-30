import { createServer } from 'node:http';

import { env } from './src/config/env.js';
import { createApp } from './src/app.js';

const app = createApp();

const server = createServer(app);

server.listen(env.PORT, () => {
  console.log(`API server running on port ${env.PORT}`);
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

  server.close(() => {
    clearTimeout(timer);
    console.log('HTTP server closed');
    process.exit(0);
  });
}
