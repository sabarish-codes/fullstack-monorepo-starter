import type { RequestHandler } from 'express';
import { AppError } from '../errors/AppError.js';

export const notFound: RequestHandler = (req, res, next) => {
  next(new AppError(`Route not found: ${req.method} ${req.originalUrl}`, 404));
};
