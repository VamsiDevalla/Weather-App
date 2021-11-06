import WeatherInfo from 'weather/weather.model';

export const weatherInfoMock: WeatherInfo = {
  City: 'Philadelphia',
  Area: 'Navy Yard',
  Country: 'United States',
  PrimaryPostalCode: '19122',
  ClimateSummary: 'mostly sunny',
  UvIndexSummary: 'low',
  Humidity: 54,
  Wind: {
    Direction: {
      Degrees: 23,
      English: 'N',
      Localized: 'N',
    },
    Speed: {
      Imperial: {
        Value: 24,
        Unit: 'mph',
        UnitType: 67,
      },
      Metric: {
        Value: 40,
        Unit: 'kph',
        UnitType: 68,
      },
    },
  },
  FeelsLike: {
    Imperial: {
      Value: 24,
      Unit: 'f',
      UnitType: 70,
    },
    Metric: {
      Value: 40,
      Unit: 'c',
      UnitType: 69,
    },
  },
  Temperature: {
    Imperial: {
      Value: 78,
      Unit: 'f',
      UnitType: 66,
    },
    Metric: {
      Value: 30,
      Unit: 'c',
      UnitType: 65,
    },
  },
  Visibility: {
    Imperial: {
      Value: 2,
      Unit: 'm',
      UnitType: 63,
    },
    Metric: {
      Value: 4,
      Unit: 'km',
      UnitType: 64,
    },
  },
};

export const incompleteWeatherInfoMock: WeatherInfo = {
  City: 'unknown',
  Area: 'unknown',
  Country: 'unknown',
  PrimaryPostalCode: 'unknown',
  ClimateSummary: 'unknown',
  UvIndexSummary: 'unknown',
  Humidity: 0,
  Wind: {
    Direction: {
      Degrees: 23,
      English: 'N',
      Localized: 'N',
    },
    Speed: {
      Imperial: {
        Value: 24,
        Unit: 'mph',
        UnitType: 67,
      },
      Metric: {
        Value: 40,
        Unit: 'kph',
        UnitType: 68,
      },
    },
  },
  FeelsLike: {
    Imperial: {
      Value: 24,
      Unit: 'f',
      UnitType: 70,
    },
    Metric: {
      Value: 40,
      Unit: 'c',
      UnitType: 69,
    },
  },
  Temperature: {
    Imperial: {
      Value: 78,
      Unit: 'f',
      UnitType: 66,
    },
    Metric: {
      Value: 30,
      Unit: 'c',
      UnitType: 65,
    },
  },
  Visibility: {
    Imperial: {
      Value: 2,
      Unit: 'm',
      UnitType: 63,
    },
    Metric: {
      Value: 4,
      Unit: 'km',
      UnitType: 64,
    },
  },
};
