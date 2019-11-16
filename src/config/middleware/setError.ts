import { BaseContext } from 'koa';
import { BaseError, InternalError } from '../../components';

export const setError = async (ctx: BaseContext, next: () => Promise<any>) => {
  try {
    await next();
  } catch (e) {
    if (e instanceof BaseError) {
      const { status, message } = e;
      ctx.status = status;
      ctx.body = message;
    } else {
      const err = new InternalError();

      ctx.app.emit('err', e);

      ctx.status = err.status;
      ctx.body = err.message;
    }
  }
};
