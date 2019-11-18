import { BaseContext } from 'koa';
import { BaseError, Emit, InternalError } from '../../components';

export const setError = async (ctx: BaseContext, next: () => Promise<any>) => {
  try {
    await next();
  } catch (e) {
    if (e instanceof BaseError) {
      const { status, message } = e;
      ctx.status = status;
      ctx.body = message;
    } else {
      Emit.error(e);

      const { status, message } = new InternalError();

      ctx.status = status;
      ctx.body = message;
    }
  }
};
