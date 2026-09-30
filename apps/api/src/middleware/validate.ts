import type { RequestHandler, Request } from 'express';
import type { ZodType } from 'zod';
import { AppError } from '../errors/AppError.js';
import { z } from 'zod';

type ValidationSchemas = {
  body?: ZodType;
  query?: ZodType;
  params?: ZodType;
};

export function validate(schemas: ValidationSchemas): RequestHandler {
  return (req, _res, next) => {
    const errors: Record<string, unknown> = {};

    if (schemas.body) {
      const result = schemas.body.safeParse(req.body);
      if (!result.success) {
        errors.body = z.flattenError(result.error).fieldErrors;
      } else {
        req.body = result.data;
      }
    }

    if (schemas.query) {
      const result = schemas.query.safeParse(req.query);
      if (!result.success) {
        errors.query = z.flattenError(result.error).fieldErrors;
      } else {
        req.query = result.data as Request['query'];
      }
    }

    if (schemas.params) {
      const result = schemas.params.safeParse(req.params);
      if (!result.success) {
        errors.params = z.flattenError(result.error).fieldErrors;
      } else {
        req.params = result.data as Request['params'];
      }
    }

    if (Object.keys(errors).length > 0) {
      return next(new AppError('Request Validation failed', 400));
    }

    next();
  };
}
