export interface MetricOrImperial {
  Value: number;
  Unit: string;
  UnitType: number;
}
export interface MetricSystems {
  Metric: MetricOrImperial;
  Imperial: MetricOrImperial;
}

export interface Direction {
  Degrees: number;
  Localized: string;
  English: string;
}
export interface Wind {
  Direction: Direction;
  Speed: MetricSystems;
}

export interface WindGust {
  Speed: MetricSystems;
}
export interface PressureTendency {
  LocalizedText: string;
  Code: string;
}

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
