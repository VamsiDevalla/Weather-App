import { Router, Request, Response } from 'express';
import { getCurrentConditions } from './current-conditions/current-conditons.service';
import { getLocationInfo } from './location-info/location-info.service';
import processWeatherData from './weather.processor';
export const WeatherController: Router = Router();

WeatherController.get('/', async (request: Request, response: Response) => {
  try {
    const { lat, lng } = request.query;
    const parsedLat = Number(lat);
    const parsedLng = Number(lng);
    if (!parsedLat || !parsedLng) {
      return response.status(400).json({
        message: 'latitude and longitudes are required',
      });
    }
    const locationInfo = await getLocationInfo(parsedLat, parsedLng);
    const currentConditions = await getCurrentConditions(locationInfo.Key);
    return response.status(200).json(processWeatherData(locationInfo, currentConditions));
  } catch {
    return response.status(500).json({
      message: 'internal server error',
    });
  }
});
