import * as Koa from "koa";
import { cors, helmet, morgan, PORT, setError } from "./config";
import Api from "./routes/api";
import { logger } from "./services";

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
    this.app.use(cors);
    this.app.use(helmet);
    this.app.use(morgan);
    this.app.use(setError);
  }

  private end() {
    this.app.on("close", (event) => logger.error(JSON.stringify(event)));
  }

  private route() {
    this.app.use(this.api);
  }

  private listen() {
    try {
      this.app.listen(PORT);
      logger.info("Running Server on port " + PORT);
    } catch (e) {
      logger.error(e.message);
    }
  }
}
