import * as Cors from "koa2-cors";

const options: Cors.Options = {
  allowHeaders: ["Content-Type", "Accept", "Authorization"],
  allowMethods: ["GET", "PUT", "POST", "OPTIONS"],
};

export const cors = Cors(options);
