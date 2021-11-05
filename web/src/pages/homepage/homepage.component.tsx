import React from 'react';
import "./homepage.styles.scss"
import Map from '../../components/map/map.component';
import Weather from '../../components/weather/weather.component';

const Homepage = (): JSX.Element => {
    return (
        <div className='homepage'>
            <Map/>
            <Weather/>
        </div>
    )
}

export default Homepage;