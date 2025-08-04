import {
  boolean,
  date,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const genderEnum = pgEnum("gender", ["male", "female"]);

export const userTable = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 64 }).notNull(),
  lastName: varchar("last_name", { length: 64 }).notNull(),
  gender: genderEnum().notNull(),
  email: varchar("email", { length: 128 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  dob: date("dob"),
  avatar: text("avatar"),
  bio: text("bio"),
  isActive: boolean("is_active").default(true),
  isVerified: boolean("is_verified").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

