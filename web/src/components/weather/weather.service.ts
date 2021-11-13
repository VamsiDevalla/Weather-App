import axios, { AxiosResponse } from 'axios';
import WeatherInfo from './weather.model';
const basePath = process.env.REACT_APP_API_BASE_URL;
export default async (coords: google.maps.LatLngLiteral): Promise<WeatherInfo> => {
  const result: AxiosResponse = await axios.get(`${basePath}/weather`, {
    params: {
      lat: coords.lat,
      lng: coords.lng,
    },
  });
  return result.data;
};
