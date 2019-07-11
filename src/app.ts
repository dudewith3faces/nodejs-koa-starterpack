import * as Koa from "koa";
import { PORT, setError } from "./config";
import Api from "./routes/api";
import Log from "./services/log/logger";

export default class App {
  private readonly app = new Koa();
  private readonly api = new Api().route();
  constructor() {
    this.middleware();
    this.route();
    this.listen();
    this.startApp();
  }

  public startApp() {
    return this.app;
  }

  private middleware() {
    this.app.use(setError);
  }

  private route() {
    this.app.use(this.api);
  }

  private listen() {
    try {
      this.app.listen(PORT);
      Log.successLog.info("Running Server on port " + PORT);
    } catch (e) {
      Log.errorLog.error(e.message);
      throw e;
    }
  }
}
