import dotenv from 'dotenv';
dotenv.config();
const { DATABASE_URL_Dev, JWT_SECRET_Dev, DATABASE_URL_Prod, JWT_SECRET_Prod, PORT, NODE_ENV } = process.env;
let DATABASE_URL = undefined;
let JWT_SECRET = undefined;
console.log(`You are in ${NODE_ENV} Mode`);
if (NODE_ENV === 'development') {
    DATABASE_URL = DATABASE_URL_Dev;
    JWT_SECRET = JWT_SECRET_Dev;
    if (!DATABASE_URL_Dev) {
        DATABASE_URL = undefined;
        throw new Error('Missing DATABASE_URL environment variable');
    }
    if (!JWT_SECRET_Dev) {
        JWT_SECRET = undefined;
        throw new Error('Missing JWT_SECRET environment variable');
    }
}
else if (NODE_ENV === 'prodution') {
    DATABASE_URL = DATABASE_URL_Prod;
    JWT_SECRET = JWT_SECRET_Prod;
    if (!DATABASE_URL_Prod) {
        DATABASE_URL = undefined;
        throw new Error('Missing DATABASE_URL environment variable');
    }
    if (!JWT_SECRET_Prod) {
        JWT_SECRET_Prod;
        throw new Error('Missing JWT_SECRET environment variable');
    }
}
export const config = {
    databaseUrl: DATABASE_URL || undefined,
    jwtSecret: JWT_SECRET || undefined,
    port: Number(PORT ?? 3000),
};
//# sourceMappingURL=config.js.map