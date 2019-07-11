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

function createFile(err: boolean = false) {
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
      createFile(true),
    ],
  });

  public static successLog = createLogger({
    format: form,
    transports: [
      new transports.Console({
        format: combine(colorize(), consoleFormat),
      }),
      createFile(false),
    ],
  });
}
