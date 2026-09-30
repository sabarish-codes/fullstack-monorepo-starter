import { createClient } from 'redis';
import { env } from './env.js';

export const redis = createClient({
  url: env.REDIS_URL,
});

redis.on('error', (error) => {
  console.error('Redis client error: ', error);
});

redis.on('connect', () => {
  console.log('Redis connecting...');
});

redis.on('ready', () => {
  console.log('Redis ready');
});

redis.on('reconnecting', () => {
  console.log('Redis reconnecting');
});

redis.on('end', () => {
  console.log('Redis connection closed');
});
