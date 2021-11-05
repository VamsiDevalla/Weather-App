import { NextFunction, Request, Response, Router } from 'express'
export const StaticController: Router = Router()

StaticController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'place holder end point for SSR' })
  } catch (e) {
    next(e)
  }
})
