import React from 'react';
import WeatherInfo from '../weather.model';
import './weather-details.styles.scss';

type WeatherProperties = {
  weather: WeatherInfo;
};

const WeatherDetails = ({ weather }: WeatherProperties): JSX.Element => {
  return (
    <div className='weather-details'>
      <div className='temperature weather-item'>
        <span className='title'>🌡 Temperature </span>
        <span className='value'>{`${weather?.Temperature.Imperial.Value} ${weather?.Temperature.Imperial.Unit}`}</span>
      </div>
      <div className='feels-like weather-item'>
        <span className='title'>♨️ Feels like </span>
        <span className='value'>{`${weather?.FeelsLike.Imperial.Value} ${weather?.FeelsLike.Imperial.Unit}`}</span>
      </div>
      <div className='humidity weather-item'>
        <span className='title'>🥵 Humidity </span>
        <span className='value'>{weather?.Humidity}</span>
      </div>
      <div className='uv-index weather-item'>
        <span className='title'>🧴 UV Index </span>
        <span className='value'>{weather?.UvIndexSummary}</span>
      </div>
      <div className='wind weather-item'>
        <span className='title'>💨 Wind </span>
        <span className='value'>{`${weather?.Wind.Speed.Imperial.Value} ${weather?.Wind.Speed.Imperial.Unit} ${weather?.Wind.Direction.English}`}</span>
      </div>
      <div className='feels-like weather-item'>
        <span className='title'>👀 Visibility </span>
        <span className='value'>{`${weather?.Visibility.Imperial.Value} ${weather?.Visibility.Imperial.Unit}`}</span>
      </div>
    </div>
  );
};

export default WeatherDetails;
