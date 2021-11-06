import LocationInfo from 'weather/location-info/location-info.model';

export const locationMockInfo: LocationInfo = {
  Version: 1,
  Key: '1234',
  Type: 'city',
  Rank: 123,
  LocalizedName: 'Navy Yard',
  EnglishName: 'Navy Yard',
  PrimaryPostalCode: '19122',
  Region: {
    ID: '12_323',
    LocalizedName: 'North America',
    EnglishName: 'North America',
  },
  Country: {
    ID: '49_850',
    LocalizedName: 'United States',
    EnglishName: 'United States',
  },
  AdministrativeArea: {
    ID: 'sdjfl',
    LocalizedName: 'dksjf',
    EnglishName: 'ksdjf',
    Level: 322,
    LocalizedType: 'sjdlk',
    EnglishType: 'dsjfl',
    CountryID: 'US',
  },
  TimeZone: {
    Code: 'EDT',
    Name: 'EDT',
    GmtOffset: 5.5,
    IsDaylightSaving: true,
    NextOffsetChange: 'dunskld',
  },
  GeoPosition: {
    Latitude: 35,
    Longitude: -75,
    Elevation: {
      Metric: {
        Value: 56,
        Unit: 'm',
        UnitType: 23,
      },
      Imperial: {
        Value: 156,
        Unit: 'f',
        UnitType: 22,
      },
    },
  },
  IsAlias: false,
  ParentCity: {
    Key: '3234',
    LocalizedName: 'Philadelphia',
    EnglishName: 'Philadelphia',
  },
};

export const incompleteLocationMockInfo: LocationInfo = {
  Version: 1,
  Key: '1234',
  Type: 'city',
  Rank: 123,
  EnglishName: 'Navy Yard',
  Region: {
    ID: '12_323',
    LocalizedName: 'North America',
    EnglishName: 'North America',
  },
  AdministrativeArea: {
    ID: 'sdjfl',
    LocalizedName: 'dksjf',
    EnglishName: 'ksdjf',
    Level: 322,
    LocalizedType: 'sjdlk',
    EnglishType: 'dsjfl',
    CountryID: 'US',
  },
  TimeZone: {
    Code: 'EDT',
    Name: 'EDT',
    GmtOffset: 5.5,
    IsDaylightSaving: true,
    NextOffsetChange: 'dunskld',
  },
  GeoPosition: {
    Latitude: 35,
    Longitude: -75,
    Elevation: {
      Metric: {
        Value: 56,
        Unit: 'm',
        UnitType: 23,
      },
      Imperial: {
        Value: 156,
        Unit: 'f',
        UnitType: 22,
      },
    },
  },
  IsAlias: false,
};
