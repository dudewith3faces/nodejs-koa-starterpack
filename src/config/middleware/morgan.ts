import Morgan from 'koa-morgan';
import { Emit } from '../../components';

export const morgan = Morgan('combined', {
  stream: {
    write: (message) => Emit.http(message),
  },
});
