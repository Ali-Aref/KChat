import { db } from "@/db";
import { sql } from "drizzle-orm";
import { Button } from "@/components/ui/button";

export default async function Home() {
	const todos = await db.execute(sql`select * from todos`)
	console.log("todo: ", todos)

  return (
    <div className="flex bg-black flex-col flex-1 gap-3 h-screen items-center justify-center">
			<h1 className="text-white">Hola</h1>
			<Button className="bg-white text-black">Add</Button>
    </div>
  );
}
