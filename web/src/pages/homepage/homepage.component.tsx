import React, { useState } from 'react'
import './homepage.styles.scss'
import Map from '../../components/map/map.component'
import Weather from '../../components/weather/weather.component'
import CoordinateForm from '../../components/coordinates-form/coordinate-form.component'

const Homepage = (): JSX.Element => {
  const [coords, setCoords] = useState<google.maps.LatLngLiteral>({
    lat: 39.887710232733696,
    lng: -75.17592430114746
  })

  return (
        <div className='homepage'>
            <CoordinateForm coords={coords} setCoordinates={setCoords}/>
            <Weather/>
            <Map coords={coords} clickHandler={setCoords}/>
        </div>
  )
}

export default Homepage
