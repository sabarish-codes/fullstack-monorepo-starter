import { Router } from 'express';

export const checkRouter: Router = Router();

checkRouter.get('/check', (_req, res) => {
  res.status(200).json({
    status: 'ok',
  });
});
