import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { config } from '../config.js';

const prisma = new PrismaClient({
  adapter: new PrismaPg(config.databaseUrl),
});

export default prisma;