import { IHelmetConfiguration } from "helmet";
import * as Helmet from "koa-helmet";

const options: IHelmetConfiguration = {};

export const helmet = Helmet(options);
