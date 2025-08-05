import { DatabaseURL } from "@shared/constants";
import { drizzle } from "drizzle-orm/node-postgres";
import * as userSchema from "./schema/user.table";
// import * as projectSchema from "./schema/project.table";
// import * as tagsSchema from "./schema/tags.table";
// import * as taskSchema from "./schema/task.table";

const db = drizzle(DatabaseURL, {
  schema: {
    ...userSchema,
    // ...projectSchema,
    // ...tagsSchema,
    // ...taskSchema,
  },
});

export default db;

