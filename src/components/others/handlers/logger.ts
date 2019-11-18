import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { env, log } from '../../../config';

const levels = {
  [log.error.level]: 0,
  warn: 1,
  [log.debug.level]: 2,
  [log.server.level]: 3,
  [log.http.level]: 4,
};

const colors = {
  [log.error.level]: log.error.color,
  [log.debug.level]: log.debug.color,
  [log.server.level]: log.server.color,
  [log.http.level]: log.http.color,
};

const { combine, timestamp, prettyPrint, colorize } = format;

class Logger {
  private infoFunc: any;
  private infoLevel: string;
  constructor() {
    this.run();
  }

  public error(message: any) {
    this.log(this.errorTrans()).log(log.error.level, JSON.stringify(message));
  }

  public info(message: string) {
    this.log(this.infoFunc).log(this.infoLevel, message);
  }

  public http(message: string) {
    this.log(this.httpTrans()).log(log.http.level, message);
  }

  private errorTrans() {
    const trans: any[] = [new DailyRotateFile({ ...this.opt, ...log.error })];

    if (env === 'dev') trans.push(this.console(log.error.level));

    return trans;
  }

  private debugTrans() {
    return [
      new DailyRotateFile({ ...this.opt, ...log.debug }),
      this.console(log.debug.level),
    ];
  }

  private serverTrans() {
    return [new DailyRotateFile({ ...this.opt, ...log.server })];
  }

  private httpTrans() {
    return [new DailyRotateFile({ ...this.opt, ...log.http })];
  }

  private log(trans: any[]) {
    return createLogger({
      format: combine(timestamp(), prettyPrint()),
      levels,
      transports: trans,
    });
  }

  private run() {
    this.errorTrans();
    this.httpTrans();
    if (env === 'dev') {
      this.infoFunc = this.debugTrans();
      this.infoLevel = log.debug.level;
    } else {
      this.infoFunc = this.serverTrans();
      this.infoLevel = log.server.level;
    }
  }

  private console(level: string) {
    return new transports.Console({
      format: combine(colorize({ colors }), this.logFormat()),
      level,
    });
  }

  private opt() {
    const opt: Partial<DailyRotateFile.DailyRotateFileTransportOptions> = {
      // json: true,
      datePattern: 'YYYY-MM-DD',
      maxFiles: '14d',
      maxSize: '20m',
      zippedArchive: true,
    };

    return opt;
  }

  private logFormat() {
    const msg = format.printf(function(info) {
      return `${info.level} [${new Date()
        .toISOString()
        .slice(0, 23)
        .replace('T', ' ')}]: ${info.message}`;
    });

    return msg;
  }
}

export const logger = new Logger();
