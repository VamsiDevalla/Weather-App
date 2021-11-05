import axios, { AxiosResponse } from 'axios'
import CurrentConditions from '../current-conditions/current-conditons.model'

export const getCurrentConditions = async (locationKey: string): Promise<CurrentConditions> => {
  const result: AxiosResponse = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
    params: {
      apikey: 'FOpu8twQ2G6tP3edRNYSYAy3WKxHi3lc',
      details: true
    }
  })
  return result.data[0]
}
