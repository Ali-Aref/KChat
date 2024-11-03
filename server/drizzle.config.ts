import type { Config } from "drizzle-kit";
 
export default {
	dialect: "mysql",
  schema: "./src/db/schema",
  out: "./src/db/drizzle",
} satisfies Config;
