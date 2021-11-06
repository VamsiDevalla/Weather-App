describe('App', () => {
  const useSpy = jest.fn();
  const routesSpy = jest.fn();
  const jsonSpy = jest.fn();
  const mockExpress = () => ({
    use: useSpy,
  });
  mockExpress.json = jsonSpy;

  jest.doMock('express', () => mockExpress);
  jest.doMock('./routes', () => routesSpy);

  test('should call setup dependencies and routes', async () => {
    await import('./app');
    expect(useSpy).toHaveBeenCalledTimes(2);
    expect(routesSpy).toBeCalledTimes(1);
    expect(jsonSpy).toBeCalledTimes(1);
  });
});
