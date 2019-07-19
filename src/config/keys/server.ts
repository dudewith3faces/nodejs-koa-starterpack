let env: string;

env = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : "dev";

env = (env === 'development') ? 'dev' : env;
const PORT = Number(process.env.PORT) || 5000;

export { env, PORT };
