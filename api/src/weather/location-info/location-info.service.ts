import axios, { AxiosResponse } from 'axios'
import LocationInfo from './location-info.model'

export const getLocationInfo = async (lat: number, lng: number): Promise<LocationInfo> => {
  const result: AxiosResponse = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search', {
    params: {
      apikey: 'FOpu8twQ2G6tP3edRNYSYAy3WKxHi3lc',
      q: `${lat},${lng}`
    }
  })
  return result.data
}
