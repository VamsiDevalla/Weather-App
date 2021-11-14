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
    <div data-testid='coordinatesFormContainer' role='' className='coordinate-form-container'>
      <h2 data-testid='coordinatesFormTitle' role='heading' id='coordFormTitle' aria-hidden='true' className='title'>
        Coordinates
      </h2>
      <form data-testid='coordinatesForm' aria-labelledby='coordFormTitle'>
        <FormInput
          id='lat'
          handleChange={event_ => setCoordinates({ ...coords, lat: Number(event_.target.value) })}
          label='Latitude'
          name='latitude'
          type='number'
          value={coords.lat.toFixed(2)}
          required
          aria-required='true'
        />
        <FormInput
          id='lng'
          label='Longitude'
          name='longitude'
          type='number'
          value={coords.lng.toFixed(2)}
          required
          aria-required='true'
          handleChange={event_ => setCoordinates({ ...coords, lng: Number(event_.target.value) })}
        />
        <FormInput
          id='zoom'
          label='Zoom'
          name='zoom'
          type='number'
          value={zoom}
          required
          aria-required='true'
          handleChange={event_ => setZoom(Number(event_.target.value))}
        />
        <CustomButton
          onClick={event => {
            event.preventDefault();
            setCoordinates(initCoords);
            setZoom(16);
          }}
          type='button'
          aria-label='reset coordinates form'
        >
          RESET
        </CustomButton>
      </form>
    </div>
  );
};

export default CoordinateForm;
