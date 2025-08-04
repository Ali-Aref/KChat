import { defineConfig } from "drizzle-kit";
import { DatabaseURL } from "@shared/constants";

export default defineConfig({
  out: "./src/db/drizzle",
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: DatabaseURL
  },
});



