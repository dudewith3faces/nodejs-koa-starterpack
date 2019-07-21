let env: string;

env = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'dev';
env = env === 'development' ? 'dev' : env;

const PORT = Number(process.env.PORT) || 5000;
const hostname = process.env.hostname || '0.0.0.0';
const origin = process.env.origin || 'https://locahost:4200';

export { env, PORT, hostname, origin };
