import { BaseContext } from "koa";
import { IResponse } from "../../types";

export class AuthController {
  public static test(ctx: BaseContext) {
    const res = {} as IResponse;

    res.msg = "auth test route work";
    ctx.status = 200;
    ctx.body = res;
  }
}
