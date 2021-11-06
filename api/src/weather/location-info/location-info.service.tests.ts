import { getLocationInfo } from './location-info.service';
import axios from 'axios';
import { locationMockInfo } from '../test-data/location-info.mock';

describe('Location Info Service', () => {
  describe('getLocationInfo', () => {
    beforeEach(() => {
      jest.mock('axios');
    });
    test('should call location end point with given latitude and longitude as search query', async () => {
      const mockAxios = axios as jest.Mocked<typeof axios>;
      const getMock = jest.spyOn(mockAxios, 'get').mockResolvedValue({
        data: locationMockInfo,
      });
      await getLocationInfo(24, 25);
      expect(getMock).toBeCalledWith('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search', {
        params: {
          apikey: 'FOpu8twQ2G6tP3edRNYSYAy3WKxHi3lc',
          q: '24,25',
        },
      });
    });

    test('should return data prop of response from location end point', async () => {
      const mockAxios = axios as jest.Mocked<typeof axios>;
      (mockAxios.get as jest.Mock).mockResolvedValue({
        data: locationMockInfo,
      });
      const locationResponse = await getLocationInfo(24, 25);
      expect(locationResponse).toEqual(locationMockInfo);
    });
  });
});
