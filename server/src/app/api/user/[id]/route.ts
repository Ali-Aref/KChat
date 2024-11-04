import { db } from "@/db";
import { user } from "@/db/schema/user";
import { eq } from "drizzle-orm";

type PageParams = {
  id: string;
};

export const GET = async (
  request: Request,
  { params }: { params: PageParams },
) => {
  const { id } = await params;

  const item = await db
    .select()
    .from(user)
    .where(eq(user.id, parseInt(id)));

  return Response.json(item);
};
