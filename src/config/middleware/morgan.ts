import * as Morgan from 'koa-morgan';
import { Emit } from '../../services';

export const morgan = Morgan('combined', {
  stream: {
    write: (message) => Emit.http(message),
  },
});
