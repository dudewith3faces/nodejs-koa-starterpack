import { app } from '../../../config';

export class Emit {
  public static connected() {
    app.emit('connected');
  }

  public static error(e: any) {
    app.emit('error', e);
  }

  public static http(msg: string) {
    app.emit('http', msg);
  }

  public static log(msg: any) {
    app.emit('log', msg);
  }
}
