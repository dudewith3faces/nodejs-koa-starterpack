import * as Morgan from "koa-morgan";
import {EmitEvent} from "../../services"

export const morgan = Morgan("combined", {
  stream: {
    write: (message) => EmitEvent.http(message),
  },
});
