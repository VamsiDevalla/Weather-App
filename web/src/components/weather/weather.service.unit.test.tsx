import axios from 'axios';
import { weatherInfoMock } from './test-data/weather-info.mock';
import getWeather from './weather.service';

describe('getLocationInfo', () => {
  beforeEach(() => {
    jest.mock('axios');
  });
  test('should call location end point with given latitude and longitude as search query', async () => {
    const mockAxios = axios as jest.Mocked<typeof axios>;
    const getMock = jest.spyOn(mockAxios, 'get').mockResolvedValue({
      data: weatherInfoMock,
    });
    await getWeather({ lat: 25, lng: 45 });
    expect(getMock).toBeCalledWith('/api/weather', {
      params: {
        lat: 25,
        lng: 45,
      },
    });
  });

  test('should return data prop of response from location end point', async () => {
    const mockAxios = axios as jest.Mocked<typeof axios>;
    (mockAxios.get as jest.Mock).mockResolvedValue({
      data: weatherInfoMock,
    });
    const locationResponse = await getWeather({ lat: 25, lng: 45 });
    expect(locationResponse).toEqual(weatherInfoMock);
  });
});
