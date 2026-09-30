import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
});
