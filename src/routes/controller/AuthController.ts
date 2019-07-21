import { BaseContext } from 'koa';
import { IResponse } from '../../typings';

export class AuthController {
  public static test(ctx: BaseContext) {
    try {
      const res = {} as IResponse;

      res.msg = 'auth test route work';

      ctx.status = 200;
      ctx.body = res;
    } catch (e) {
      throw e;
    }
  }
}
