import { db } from "@/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images() {
	const images = await db.query.images.findMany({
		orderBy(fields, operators) {
			return operators.desc(fields.id);
		},
	});
	return (
		<div className="flex flex-wrap gap-4">
			{images.map(({ id, url, name }) => (
				<div key={id} className="w-48">
					<img src={url} alt="" />
					<div>{name}</div>
				</div>
			))}
		</div>
	);
}

export default async function HomePage() {
	return (
		<main>
			<SignedOut>
				<div className="h-full w-full text-2xl text-center"> Please sign in above </div>
			</SignedOut>
			<SignedIn>
				<Images />
			</SignedIn>
		</main>
	);
}
