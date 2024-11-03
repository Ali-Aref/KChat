import { db } from "@/db";
import { todo } from "@/db/schema/todo";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

type PageParams = {
  id: string;
};

export async function GET( request: NextRequest, { params }: { params: PageParams }) {
  // const searchParams = request.nextUrl.searchParams;
	const { id } = await params;

	const item = await db.select().from(todo).where(eq(todo.id, parseInt(id)))

  return Response.json(item);
}
