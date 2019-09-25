import { env } from '../../config';
import { HTTPError } from '../../models';
import { Emit } from '../event/Emit';

export class ErrorHandler {
  public static server(e: Error) {
    if (e instanceof HTTPError) throw e;

    switch (e.name) {
      case 'ENOENT': {
        if (env !== 'dev')
          Emit.error('Put your ssl certificate in `dist/config/ssl`');
        break;
      }

      default: {
        break;
      }
    }
  }
}
