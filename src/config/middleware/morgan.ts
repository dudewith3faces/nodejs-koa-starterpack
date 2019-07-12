import * as morg from "koa-morgan";
import { logger } from "../../services";

export const morgan = morg("combined", {
  stream: {
    write: (message) => logger.http(message.trim()),
  },
});
