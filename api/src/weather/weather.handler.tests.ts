import { getMockReq, getMockRes } from '@jest-mock/express';
import { getWeatherHandler } from './weather.handler';
import * as locationService from './location-info/location-info.service';
import * as currentConditionsService from './current-conditions/current-conditons.service';
import * as weatherProcessor from './weather.processor';
import { locationMockInfo } from './test-data/location-info.mock';
import { currentConditionsMockInfo } from './test-data/current-conditions-info.mock';
import { weatherInfoMock } from './test-data/weather-info.mock';

describe('Weather handler', () => {
  describe('getWeatherHandler', () => {
    const request = getMockReq();
    const { res: response, next, mockClear } = getMockRes();

    beforeEach(() => {
      mockClear();
    });

    test('should throw 400 if latitude and longitudes are not passed', async () => {
      await getWeatherHandler(request, response, next);
      expect(response.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'latitude and longitudes are required',
        }),
      );
      expect(response.status).toHaveBeenCalledWith(400);
      expect(next).toBeCalled();
    });

    test('should throw 400 if latitude is not passed', async () => {
      request.query = {
        lng: '-75',
      };
      await getWeatherHandler(request, response, next);
      expect(response.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'latitude and longitudes are required',
        }),
      );
      expect(response.status).toHaveBeenCalledWith(400);
      expect(next).toBeCalled();
    });

    test('should throw 400 if longitude is not passed', async () => {
      request.query = {
        lat: '-75',
      };
      await getWeatherHandler(request, response, next);
      expect(response.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'latitude and longitudes are required',
        }),
      );
      expect(response.status).toHaveBeenCalledWith(400);
      expect(next).toBeCalled();
    });

    test('should throw 400 if latitude is not of type number', async () => {
      request.query = {
        lat: '0/1',
        lng: '45',
      };
      await getWeatherHandler(request, response, next);
      expect(response.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'latitude and longitudes are required',
        }),
      );
      expect(response.status).toHaveBeenCalledWith(400);
      expect(next).toBeCalled();
    });

    test('should throw 400 if longitude is not of type number', async () => {
      request.query = {
        lat: '25',
        lng: '0/1',
      };
      await getWeatherHandler(request, response, next);
      expect(response.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'latitude and longitudes are required',
        }),
      );
      expect(response.status).toHaveBeenCalledWith(400);
      expect(next).toBeCalled();
    });

    test('should call getLocationInfo with given latitude and longitudes', async () => {
      request.query = {
        lat: '25',
        lng: '35',
      };
      const locationInfoMock = jest.spyOn(locationService, 'getLocationInfo');
      await getWeatherHandler(request, response, next);
      expect(locationInfoMock).toHaveBeenCalledWith(25, 35);
    });

    test('should call currentConditionsService with the key from the locationService', async () => {
      request.query = {
        lat: '25',
        lng: '35',
      };
      jest.spyOn(locationService, 'getLocationInfo').mockResolvedValue(locationMockInfo);
      const currentConditionsMock = jest.spyOn(currentConditionsService, 'getCurrentConditions');
      await getWeatherHandler(request, response, next);
      expect(currentConditionsMock).toHaveBeenCalledWith(locationMockInfo.Key);
    });

    test('should call processWeatherData with location-info and current conditions-info', async () => {
      request.query = {
        lat: '25',
        lng: '35',
      };
      jest.spyOn(locationService, 'getLocationInfo').mockResolvedValue(locationMockInfo);
      jest.spyOn(currentConditionsService, 'getCurrentConditions').mockResolvedValue(currentConditionsMockInfo);
      const mockWeatherProcessor = jest.spyOn(weatherProcessor, 'processWeather');
      await getWeatherHandler(request, response, next);
      expect(mockWeatherProcessor).toHaveBeenCalledWith(locationMockInfo, currentConditionsMockInfo);
    });

    test('should give 200 response with weather info data', async () => {
      request.query = {
        lat: '25',
        lng: '35',
      };
      jest.spyOn(locationService, 'getLocationInfo').mockResolvedValue(locationMockInfo);
      jest.spyOn(currentConditionsService, 'getCurrentConditions').mockResolvedValue(currentConditionsMockInfo);
      jest.spyOn(weatherProcessor, 'processWeather').mockReturnValue(weatherInfoMock);
      await getWeatherHandler(request, response, next);
      expect(response.status).toHaveBeenCalledWith(200);
      expect(response.json).toBeCalledWith(weatherInfoMock);
    });

    test('should give 503 response when location-info call fails', async () => {
      request.query = {
        lat: '25',
        lng: '35',
      };
      const error = new Error('failed');
      jest.spyOn(locationService, 'getLocationInfo').mockRejectedValue(error);
      await getWeatherHandler(request, response, next);
      expect(response.status).toHaveBeenCalledWith(503);
      expect(response.json).toBeCalledWith(error);
    });

    test('should give 503 response when current-conditions-info call fails', async () => {
      request.query = {
        lat: '25',
        lng: '35',
      };
      const error = new Error('failed');
      jest.spyOn(locationService, 'getLocationInfo').mockResolvedValue(locationMockInfo);
      jest.spyOn(currentConditionsService, 'getCurrentConditions').mockRejectedValue(error);
      await getWeatherHandler(request, response, next);
      expect(response.status).toHaveBeenCalledWith(503);
      expect(response.json).toBeCalledWith(error);
    });
  });
});
