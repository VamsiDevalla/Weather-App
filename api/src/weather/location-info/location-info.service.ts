import { AxiosResponse } from 'axios';
import axios from '../../axios-default';
import LocationInfo from './location-info.model';

export const getLocationInfo = async (lat: number, lng: number): Promise<LocationInfo> => {
  const result: AxiosResponse = await axios.get(`/locations/v1/cities/geoposition/search`, {
    params: {
      apikey: `${process.env.ACCU_WEATHER_KEY}`,
      q: `${lat},${lng}`,
    },
  });
  return result.data;
};
