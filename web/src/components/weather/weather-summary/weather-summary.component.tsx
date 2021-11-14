import React from 'react';
import WeatherInfo from '../weather.model';
import './weather-summary.styles.scss';

type WeatherProperties = {
  weather: WeatherInfo;
};

const WeatherSummary = ({ weather }: WeatherProperties): JSX.Element => {
  return (
    <div role='contentinfo' aria-live='polite' className='weather-summary'>
      <span className='static-text'>Right now in</span>
      <span className='location'>{`${weather?.Area ?? ''}, ${weather?.City ?? 'unknown city'}`}</span>
      <span className='static-text'>{`it's ${weather?.ClimateSummary}`}</span>
    </div>
  );
};

export default WeatherSummary;
