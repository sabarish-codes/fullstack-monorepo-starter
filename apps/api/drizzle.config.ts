import { defineConfig } from 'drizzle-kit';
import { loadEnvFile } from 'node:process';

loadEnvFile('.env');

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
