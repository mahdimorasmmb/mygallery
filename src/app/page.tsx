import { db } from "@/server/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomePage() {
	const images = await db.query.images.findMany({
		orderBy(fields, operators) {
			return operators.desc(fields.id);
		},
	});

	return (
		<main>
			<div className="flex flex-wrap gap-4">
				{images.map(({ id, url, name }) => (
					<div key={id} className="w-48">
						<img src={url} alt="" />
						<div>{name}</div>
					</div>
				))}
			</div>
		</main>
	);
}
