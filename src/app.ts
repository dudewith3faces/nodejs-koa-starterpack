import { createServer } from 'https';
import { API, Emit, Events } from './components';
import {
  app,
  cors,
  env,
  helmet,
  hostname,
  httpsRedirect,
  listener,
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

  private build(): void {
    this.event();
    this.middleware();
    this.route();
    this.listen();
  }

  private middleware(): void {
    app.use(httpsRedirect);
    app.use(cors);
    app.use(helmet);
    app.use(morgan);
    app.use(setError);
  }

  private route(): void {
    app.use(this.api);
  }

  private event(): void {
    (() => new Events())();
  }

  private listen(): void {
    try {
      if (env === 'dev') app.listen(PORT, hostname, listener);
      else
        createServer(sslOpt, app.callback()).listen(PORT, hostname, listener);
    } catch (e) {
      Emit.error(e);
    }
  }
}
