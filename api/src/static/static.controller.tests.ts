import { sendHtml } from './static.handler';

describe('Static Controller', () => {
  const getSpy = jest.fn();

  jest.doMock('express', () => {
    return {
      Router() {
        return {
          get: getSpy,
        };
      },
    };
  });

  test('should set path for index.html', async () => {
    await import('./static.controller');
    expect(getSpy).toHaveBeenCalledWith('/', sendHtml);
  });
});
