import * as Koa from "koa";
import { PORT, setError } from "./config";
import Api from "./routes/api";

export default class App {
  private readonly app = new Koa();
  private readonly api = new Api().route();
  constructor() {
    this.middlerware();
    this.route();
    this.listen();
    this.startApp();
  }

  public startApp() {
    return this.app;
  }

  private middlerware() {
    this.app.use(setError);
  }

  private route() {
    this.app.use(this.api);
  }

  private listen() {
    try {
      this.app.listen(PORT);
    } catch (e) {
      throw e;
    }
  }
}
