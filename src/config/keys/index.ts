import { config } from "dotenv";

config();

const PORT = +process.env.PORT;

export { PORT };
