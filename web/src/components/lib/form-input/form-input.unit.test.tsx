import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import FormInput from './form-input.component';

describe('Form Input', () => {
  test('should render form group container', () => {
    const { container } = render(<FormInput id='test' label='snapshot test label' handleChange={jest.fn()} />);
    expect(getByTestId(container, 'inputGroupContainer')).not.toBeNull();
  });
  test('should set initial value the input', () => {
    const { container } = render(
      <FormInput
        id='test'
        value={10}
        name='latitude'
        type='number'
        label='snapshot test label'
        handleChange={jest.fn()}
      />,
    );
    const input = getByTestId(container, 'input') as HTMLInputElement;
    expect(input.value).toEqual('10');
  });

  test('should set initial value the input', () => {
    const { container } = render(
      <FormInput
        id='test'
        value={10}
        name='latitude'
        type='number'
        label='snapshot test label'
        handleChange={jest.fn()}
      />,
    );
    const input = getByTestId(container, 'inputLabel');
    expect(input.textContent).toEqual('snapshot test label');
  });

  test('should map change event to input', () => {
    const changeHandler = jest.fn();
    const { container } = render(
      <FormInput
        id='test'
        value={10}
        name='latitude'
        type='number'
        label='snapshot test label'
        handleChange={changeHandler}
      />,
    );
    const input = getByTestId(container, 'input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '12' } });
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });
});
