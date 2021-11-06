import React from 'react';
import CustomButton from '../lib/custom-button/custom-button.component';
import FormInput from '../lib/form-input/form-input.component';
import './coordinate-form.styles.scss';
type CoordProperties = {
  coords: google.maps.LatLngLiteral;
  setCoordinates: React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral>>;
};

const CoordinateForm = ({ coords, setCoordinates }: CoordProperties): JSX.Element => {
  return (
    <div className='coordinate-form-container'>
      <h2 className='title'>Coordinates </h2>
      <form>
        <FormInput
          id='lat'
          handleChange={event_ => setCoordinates({ ...coords, lat: Number(event_.target.value) })}
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
          handleChange={event_ => setCoordinates({ ...coords, lng: Number(event_.target.value) })}
        />
      </form>
      <CustomButton
        onClick={() =>
          setCoordinates({
            lat: 39.887_710_232_733_696,
            lng: -75.175_924_301_147_46,
          })
        }
      >
        RESET
      </CustomButton>
    </div>
  );
};

export default CoordinateForm;
