import { createLogger, format, transports } from "winston";
import * as DailyRotateFile from "winston-daily-rotate-file";

const Levels = {
  error: 0,
  warn: 1,
  debug: 2,
  info: 3,
  morgan: 4,
};

const log = {
  error: {
    dirname: __dirname + "../../../../Logs/error",
    filename: "%DATE%-error.log",
  },
  success: {
    dirname: __dirname + "../../../../Logs/info",
    filename: "%DATE-server.log",
  },
};

const { combine, timestamp, prettyPrint, colorize } = format;

export default class Logger {
  public static log = createLogger({
    levels: Levels,
    format: combine(timestamp(), prettyPrint()),
    transports: [Logger.morgan()],
  });

  public static errorLog = createLogger({
    format: Logger.format(),
    transports: [
      new transports.Console({
        format: combine(colorize(), Logger.logFormat()),
      }),
      Logger.createFile(true),
    ],
  });

  public static successLog = createLogger({
    format: Logger.format(),
    transports: [
      new transports.Console({
        format: combine(colorize(), Logger.logFormat()),
      }),
      Logger.createFile(false),
    ],
  });

  private static morgan() {
    return this.console("morgan");
  }

  private static console(level: string) {
    return new transports.Console({
      level,
      format: combine(colorize(), Logger.logFormat()),
    });
  }

  private static file() {}

  private static createFile(err: boolean) {
    let name: { dirname: string; filename: string };
    if (!err) {
      name = Object.assign({}, log.success);
    } else {
      name = Object.assign({}, log.error);
    }
    const opt: DailyRotateFile.DailyRotateFileTransportOptions = {
      datePattern: "DD-MM-YYY",
      ...name,
      maxFiles: "14d",
      maxSize: "20m",
      zippedArchive: true,
    };
    return new DailyRotateFile(opt);
  }

  private static logFormat() {
    const msg = format.printf(function(info) {
      return `${info.level}: ${info.message} -- ${new Date()
        .toISOString()
        .slice(0, 23)
        .replace("T", " ")}`;
    });

    return msg;
  }

  private static format() {
    return combine(timestamp(), prettyPrint());
  }
}
