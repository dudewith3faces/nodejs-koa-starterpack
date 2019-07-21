import {
  app,
  cors,
  helmet,
  hostname,
  httpsRedirect,
  morgan,
  PORT,
  setError,
} from './config';
import Api from './routes/api';
import { Emit, Events } from './services';

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
  }

  private middleware() {
    app.use(httpsRedirect);
    app.use(cors);
    app.use(helmet);
    app.use(morgan);
    app.use(setError);
  }

  private route() {
    app.use(this.api);
  }

  private event() {
    (() => new Events())();
  }

  private listen() {
    try {
      app.listen(PORT, hostname);
      Emit.connected();
    } catch (e) {
      Emit.error(e);
    }
  }
}
