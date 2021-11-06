import React, { Dispatch, SetStateAction } from 'react';
import CustomButton from '../lib/custom-button/custom-button.component';
import FormInput from '../lib/form-input/form-input.component';
import './coordinate-form.styles.scss';
type CoordProperties = {
  coords: google.maps.LatLngLiteral;
  initCoords: google.maps.LatLngLiteral;
  zoom: number;
  setZoom: Dispatch<SetStateAction<number>>;
  setCoordinates: Dispatch<SetStateAction<google.maps.LatLngLiteral>>;
};

const CoordinateForm = ({ coords, zoom, initCoords, setCoordinates, setZoom }: CoordProperties): JSX.Element => {
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
        <FormInput
          id='zoom'
          label='Zoom'
          name='zoom'
          type='number'
          value={zoom}
          required
          handleChange={event_ => setZoom(Number(event_.target.value))}
        />
      </form>
      <CustomButton
        onClick={() => {
          setCoordinates(initCoords);
          setZoom(15);
        }}
      >
        RESET
      </CustomButton>
    </div>
  );
};

export default CoordinateForm;
