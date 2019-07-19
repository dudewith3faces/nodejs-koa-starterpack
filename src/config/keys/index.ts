import { config } from "dotenv";

config();

export {emails} from "./email";
export {logs} from "./logger";
export * from "./server";
