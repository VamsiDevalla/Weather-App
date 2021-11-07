import React from 'react';
import renderer from 'react-test-renderer';
import CustomButton from '../lib/custom-button/custom-button.component';
import CoordinateForm from './coordinate-form.component';

jest.mock('../lib/form-input/form-input.component', () => 'FormInput');
jest.mock('../lib/custom-button/custom-button.component', () => 'CustomButton');

describe('Coordinates Form', () => {
  test('should render properly', () => {
    const coords = { lat: 25, lng: 30 };
    const coordinateForm = renderer.create(
      <CoordinateForm coords={coords} zoom={10} initCoords={coords} setCoordinates={jest.fn()} setZoom={jest.fn()} />,
    );
    expect(coordinateForm.toJSON()).toMatchSnapshot();
  });
  test('should map latitude input to the right handler', () => {
    const coords = { lat: 25, lng: 30 };
    const coordHandler = jest.fn();
    const coordinateForm = renderer.create(
      <CoordinateForm
        coords={coords}
        zoom={10}
        initCoords={coords}
        setCoordinates={coordHandler}
        setZoom={jest.fn()}
      />,
    );
    const latInput = coordinateForm.root.findByProps({ id: 'lat', label: 'Latitude', name: 'latitude' });
    latInput.props.handleChange({ target: { value: 45 } });
    expect(coordHandler).toHaveBeenCalledWith({ lat: 45, lng: 30 });
  });
  test('should map longitude input to the right handler', () => {
    const coords = { lat: 25, lng: 30 };
    const coordHandler = jest.fn();
    const coordinateForm = renderer.create(
      <CoordinateForm
        coords={coords}
        zoom={10}
        initCoords={coords}
        setCoordinates={coordHandler}
        setZoom={jest.fn()}
      />,
    );
    const lngInput = coordinateForm.root.findByProps({ id: 'lng', label: 'Longitude', name: 'longitude' });
    lngInput.props.handleChange({ target: { value: 45 } });
    expect(coordHandler).toHaveBeenCalledWith({ lat: 25, lng: 45 });
  });
  test('should map reset button to the right handler', () => {
    const coords = { lat: 25, lng: 30 };
    const initCoords = { lat: 50, lng: 60 };
    const coordHandler = jest.fn();
    const zoomHandler = jest.fn();
    const coordinateForm = renderer.create(
      <CoordinateForm
        coords={coords}
        zoom={10}
        initCoords={initCoords}
        setCoordinates={coordHandler}
        setZoom={zoomHandler}
      />,
    );
    const resetButton = coordinateForm.root.findByType(CustomButton);
    resetButton.props.onClick();
    expect(coordHandler).toHaveBeenCalledWith({ lat: 50, lng: 60 });
    expect(zoomHandler).toHaveBeenCalledWith(16);
  });
});
