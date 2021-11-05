import { Router, Request, Response, NextFunction } from 'express'
import { getCurrentConditions } from './current-conditions/current-conditons.service'
import { getLocationInfo } from './location-info/location-info.service'
import processWeatherData from './weather.processor'
export const WeatherController: Router = Router()

WeatherController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { lat, lng } = req.query
    const parsedLat = Number(lat)
    const parsedLng = Number(lng)
    if (!parsedLat || !parsedLng) {
      return res.status(400).json({
        message: 'latitude and longitudes are required'
      })
    }
    const locationInfo = await getLocationInfo(parsedLat, parsedLng)
    const currentConditions = await getCurrentConditions(locationInfo.Key)
    return res.status(200).json(processWeatherData(locationInfo, currentConditions))
  } catch (e) {
    return res.status(500).json({
      message: 'internal server error'
    })
  }
})
