import { getCurrentConditions } from './current-conditons.service';
import axios from 'axios';
import { currentConditionsMockInfo } from '../test-data/current-conditions-info.mock';

describe('Current Conditions Info Service', () => {
  describe('getCurrentConditions', () => {
    beforeEach(() => {
      jest.mock('axios');
    });
    test('should call current conditions end point with given city key as path param', async () => {
      const mockAxios = axios as jest.Mocked<typeof axios>;
      const getMock = jest.spyOn(mockAxios, 'get').mockResolvedValue({ data: [currentConditionsMockInfo] });
      await getCurrentConditions('testKey');
      expect(getMock).toBeCalledWith(`http://dataservice.accuweather.com/currentconditions/v1/testKey`, {
        params: {
          apikey: 'FOpu8twQ2G6tP3edRNYSYAy3WKxHi3lc',
          details: true,
        },
      });
    });

    test('should return first element data prop of response from currentConditions end point', async () => {
      const mockAxios = axios as jest.Mocked<typeof axios>;
      (mockAxios.get as jest.Mock).mockResolvedValue({
        data: [currentConditionsMockInfo],
      });
      const currentConditionsResponse = await getCurrentConditions('testKey');
      expect(currentConditionsResponse).toEqual(currentConditionsMockInfo);
    });
  });
});
