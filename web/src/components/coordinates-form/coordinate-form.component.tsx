import React from "react";
import FormInput from "../form-input/form-input.component";

type CoordProps = {
  coords: google.maps.LatLngLiteral;
  setCoordinates: React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral>>;
}

const CoordinateForm = ({coords, setCoordinates}: CoordProps):JSX.Element => {
    return (
        <div className="coordinate-form-container">
            <h2 className='title'>Coordinates </h2>
            <form>
          <FormInput
            id='lat'
            handleChange={(e) => setCoordinates({...coords, lat: Number(e.target.value)})}
            label='Latitude'
            name='lat'
            type='number'
            value={coords.lat}
            required
          />
          <FormInput
            id='lng'
            label='Longitude'
            name='lng'
            type='number'
            value={coords.lng}
            required
            handleChange={(e) => setCoordinates({...coords, lng: Number(e.target.value)})}
          />
        </form>
        </div>
    )
}

export default CoordinateForm;