import { db } from "@/db";
import { sql } from "drizzle-orm";
import { Button } from "@/components/ui/button";

export default async function Home() {
	const todos = await db.execute(sql`select * from todos`)
	console.log("todo: ", todos)

  return (
    <div className="flex flex-col flex-1 gap-3 h-screen items-center justify-center">
			<Button className="">Add</Button>
    </div>
  );
}
