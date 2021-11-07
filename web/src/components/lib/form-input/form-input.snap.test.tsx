import React from 'react';
import { create } from 'react-test-renderer';
import FormInput from './form-input.component';

describe('Form Input', () => {
  test('should render properly', () => {
    expect(
      create(<FormInput id='test' label='snapshot test label' handleChange={jest.fn()} />).toJSON(),
    ).toMatchSnapshot();
  });
  test('should map change handle properly', () => {
    const changeHandler = jest.fn();
    const input = create(<FormInput id='test' label='snapshot test label' handleChange={changeHandler} />);
    input.root.findByType('input').props.onChange(45);
    expect(changeHandler).toHaveBeenCalledWith(45);
  });
});
