import axios, { AxiosResponse } from 'axios';
import WeatherInfo from './weather.model';

export default async (coords: google.maps.LatLngLiteral): Promise<WeatherInfo> => {
  const result: AxiosResponse = await axios.get('/api/weather', {
    params: {
      lat: coords.lat,
      lng: coords.lng,
    },
  });
  return result.data;
};
