import { boolean, int, mysqlTable, serial, timestamp, varchar } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
	id: int().primaryKey().autoincrement(),
	username: varchar({ length: 32 }).notNull(),
	email: varchar({ length: 128 }),
	firstName: varchar({ length: 128 }).notNull(),
	lastName: varchar({ length: 128 }).notNull(),
	password: varchar({ length: 255 }).notNull(),
	isActive: boolean().notNull().default(true),
	createdAt: timestamp().defaultNow(),
	updatedAt: timestamp().defaultNow().onUpdateNow(),
})

