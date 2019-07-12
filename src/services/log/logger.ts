import { createLogger, format, transports } from "winston";
import * as DailyRotateFile from "winston-daily-rotate-file";
import { env, logs } from "../../config";

const levels = {
  [logs.error.level]: 0,
  warn: 1,
  [logs.debug.level]: 2,
  [logs.server.level]: 3,
  [logs.http.level]: 4,
};

const colors = {
  [logs.error.level]: logs.error.color,
  [logs.debug.level]: logs.debug.color,
  [logs.server.level]: logs.server.color,
  [logs.http.level]: logs.http.color,
};

const { combine, timestamp, prettyPrint, colorize } = format;

class Logger {
  private infoFunc: any;
  private infoLevel: string;
  constructor() {
    this.run();
  }

  public error(message: string) {
    this.log(this.errorTrans()).log(logs.error.level, message);
  }

  public info(message: string) {
    this.log(this.infoFunc).log(this.infoLevel, message);
  }

  public http(message: string) {
    this.log(this.httpTrans()).log(logs.http.level, message);
  }

  private errorTrans() {
    const trans: any[] = [new DailyRotateFile({ ...this.opt, ...logs.error })];

    if (env === "dev" || env === "development") {
      trans.push(this.console(logs.error.level));
    }

    return trans;
  }

  private debugTrans() {
    return [
      new DailyRotateFile({ ...this.opt(), ...logs.debug }),
      this.console(logs.debug.level),
    ];
  }

  private serverTrans() {
    return [new DailyRotateFile({ ...this.opt, ...logs.server })];
  }

  private httpTrans() {
    return [new DailyRotateFile({ ...this.opt, ...logs.http })];
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
    if (env === "dev" || env === "development") {
      this.infoFunc = this.debugTrans();
      this.infoLevel = logs.debug.level;
    } else {
      this.infoFunc = this.serverTrans();
      this.infoLevel = logs.server.level;
    }
  }

  private console(level: string) {
    return new transports.Console({
      format: combine(colorize({ colors }), this.logFormat()),
      level,
    });
  }

  private opt() {
    const opt: DailyRotateFile.DailyRotateFileTransportOptions = {
      // json: true,
      datePattern: "YYYY-MM-DD",
      maxFiles: "14d",
      maxSize: "20m",
      zippedArchive: true,
    };

    return opt;
  }

  private logFormat() {
    const msg = format.printf(function(info) {
      return `${info.level} [${new Date()
        .toISOString()
        .slice(0, 23)
        .replace("T", " ")}]: ${info.message}`;
    });

    return msg;
  }
}

export const logger = new Logger();
