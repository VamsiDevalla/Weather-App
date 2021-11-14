import React from 'react';
import WeatherInfo from '../weather.model';
import './weather-details.styles.scss';

type WeatherProperties = {
  weather: WeatherInfo;
};

const WeatherDetails = ({ weather }: WeatherProperties): JSX.Element => {
  return (
    <div role='group' aria-live='polite' className='weather-details'>
      <div className='temperature weather-item'>
        <span aria-label='temperature' className='title'>
          <span aria-hidden='true'>🌡 </span>Temperature{' '}
        </span>
        <span className='value'>
          {weather?.Temperature.Imperial.Value}{' '}
          <span aria-label='Fahrenheit'>{weather?.Temperature.Imperial.Unit}</span>
        </span>
      </div>
      <div className='feels-like weather-item'>
        <span className='title'>
          <span aria-hidden='true'>♨️ </span>Feels like{' '}
        </span>
        <span className='value'>
          {weather?.FeelsLike.Imperial.Value} <span aria-label='Fahrenheit'>{weather?.FeelsLike.Imperial.Unit}</span>
        </span>
      </div>
      <div className='humidity weather-item'>
        <span className='title'>
          <span aria-hidden='true'>🥵</span> Humidity{' '}
        </span>
        <span className='value'>{weather?.Humidity}</span>
      </div>
      <div className='uv-index weather-item'>
        <span className='title'>
          <span aria-hidden='true'>🧴 </span>UV Index{' '}
        </span>
        <span className='value'>{weather?.UvIndexSummary}</span>
      </div>
      <div className='wind weather-item'>
        <span className='title'>
          <span aria-hidden='true'>💨 </span>Wind{' '}
        </span>
        <span className='value'>
          {weather?.Wind.Speed.Imperial.Value}{' '}
          <span aria-label='miles per hour'>{weather?.Wind.Speed.Imperial.Unit}</span>{' '}
          <span aria-label={`in the direction of ${weather?.Wind.Direction.English}`}>
            {weather?.Wind.Direction.English}
          </span>
        </span>
      </div>
      <div className='visibility weather-item'>
        <span className='title'>
          <span aria-hidden='true'>👀</span> Visibility{' '}
        </span>
        <span className='value'>
          {weather?.Visibility.Imperial.Value} <span aria-label='miles'>{weather?.Visibility.Imperial.Unit}</span>
        </span>
      </div>
    </div>
  );
};

export default WeatherDetails;
