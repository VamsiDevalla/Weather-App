import React, { useCallback, useEffect, useState } from 'react';
import './weather.styles.scss';
import weatherService from './weather.service';
import WeatherInfo from './weather.model';
import WeatherDetails from './weather-details/weather-details.component';
import WeatherSummary from './weather-summary/weather-summary.component';
import Spinner from '../lib/spinner/spinner.component';
type WeatherProperties = {
  coords: google.maps.LatLngLiteral;
};

const Weather = ({ coords }: WeatherProperties): JSX.Element => {
  const [weather, setWeather] = useState<WeatherInfo>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const getWeather = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      setWeather(await weatherService(coords));
    } catch {
      setError(true);
    }
    setLoading(false);
  }, [coords]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return (
    <div role='feed' className='weather-widget'>
      {weather && !loading && !error ? (
        <>
          <WeatherSummary weather={weather} />
          <WeatherDetails weather={weather} />
        </>
      ) : (
        ''
      )}
      {loading ? (
        <>
          <Spinner />
          <div aria-live='polite' className='loading-info-message'>
            Hang on, getting Weather data for the location<span aria-hidden='true'>...🌪🏃‍♂️💨</span>
          </div>
        </>
      ) : (
        ''
      )}
      {error ? (
        <div aria-live='polite' className='error-info-message'>
          Sorry!! select different location or try again <span aria-hidden='true'>😔</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Weather;
