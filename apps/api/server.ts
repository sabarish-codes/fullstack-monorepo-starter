import { env } from './src/config/env.js';
import { createApp } from './src/app.js';

console.log(env.NODE_ENV, env.PORT);
const app = createApp();
console.log('API application created: ', !!app);
console.log('API server starting....');
