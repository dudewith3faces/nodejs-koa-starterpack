import Router from 'koa-router';
import { AuthController } from './Controller';

export class AuthAPI {
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

  private post() {
    // put post routes here
  }

  private delete() {
    // put delete routes here
  }
}
