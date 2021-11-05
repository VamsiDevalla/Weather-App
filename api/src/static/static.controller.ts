import { NextFunction, Request, Response, Router } from 'express';
export const StaticController: Router = Router();

StaticController.get('/', async (request: Request, response: Response, next: NextFunction) => {
  try {
    response.status(200).send({ data: 'place holder end point for SSR' });
  } catch (error) {
    next(error);
  }
});
