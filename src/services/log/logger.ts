import { createLogger, format, transports } from "winston";
import * as DailyRotateFile from "winston-daily-rotate-file";

enum Levels {
  error = 0,
  warn,
  info,
  verbose,
  debug,
  silly,
}

const logPath = {
  error: __dirname + "../../../../Logs/error",
  info: __dirname + "../../../../Logs/info",
};

const { combine, timestamp, prettyPrint, colorize } = format;

function createFile(path: string) {
  const opt: DailyRotateFile.DailyRotateFileTransportOptions = {
    datePattern: "DD-MM-YYY",
    dirname: path,
    filename: "%DATE%.log",
    maxFiles: "14d",
    maxSize: "20m",
    zippedArchive: true,
  };
  return new DailyRotateFile(opt);
}

const form = combine(timestamp(), prettyPrint());

const consoleFormat = format.printf(function(info) {
  return `${info.level}: ${info.message} -- ${new Date()
    .toISOString()
    .slice(0, 23)
    .replace("T", "")}`;
});

export default class Log {
  public static errorLog = createLogger({
    format: form,
    transports: [
      new transports.Console({
        format: combine(colorize(), consoleFormat),
      }),
      createFile(logPath.error),
    ],
  });

  public static successLog = createLogger({
    format: form,
    transports: [
      new transports.Console({
        format: combine(colorize(), consoleFormat),
      }),
      createFile(logPath.info),
    ],
  });
}
