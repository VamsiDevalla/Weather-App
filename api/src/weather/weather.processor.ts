import CurrentConditions from './current-conditions/current-conditons.model'
import LocationInfo from './location-info/location-info.model'
import WeatherInfo from './weather.model'

export default (locInfo: LocationInfo, curCond: CurrentConditions): WeatherInfo => {
  const rest = {
    City: locInfo.ParentCity?.EnglishName || 'unknown',
    Area: locInfo.LocalizedName || 'unknown',
    Country: locInfo.Country?.EnglishName || 'unknown',
    PrimaryPostalCode: locInfo?.PrimaryPostalCode || 'unknown',
    ClimateSummary: curCond?.WeatherText || 'unknown',
    UvIndexSummary: curCond?.UVIndexText || 'unknown',
    Humidity: curCond.RelativeHumidity || 0,
    Wind: curCond.Wind,
    Temperature: curCond.Temperature,
    FeelsLike: curCond.RealFeelTemperature,
    Visibility: curCond.Visibility
  }
  return rest
}
