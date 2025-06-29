import { drizzle } from "drizzle-orm/neon-http"

export const db = drizzle(process.env.SYNTAXLY_DATABASE_URL!)
