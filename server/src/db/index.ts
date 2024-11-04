import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

//export const db = drizzle(process.env.DATABASE_URL);

const client = mysql.createPool({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "kchat",
});

export const db = drizzle({ client });
