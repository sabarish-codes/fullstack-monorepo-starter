import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),

  PORT: z.coerce.number().min(1).max(65535).default(3000),

  DATABASE_URL: z.string().min(1),

  REDIS_URL: z.string().min(1),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error('API Env Validation failed');
  console.log(z.prettifyError(result.error));
  process.exit(1);
}

export type Env = z.infer<typeof envSchema>;
export const env: Env = result.data;

console.log('API Env Validation success');
