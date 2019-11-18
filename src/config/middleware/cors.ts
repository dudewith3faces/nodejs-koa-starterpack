import Cors from 'koa2-cors';
import { origin } from '../keys/server';

const options: Cors.Options = {
  allowHeaders: ['Content-Type', 'Accept', 'Authorization'],
  allowMethods: ['GET', 'PUT', 'POST', 'OPTIONS'],
  origin,
};

export const cors = Cors(options);
