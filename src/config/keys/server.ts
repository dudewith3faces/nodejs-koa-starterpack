import { readFileSync } from 'fs';
import { ServerOptions } from 'https';
import { join } from 'path';

let env = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'dev';
env = env === 'development' ? 'dev' : env;

const sslOpt: ServerOptions = {};
const PORT = Number(process.env.PORT) || 5000;
const hostname = process.env.hostname || '0.0.0.0';
const origin = process.env.origin || 'https://locahost:4200';

if (env !== 'dev') {
  sslOpt.cert = readFileSync(join(__dirname, '..', 'ssl', 'cert.pem'));
  sslOpt.key = readFileSync(join(__dirname, '..', 'ssl', 'key.pem'));
}

export { env, PORT, hostname, origin, sslOpt };
