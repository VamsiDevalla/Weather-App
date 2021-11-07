import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


jest.mock('./pages/homepage/homepage.component',  () => "Homepage")
describe("App", () => { 
  afterAll(() => jest.clearAllMocks()); 
  test("should render correctly", () => {
    const app = renderer.create(<App/>).toJSON();
    expect(app).toMatchSnapshot();
  })
})
