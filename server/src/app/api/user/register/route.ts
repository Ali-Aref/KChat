import { db } from "@/db";
import { user } from "@/db/schema/user";
import { UserSchema } from "@/lib/zodSchema/user";
import { eq, or } from "drizzle-orm";
import { hash } from "bcryptjs"

export const POST = async (request: Request) => {
	const data = await request.json();

	const valid = UserSchema.safeParse(data);
	if (!valid.success) {
		return Response.json(valid.error.issues, {
			status: 400,
		});
	}
	// chekcing for existing username or email
	const existingUser = await db
		.select({
			email: user.email,
			username: user.username,
		})
		.from(user)
		.where(
			or(
				eq(user.email, valid.data.email),
				eq(user.username, valid.data.username),
			),
		);
	if (existingUser.length > 0) {
		const key =
			valid.data.email === existingUser[0].email ? "email" : "username";
		return Response.json(
			{
				message: `${key} already exists`,
			},
			{ status: 400 },
		);
	}

	const hashedPassword = await hash(valid.data.password, 10)
	await db.insert(user).values({ ...valid.data, password: hashedPassword });

	return Response.json(valid.data);
};
