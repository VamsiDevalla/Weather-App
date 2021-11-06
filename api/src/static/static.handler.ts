import { Request, Response } from 'express';

export const sendHtml = async (request: Request, response: Response) => {
  response.status(200).json({ data: 'place holder end point for SSR' });
};
