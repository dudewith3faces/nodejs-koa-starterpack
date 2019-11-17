import { createServer } from 'https';
import { API, Emit, Events } from './components';
import {
  allMiddleware,
  app,
  env,
  hostname,
  listener,
  PORT,
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
    app.use(allMiddleware);
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
