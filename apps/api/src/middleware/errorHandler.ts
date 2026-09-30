import type { ErrorRequestHandler } from 'express';
import { AppError } from '../errors/AppError.js';
import { logger } from '../config/logger.js';

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof AppError) {
    logger.warn(
      {
        err: error,
        method: req.method,
        url: req.originalUrl,
      },
      error.message,
    );

    res.status(error.statusCode).json({
      error: {
        message: error.message,
      },
    });
    return;
  }

  logger.error(
    {
      err: error,
      method: req.method,
      url: req.originalUrl,
    },
    'Unhanlded Application Error',
  );

  res.status(500).json({
    error: {
      message: 'Internal server error',
    },
  });
};
