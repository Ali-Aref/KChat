import { db } from "@/db"
import { user } from "@/db/schema/user"

export const GET = async (request: Request) => {
	const users = await db.select().from(user)

	return  Response.json({
		data: users
	})
}
