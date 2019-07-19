import { logger } from "..";
import { app, PORT } from "../../config";

export class CustomEvents {
  constructor() {
    this.build();
  }

  private build() {
    this.log();
  }

  private log() {
    app.on("connected", () => logger.info(`server running on ${PORT}`));
    app.on("http", (message: string) => logger.http(message));
    app.on("error", (error) => logger.error(error));
    app.on("log", (msg: string) => logger.info(msg))
  }
}