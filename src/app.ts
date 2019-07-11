import * as Koa from "koa";
import { morgan, PORT, setError } from "./config";
import Api from "./routes/api";
import Logger from "./services/log/logger";

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
    this.app.use(morgan);
    this.app.use(setError);
  }

  private route() {
    this.app.use(this.api);
  }

  private listen() {
    try {
      this.app.listen(PORT);
      Logger.log.info("Running Server on port " + PORT);
    } catch (e) {
      Logger.log.error(e.message);
    }
  }
}
