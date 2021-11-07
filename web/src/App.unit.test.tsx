import React from 'react';;
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./pages/homepage/homepage.component',  () => () => "Homepage")
describe("App", () => {  
  test('renders app container', () => {
    render(<App />);
    const appContainer = screen.findByTestId('app-container');
    expect(appContainer).toBeTruthy;
  });
})
