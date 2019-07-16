import { logger } from "..";
import { app, PORT } from "../../config";

export class CustomEvents {
  constructor() {
    this.build();
  }

  // public err(message: any) {
  //   app.emit("err", message);
  // }

  // public http(message: string) {
  //   app.emit("http", message);
  // }

  private build() {
    this.log();
  }

  private log() {
    app.on("connected", () => logger.info("server running on " + PORT));
    app.on("http", (message: string) => logger.http(message));
    app.on("err", (error) => logger.error(error));
  }
}
