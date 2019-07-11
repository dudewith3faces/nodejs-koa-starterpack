import * as morg from "koa-morgan";
import Logger from "../../services/log/logger";

export const morgan = morg("combined", {
  stream: {
    write: (message) => Logger.log.info(message.trim()),
  },
});
