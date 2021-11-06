import React from 'react';
import WeatherInfo from '../weather.model';
import './weather-summary.styles.scss';

type WeatherProperties = {
  weather: WeatherInfo;
};

const WeatherSummary = ({ weather }: WeatherProperties): JSX.Element => {
  return (
    <div className='weather-summary'>
      <div className='static-text'>Right now in</div>
      <div className='location'>{`${weather?.Area ?? ''}, ${weather?.City ?? 'unknown city'}`}</div>
      <div className='static-text'>{`it's' ${weather?.ClimateSummary}`}</div>
    </div>
  );
};

export default WeatherSummary;
