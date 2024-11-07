import { db } from "@/db";
import { todo } from "@/db/schema/todo";
import { TodoForm } from "@/components/todo/form";
import React from "react";
import { auth } from "@/auth";

export default async function Dashboard() {
  const todos = await db.select().from(todo);
	const session = await auth()

  return (
    <div className=" flex flex-1 flex-col items-center justify-center">
			<pre>{JSON.stringify(session, null, 2)}</pre>
			<p>{session?.user?.firstName}</p>
			<TodoForm todos={todos} />
    </div>
  );
}
