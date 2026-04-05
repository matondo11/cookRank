import dotenv from 'dotenv';

dotenv.config();

const {
  DATABASE_URL_Dev,
  JWT_SECRET_Dev,
  DATABASE_URL_Prod,
  JWT_SECRET_Prod,
  PORT,
  NODE_ENV
} = process.env;

let DATABASE_URL: string;
let JWT_SECRET: string;

console.log(`You are in ${NODE_ENV} Mode`);

if (NODE_ENV === 'development') {
  DATABASE_URL = DATABASE_URL_Dev!;
  JWT_SECRET = JWT_SECRET_Dev!;

  if (!DATABASE_URL_Dev) {
    throw new Error('Missing DATABASE_URL_Dev environment variable');
  }
  if (!JWT_SECRET_Dev) {
    throw new Error('Missing JWT_SECRET_Dev environment variable');
  }
} else if (NODE_ENV === 'production') {
  DATABASE_URL = DATABASE_URL_Prod!;
  JWT_SECRET = JWT_SECRET_Prod!;

  if (!DATABASE_URL_Prod) {
    throw new Error('Missing DATABASE_URL_Prod environment variable');
  }
  if (!JWT_SECRET_Prod) {
    throw new Error('Missing JWT_SECRET_Prod environment variable');
  }
} else {
  // Default to development if NODE_ENV is not set
  DATABASE_URL = DATABASE_URL_Dev!;
  JWT_SECRET = JWT_SECRET_Dev!;

  if (!DATABASE_URL_Dev) {
    throw new Error('Missing DATABASE_URL_Dev environment variable');
  }
  if (!JWT_SECRET_Dev) {
    throw new Error('Missing JWT_SECRET_Dev environment variable');
  }
}

export const config = {
  databaseUrl: DATABASE_URL,
  jwtSecret: JWT_SECRET,
  port: Number(PORT ?? 3000),
  nodeEnv: NODE_ENV ?? 'development',
};
