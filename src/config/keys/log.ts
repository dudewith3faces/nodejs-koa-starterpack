import { join } from 'path';

const dir = (name?: string) =>
  join(__dirname, '..', '..', '..', 'Logs', name.toLowerCase());
const file = (name?: string) => `%DATE%-${name.toLowerCase()}.log`;

const log = {
  debug: {
    color: process.env.debugColor || 'blue',
    dirname: '',
    filename: '',
    level: process.env.debugLevel
      ? process.env.debugLevel.toUpperCase()
      : 'DEBUG',
  },
  error: {
    color: process.env.errorColor || 'red',
    dirname: '',
    filename: '',
    level: process.env.errorLevel
      ? process.env.errorLevel.toUpperCase()
      : 'ERROR',
  },
  http: {
    color: process.env.httpColor || 'magenta',
    dirname: '',
    filename: '',
    level: process.env.httpLevel ? process.env.httpLevel.toUpperCase() : 'HTTP',
  },
  server: {
    color: process.env.serverColor || 'green',
    dirname: '',
    filename: '',
    level: process.env.serverLevel
      ? process.env.serverLevel.toUpperCase()
      : 'SERVER',
  },
};

log.debug.filename = file(log.debug.level);
log.error.filename = file(log.error.level);
log.http.filename = file(log.http.level);
log.server.filename = file(log.server.level);
log.debug.dirname = dir(log.debug.level);
log.error.dirname = dir(log.error.level);
log.http.dirname = dir(log.http.level);
log.server.dirname = dir(log.server.level);

export { log };
