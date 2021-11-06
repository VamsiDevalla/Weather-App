import { Router } from 'express';
import { getWeatherHandler } from './weather.handler';

const WeatherController: Router = Router();

WeatherController.get('/', getWeatherHandler);

export default WeatherController;
