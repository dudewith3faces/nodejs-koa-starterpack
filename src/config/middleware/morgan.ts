import * as Morgan from "koa-morgan";
import { app } from "./koa";

export const morgan = Morgan("combined", {
  stream: {
    write: (message) => app.emit("http", message),
  },
});
