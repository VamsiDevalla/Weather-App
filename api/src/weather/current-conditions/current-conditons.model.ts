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
export interface PrecipitationSummary {
  Precipitation: MetricSystems;
  PastHour: MetricSystems;
  Past3Hours: MetricSystems;
  Past6Hours: MetricSystems;
  Past9Hours: MetricSystems;
  Past12Hours: MetricSystems;
  Past18Hours: MetricSystems;
  Past24Hours: MetricSystems;
}

export interface MinMax {
  Minimum: MetricSystems;
  Maximum: MetricSystems;
}

export interface TemperatureSummary {
  Past6HourRange: MinMax;
  Past12HourRange: MinMax;
  Past24HourRange: MinMax;
}

export default interface CurrentConditions {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText?: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType?: null;
  IsDayTime: boolean;
  Temperature: MetricSystems;
  RealFeelTemperature: MetricSystems;
  RealFeelTemperatureShade: MetricSystems;
  RelativeHumidity?: number;
  IndoorRelativeHumidity: number;
  DewPoint: MetricSystems;
  Wind: Wind;
  WindGust: WindGust;
  UVIndex: number;
  UVIndexText?: string;
  Visibility: MetricSystems;
  ObstructionsToVisibility: string;
  CloudCover: number;
  Ceiling: MetricSystems;
  Pressure: MetricSystems;
  PressureTendency: PressureTendency;
  Past24HourTemperatureDeparture: MetricSystems;
  ApparentTemperature: MetricSystems;
  WindChillTemperature: MetricSystems;
  WetBulbTemperature: MetricSystems;
  Precip1hr: MetricSystems;
  PrecipitationSummary: PrecipitationSummary;
  TemperatureSummary: TemperatureSummary;
  MobileLink: string;
  Link: string;
}
