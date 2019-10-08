import { BaseContext } from 'koa';
import { IResponse } from '../../interface';

export class AuthController {
  /**
   * FIXME: remove test route once other routes are added.
   * test with mocha, and chai
   */
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
