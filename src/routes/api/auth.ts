import * as Router from 'koa-router';
import { AuthController } from '../controller';

export default class AuthApi {
  private readonly router = new Router({ prefix: '/auth' });
  constructor() {
    this.get();
    this.post();
    this.delete();
    this.route();
  }

  public route() {
    return this.router.routes();
  }

  private get() {
    /*
     * @route  api/auth/test
     * @desc   Test auth route
     * */
    this.router.get('/test', AuthController.test);
  }

  private post() {}

  private delete() {}
}
