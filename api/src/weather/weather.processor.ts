import CurrentConditions from './current-conditions/current-conditons.model';
import LocationInfo from './location-info/location-info.model';
import WeatherInfo from './weather.model';

export default (locInfo: LocationInfo, currentCond: CurrentConditions): WeatherInfo => {
  const rest = {
    City: locInfo.ParentCity?.EnglishName || 'unknown',
    Area: locInfo.LocalizedName || 'unknown',
    Country: locInfo.Country?.EnglishName || 'unknown',
    PrimaryPostalCode: locInfo?.PrimaryPostalCode || 'unknown',
    ClimateSummary: currentCond?.WeatherText || 'unknown',
    UvIndexSummary: currentCond?.UVIndexText || 'unknown',
    Humidity: currentCond.RelativeHumidity || 0,
    Wind: currentCond.Wind,
    Temperature: currentCond.Temperature,
    FeelsLike: currentCond.RealFeelTemperature,
    Visibility: currentCond.Visibility,
  };
  return rest;
};
