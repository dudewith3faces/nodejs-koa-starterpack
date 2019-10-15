import { createServer } from 'https';
import { API, Emit, Events } from './components';
import {
  app,
  cors,
  env,
  helmet,
  hostname,
  httpsRedirect,
  morgan,
  PORT,
  setError,
  sslOpt,
} from './config';

export default class App {
  private readonly api = new API().route();
  constructor() {
    this.build();
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

  private async listen() {
    try {
      if (env === 'dev') app.listen(PORT, hostname);
      else createServer(sslOpt, app.callback()).listen(PORT, hostname);
      Emit.connected();
    } catch (e) {
      Emit.error(e);
    }
  }
}
