import express, { Application } from 'express';
import morgan from 'morgan';
import routes from './routes';

// Boot express
export const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
// Application routing
routes(app);
