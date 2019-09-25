import { config } from 'dotenv';

config();

export { emails } from './email';
export { log } from './log';
export { PORT, env, hostname, sslOpt } from './server';
