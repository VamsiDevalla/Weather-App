import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import CustomButton from './custom-button.component';

describe('Custom Button', () => {
  test('should detect onclick events on the button', () => {
    const clickHandler = jest.fn();
    const { container } = render(
      <CustomButton id='test' type='submit' onClick={clickHandler}>
        Test
      </CustomButton>,
    );
    const button = getByTestId(container, 'button') as HTMLInputElement;
    fireEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  test('should detect onclick events on the button', () => {
    const { container } = render(
      <CustomButton id='test' type='submit' onClick={jest.fn()}>
        Test
      </CustomButton>,
    );
    const button = getByTestId(container, 'button') as HTMLInputElement;
    expect(button.textContent).toEqual('Test');
  });
});
