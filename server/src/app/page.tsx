import { db } from "@/db";
import { sql } from "drizzle-orm";

export default async function Home() {
	const todos = await db.execute(sql`select * from todos`)
	console.log("todo: ", todos)

  return (
    <div className="flex flex-1 h-screen items-center justify-center">
			<h1>Hola</h1>
    </div>
  );
}
