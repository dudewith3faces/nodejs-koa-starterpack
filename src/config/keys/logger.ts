import { join } from "path";

const dir = (name?: string) =>
  join(__dirname, "..", "..", "..", "Logs", name.toLowerCase());
const file = (name?: string) => `%DATE%-${name.toLowerCase()}.log`;

const logs = {
  debug: {
    color: process.env.debugColor || "blue",
    dirname: "",
    filename: "",
    level: process.env.debugLevel
      ? process.env.debugLevel.toUpperCase()
      : "DEBUG",
  },
  error: {
    color: process.env.errorColor || "red",
    dirname: "",
    filename: "",
    level: process.env.errorLevel
      ? process.env.errorLevel.toUpperCase()
      : "ERROR",
  },
  http: {
    color: process.env.httpColor || "magenta",
    dirname: "",
    filename: "",
    level: process.env.httpLevel ? process.env.httpLevel.toUpperCase() : "HTTP",
  },
  server: {
    color: process.env.serverColor || "green",
    dirname: "",
    filename: "",
    level: process.env.serverLevel
      ? process.env.serverLevel.toUpperCase()
      : "SERVER",
  },
};

logs.debug.filename = file(logs.debug.level);
logs.error.filename = file(logs.error.level);
logs.http.filename = file(logs.http.level);
logs.server.filename = file(logs.server.level);
logs.debug.dirname = dir(logs.debug.level);
logs.error.dirname = dir(logs.error.level);
logs.http.dirname = dir(logs.http.level);
logs.server.dirname = dir(logs.server.level);

export { logs };
