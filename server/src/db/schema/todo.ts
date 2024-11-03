import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const TODO_STATUS = [
	"NOT_STARTED",
	"IN_PROGRESS",
	"WAITING",
	"DONE",
	"CANCELLED",
] as const;

export const TODO_PRIORITY = [
	"LOW",
	"MEDIUM",
	"HIGH",
	"URGENT",
] as const;

export const todoProject = mysqlTable("todoProjects", {
	id: int().primaryKey().autoincrement(),
	name: varchar({ length: 128 }).notNull(),
	color: varchar({ length: 32 }),
})

export const todoTags = mysqlTable("todoTags", {
	id: int().primaryKey().autoincrement(),
	name: varchar({ length: 128 }).notNull(),
})

export const todo = mysqlTable("todos", {
	id: int().primaryKey().autoincrement(),	
	title: varchar({ length: 128 }).notNull(),
	description: text(),
	status: mysqlEnum(TODO_STATUS).notNull().default("NOT_STARTED"),
	priority: mysqlEnum(TODO_PRIORITY).notNull().default("LOW"),
	projectId: int().notNull().references(() => todoProject.id, { onDelete: "cascade" }).default(1),
	createdDate: timestamp().defaultNow(),
	updatedDate: timestamp().defaultNow().onUpdateNow(),
})
