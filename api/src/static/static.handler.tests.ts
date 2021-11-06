import { getMockReq, getMockRes } from '@jest-mock/express';
import { sendHtml } from './static.handler';

describe('Static Handler', () => {
  describe('sendHtml', () => {
    const request = getMockReq();
    const { res: response, mockClear } = getMockRes();

    beforeEach(() => {
      mockClear();
    });
    test('should respond with static data', async () => {
      await sendHtml(request, response);
      expect(response.json).toHaveBeenCalledWith(expect.objectContaining({ data: 'place holder end point for SSR' }));
      expect(response.status).toHaveBeenCalledWith(200);
    });
  });
});
