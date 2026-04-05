import  'dotenv/config'
import { defineConfig } from 'prisma/config'

let DATABASE_URL = process.env.DATABASE_URL_Prod
if (process.env.NODE_ENV === 'development') {
   DATABASE_URL = process.env.DATABASE_URL_Dev
}


export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: DATABASE_URL || "" },
})
        