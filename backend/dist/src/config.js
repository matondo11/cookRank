import dotenv from 'dotenv';
dotenv.config();
const { DATABASE_URL, JWT_SECRET, PORT } = process.env;
if (!DATABASE_URL) {
    throw new Error('Missing DATABASE_URL environment variable');
}
if (!JWT_SECRET) {
    throw new Error('Missing JWT_SECRET environment variable');
}
export const config = {
    databaseUrl: DATABASE_URL,
    jwtSecret: JWT_SECRET,
    port: Number(PORT ?? 3000),
};
//# sourceMappingURL=config.js.map