import { MetricSystems, Wind } from './current-conditions/current-conditons.model';

export default interface WeatherInfo {
  City: string;
  Area: string;
  Country: string;
  PrimaryPostalCode: string;
  ClimateSummary: string;
  UvIndexSummary: string;
  Humidity: number;
  Wind: Wind;
  FeelsLike: MetricSystems;
  Temperature: MetricSystems;
  Visibility: MetricSystems;
}
