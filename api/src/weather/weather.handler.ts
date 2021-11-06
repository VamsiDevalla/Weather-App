import { NextFunction, Request, Response } from 'express';
import { getCurrentConditions } from './current-conditions/current-conditons.service';
import { getLocationInfo } from './location-info/location-info.service';
import { processWeather } from './weather.processor';

export const getWeatherHandler = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  const { lat, lng } = request.query;
  const parsedLat = Number(lat);
  const parsedLng = Number(lng);
  if (!Number.isFinite(parsedLat) || !Number.isFinite(parsedLng)) {
    next(
      response.status(400).json({
        message: 'latitude and longitudes are required',
      }),
    );
  } else {
    try {
      const locationInfo = await getLocationInfo(parsedLat, parsedLng);
      const currentConditions = await getCurrentConditions(locationInfo.Key);
      next(response.status(200).json(processWeather(locationInfo, currentConditions)));
    } catch (error) {
      next(response.status(503).json(error));
    }
  }
};
