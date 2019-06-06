import * as Router from "koa-router";
import AuthApi from "./auth";

export default class Api {
  private readonly index = new Router({ prefix: "/api" });
  private readonly auth = new AuthApi().route();

  constructor() {
    this.route();
    this.api();
  }

  public route() {
    return this.index.routes();
  }

  private api() {
    this.index.use(this.auth);
  }
}
