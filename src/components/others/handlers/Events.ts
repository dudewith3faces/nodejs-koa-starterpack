import { app, PORT } from '../../../config';
import { logger } from './logger';

export class Events {
  constructor() {
    this.build();
  }

  private build() {
    this.log();
  }

  private log() {
    app.on('connected', () => logger.info(`server running on ${PORT}`));
    app.on('http', (message: string) => logger.http(message));
    app.on('error', (error) => logger.error(error));
    app.on('log', (msg: string) => logger.info(msg));
    process.on('unhandledRejection', (error) => logger.error(error));
  }
}
