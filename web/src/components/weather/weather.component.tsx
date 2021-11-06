import React, { useCallback, useEffect, useState } from 'react';
import './weather.styles.scss';
import weatherService from './weather.service';
import WeatherInfo from './weather.model';
type WeatherProperties = {
  coords: google.maps.LatLngLiteral;
};

const Weather = ({ coords }: WeatherProperties): JSX.Element => {
  const [weather, setWeather] = useState<WeatherInfo>();
  const getWeather = useCallback(async () => {
    try {
      setWeather(await weatherService(coords));
    } catch (error) {
      console.error(error);
    }
  }, [coords]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);
  return (
    <div className='weather-widget'>
      <div className='weather-summary'>
        <div className='static-text'>Right now in</div>
        <div className='location'>{`${weather?.Area ?? ''}, ${weather?.City ?? 'unknown city'}`}</div>
        <div className='static-text'>{`it's' ${weather?.ClimateSummary}`}</div>
      </div>
      <div className='weather-group'>
        <div className='temperature weather-item'>
          <span className='title'>Temperature : </span>
          <span className='value'>{`${weather?.Temperature.Imperial.Value} ${weather?.Temperature.Imperial.Unit}`}</span>
        </div>
        <div className='feels-like weather-item'>
          <span className='title'>Feels like :</span>
          <span className='value'>{`${weather?.FeelsLike.Imperial.Value} ${weather?.FeelsLike.Imperial.Unit}`}</span>
        </div>
        <div className='humidity weather-item'>
          <span className='title'>Humidity : </span>
          <span className='value'>{weather?.Humidity}</span>
        </div>
        <div className='uv-index weather-item'>
          <span className='title'>UV Index : </span>
          <span className='value'>{weather?.UvIndexSummary}</span>
        </div>
        <div className='wind weather-item'>
          <span className='title'>Wind :</span>
          <span className='value'>{`${weather?.Wind.Speed.Imperial.Value} ${weather?.Wind.Speed.Imperial.Unit} ${weather?.Wind.Direction.English}`}</span>
        </div>
        <div className='feels-like weather-item'>
          <span className='title'>Visibility :</span>
          <span className='value'>{`${weather?.Visibility.Imperial.Value} ${weather?.Visibility.Imperial.Unit}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
