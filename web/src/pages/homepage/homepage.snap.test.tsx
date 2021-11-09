import React from 'react';
import renderer from 'react-test-renderer';
import CoordinateForm from '../../components/coordinates-form/coordinate-form.component';
import Map from '../../components/map/map.component';
import Homepage from './homepage.component';

jest.mock('../../components/map/map.component', () => 'Map');
jest.mock('../../components/weather/weather.component', () => 'Weather');
jest.mock('../../components/coordinates-form/coordinate-form.component', () => 'CoordinateForm');

// const mockNavigatorGeolocation = () => {
//   const clearWatchMock = jest.fn();
//   const getCurrentPositionMock = jest.fn().mockImplementation(success =>
//     Promise.resolve(
//       success({
//         coords: {
//           latitude: 51.1,
//           longitude: 45.3,
//         },
//       }),
//     ),
//   );
//   const watchPositionMock = jest.fn();

//   const geolocation = {
//     clearWatch: clearWatchMock,
//     getCurrentPosition: getCurrentPositionMock,
//     watchPosition: watchPositionMock,
//   };

//   Object.defineProperty(global.navigator, 'geolocation', {
//     value: geolocation,
//   });

//   // Object.defineProperty(global.navigator, 'permissions', {
//   //   query: jest.fn().mockImplementation(() => Promise.resolve({ state: 'granted' })),
//   // });

//   return { clearWatchMock, getCurrentPositionMock, watchPositionMock };
// };
describe('Homepage', () => {
  afterAll(() => jest.clearAllMocks());
  test('should render correctly', () => {
    const homepage = renderer.create(<Homepage />);
    expect(homepage.toJSON()).toMatchSnapshot();
    renderer.act(() => homepage.root.findByType(CoordinateForm).props.setCoordinates({ lat: 10, lng: 15 }));
    expect(homepage).toMatchSnapshot();
    renderer.act(() => homepage.root.findByType(CoordinateForm).props.setZoom(10));
    expect(homepage).toMatchSnapshot();
    renderer.act(() => homepage.root.findByType(Map).props.coordsHandler(10));
    expect(homepage).toMatchSnapshot();
    renderer.act(() => homepage.root.findByType(Map).props.zoomHandler(10));
    expect(homepage).toMatchSnapshot();
  });
  // test('should render correctly on navigation permission', () => {
  //   mockNavigatorGeolocation();
  //   const homepage = renderer.create(<Homepage />);
  //   expect(homepage.toJSON()).toMatchSnapshot();
  // });
});
