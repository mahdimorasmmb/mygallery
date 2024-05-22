import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getImages() {
	const user = auth();
	if (!user.userId) throw new Error("Unauthorized");

	const images = await db.query.images.findMany({
		orderBy(fields, operators) {
			return operators.desc(fields.id);
		},
		where(fields, operators) {
			return operators.eq(fields.userId, user.userId);
		},
	});
	return images;
}
