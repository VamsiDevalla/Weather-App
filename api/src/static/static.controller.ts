import { Router } from 'express';
import { sendHtml } from './static.handler';

const StaticController: Router = Router();

StaticController.get('/', sendHtml);

export default StaticController;
