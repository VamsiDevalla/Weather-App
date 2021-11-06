describe('App', () => {
  const listenSpy = jest.fn();

  jest.doMock('./app.ts', () => {
    return {
      app: {
        listen: listenSpy,
      },
    };
  });

  test('should initialize an express server', async () => {
    await import('./index');
    expect(listenSpy).toHaveBeenCalled();
  });
});
