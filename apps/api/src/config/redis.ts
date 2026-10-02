import { createClient } from 'redis';
import { env } from './env.js';
import { logger } from './logger.js';

export const redis = createClient({
  url: env.REDIS_URL,
});

redis.on('error', (error) => {
  logger.error({ err: error }, 'Redis client error');
});

redis.on('connect', () => {
  logger.info('Redis connecting...');
});

redis.on('ready', () => {
  logger.info('Redis ready');
});

redis.on('reconnecting', () => {
  logger.warn('Redis reconnecting');
});

redis.on('end', () => {
  logger.info('Redis connection closed');
});
