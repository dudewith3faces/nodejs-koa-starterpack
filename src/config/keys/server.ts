const env = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : "dev";
const PORT = process.env.PORT ? +process.env.PORT : 5000;

export { env, PORT };
