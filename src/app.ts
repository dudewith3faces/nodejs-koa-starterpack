import { app, cors, helmet, morgan, PORT, setError } from "./config";
import Api from "./routes/api";
import { CustomEvents } from "./services";

export default class App {
  private readonly api = new Api().route();
  constructor() {
    this.build();
  }

  public startApp() {
    return app;
  }

  private build() {
    this.event();
    this.middleware();
    this.route();
    this.listen();
    this.startApp();
  }

  private middleware() {
    app.use(cors);
    app.use(helmet);
    app.use(morgan);
    app.use(setError);
  }

  private route() {
    app.use(this.api);
  }

  private event() {
    (() => new CustomEvents())();
  }

  private listen() {
    try {
      app.listen(PORT);
      app.emit("connected");
    } catch (e) {
      app.emit("err", e);
    }
  }
}
