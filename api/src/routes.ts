import { Application, Router } from 'express';
import StaticController from './static/static.controller';
import WeatherController from './weather/weather.controller';

// eslint-disable-next-line @typescript-eslint/naming-convention
const _routes: [string, Router][] = [
  ['/', StaticController],
  ['/api/weather', WeatherController],
];

const routes = (app: Application) => {
  for (const route of _routes) {
    const [url, controller] = route;
    app.use(url, controller);
  }
};

export default routes;
