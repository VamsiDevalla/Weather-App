import { incompleteLocationMockInfo, locationMockInfo } from './test-data/location-info.mock';
import {
  currentConditionsMockInfo,
  incompleteCurrentConditionsMockInfo,
} from './test-data/current-conditions-info.mock';
import { incompleteWeatherInfoMock, weatherInfoMock } from './test-data/weather-info.mock';
import { processWeather } from './weather.processor';

describe('Weather Processor', () => {
  test('processWeather should process location info and condition and return weather info', () => {
    const weatherInfo = processWeather(locationMockInfo, currentConditionsMockInfo);
    expect(weatherInfo).toMatchObject(weatherInfoMock);
  });

  test('processWeather should process incomplete location info and condition and return weather info', () => {
    const weatherInfo = processWeather(incompleteLocationMockInfo, incompleteCurrentConditionsMockInfo);
    expect(weatherInfo).toMatchObject(incompleteWeatherInfoMock);
  });
});
