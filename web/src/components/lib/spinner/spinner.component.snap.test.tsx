import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './spinner.component';

describe('Spinner', () => {
  test('should render properly', () => {
    const spinner = renderer.create(<Spinner />).toJSON();
    expect(spinner).toMatchSnapshot();
  });
});
