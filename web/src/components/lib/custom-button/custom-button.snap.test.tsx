import React from 'react';
import { create } from 'react-test-renderer';
import CustomButton from './custom-button.component';

describe('Custom Button', () => {
  test('should render properly for button type submit', () => {
    expect(
      create(
        <CustomButton id='test' type='submit' onClick={jest.fn()}>
          Test
        </CustomButton>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  test('should render properly for button type button', () => {
    expect(
      create(
        <CustomButton id='test' type='button' onClick={jest.fn()}>
          Test
        </CustomButton>,
      ).toJSON(),
    ).toMatchSnapshot();
  });
  test('should render properly for button type button', () => {
    const clickHandler = jest.fn();
    const button = create(
      <CustomButton id='test' type='button' onClick={clickHandler}>
        Test
      </CustomButton>,
    );
    button.root.findByType('button').props.onClick();
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
