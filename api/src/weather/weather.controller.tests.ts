import { getWeatherHandler } from './weather.handler';

describe('Weather Controller', () => {
  const getSpy = jest.fn();

  jest.doMock('express', () => {
    return {
      Router() {
        return {
          get: getSpy,
        };
      },
    };
  });
  test('should set path for getWeather', async () => {
    await import('./weather.controller');
    expect(getSpy).toHaveBeenCalledWith('/', getWeatherHandler);
  });
});
