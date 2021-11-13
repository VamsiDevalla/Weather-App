import { AxiosResponse } from 'axios';
import axios from '../../axios-default';
import CurrentConditions from '../current-conditions/current-conditons.model';

export const getCurrentConditions = async (locationKey: string): Promise<CurrentConditions> => {
  const result: AxiosResponse = await axios.get(`/currentconditions/v1/${locationKey}`, {
    params: {
      apikey: `${process.env.ACCU_WEATHER_KEY}`,
      details: true,
    },
  });
  return result.data[0];
};
