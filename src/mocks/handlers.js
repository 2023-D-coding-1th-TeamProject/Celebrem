import userData from './userData.json';

import { rest, setupWorker } from 'msw';
const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    const errorCode = req.url.searchParams.get('error_code');
    if (errorCode) {
      return res(ctx.status(errorCode));
    }
    return res(
      ctx.status(200), // rest api status code
      ctx.delay(1000), // api delay time
      ctx.json({
        data: userData,
      }),
    );
  }),
];
export default handlers;
// setting msw
export const worker = setupWorker(...handlers);
