import { db } from "@/db";
import { todo } from "@/db/schema/todo";
import { eq } from "drizzle-orm";
import { NextRequest, NextApiRequest } from "next/server";

type PageParams = {
	id: string;
};

export async function GET(request: NextRequest, { params }: { params: PageParams }) {
	// const searchParams = request.nextUrl.searchParams;
	const { id } = await params;

	const item = await db.select().from(todo).where(eq(todo.id, parseInt(id)))

	return Response.json(item);
}

export async function PATCH(request: NextApiRequest, { params }: { params: PageParams }) {
	const data = await request.json();
	const { id } = await params;

	await db.update(todo).set(data).where(eq(todo.id, parseInt(id)))
	const item = await db.select().from(todo).where(eq(todo.id, parseInt(id)))

	return Response.json(item);
}

export async function DELETE(request: NextApiRequest, { params }: { params: PageParams }) {
	const { id } = await params;

	await db.delete(todo).where(eq(todo.id, parseInt(id)))

	return new Response(null, {
		status: 204
	});
}

