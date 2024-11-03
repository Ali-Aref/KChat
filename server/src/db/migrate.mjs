import { migrate } from "drizzle-orm/mysql2/migrator";
import { drizzle } from "drizzle-orm/mysql2";
import path from "path";
import dotenv from 'dotenv';

dotenv.config();

export const migrateDB = async () => {
  try {
    const db = drizzle(process.env.DATABASE_URL);

    await migrate(db, {
      migrationsFolder: path.resolve("src", "db", "drizzle"),
    });
    console.log("✅ migrate done.");
    process.exit(0);
  } catch (error) {
    console.log("❌ migrate error: ", error);
  }
};

migrateDB();
