import compose from 'koa-compose';
import { cors } from './cors';
import { helmet } from './helmet';
import { httpsRedirect } from './httpsRedirect';
import { morgan } from './morgan';
import { setError } from './setError';

export { app } from './koa';
export { listener } from './httpsRedirect';

export const allMiddleware = compose([
  httpsRedirect,
  cors,
  helmet,
  morgan,
  setError,
]);
