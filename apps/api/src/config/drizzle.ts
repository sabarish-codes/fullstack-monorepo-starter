import { drizzle } from 'drizzle-orm/node-postgres';
import { pool } from './db.js';

export const db = drizzle({
  client: pool,
});
