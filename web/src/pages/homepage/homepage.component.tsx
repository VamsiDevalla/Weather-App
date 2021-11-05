import React, { useState } from 'react';
import "./homepage.styles.scss"
import Map from '../../components/map/map.component';
import Weather from '../../components/weather/weather.component';

const Homepage = (): JSX.Element => {
    const [coords, setCoords] = useState<google.maps.LatLngLiteral>({
        lat: 39.8896396,
        lng: -75.1717072
    });

    return (
        <div className='homepage'>
            <code>{coords.lat} {coords.lng}</code>
            <Weather/>
            <Map coords={coords} clickHandler={setCoords}/>
        </div>
    )
}

export default Homepage;