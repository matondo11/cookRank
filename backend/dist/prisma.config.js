import { defineConfig } from 'prisma/config';
export default defineConfig({
    schema: 'prisma/schema.prisma',
    migrations: {
        path: 'prisma/migrations',
    },
    datasource: {
        url: process.env.DATABASE_URL || "postgres://a0479902b36dd241a0ebe09be62c8cef97c85fad9f999d806e916bce7bfbf3af:sk_tMw06LQCspbOIPxAf_Efz@db.prisma.io:5432/postgres?sslmode=require"
    },
});
//# sourceMappingURL=prisma.config.js.map