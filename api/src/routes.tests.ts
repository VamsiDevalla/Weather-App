import routes from './routes';
import express from 'express';
describe('Router', () => {
  test('routes should set all routes to the router', async () => {
    const app = express();
    const newUse = jest.fn();
    app.use = newUse;
    routes(app);
    expect(newUse).toHaveBeenCalledTimes(1);
  });
});
