import React from 'react';
import { render, screen, getByRole } from '@testing-library/react';
import CoordinateForm from './coordinate-form.component';

// eslint-disable-next-line unicorn/consistent-function-scoping
jest.mock('../lib/form-input/form-input.component', () => () => 'FormInput');
// eslint-disable-next-line unicorn/consistent-function-scoping
jest.mock('../lib/custom-button/custom-button.component', () => () => 'CustomButton');

describe('Coordinates Form', () => {
  test('should render coordinate form container element ', () => {
    const coords = { lat: 25, lng: 30 };
    render(<CoordinateForm coords={coords} zoom={10} initCoords={coords} setCoordinates={jest.fn} setZoom={jest.fn} />);
    expect(screen.queryByTestId('coordinatesFormContainer')).not.toBeNull();
  });
  test('should render title of the coordinate form ', () => {
    const coords = { lat: 25, lng: 30 };
    const { container } = render(
      <CoordinateForm coords={coords} zoom={10} initCoords={coords} setCoordinates={jest.fn} setZoom={jest.fn} />,
    );
    const titleElement = getByRole(container, 'heading', { exact: true, name: 'coordinates form' });
    expect(titleElement.textContent).toEqual('Coordinates');
  });

  test('should render coordinate form ', () => {
    const coords = { lat: 25, lng: 30 };
    render(<CoordinateForm coords={coords} zoom={10} initCoords={coords} setCoordinates={jest.fn} setZoom={jest.fn} />);
    expect(screen.queryByTestId('coordinatesForm')).not.toBeNull();
  });
});
