import { db } from "@/server/db";
import { getImages } from "@/server/queries";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {
	const images = await getImages();
	return (
		<div className="flex flex-wrap justify-center gap-4">
			{images.map(({ id, url, name }) => (
				<div key={id} className="w-48 h-48 flex flex-col ">
					<Image height={192} width={192}  src={url} alt="" style={{ objectFit: "contain" }} />
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
				<div className="h-full w-full text-2xl text-center">
					{" "}
					Please sign in above{" "}
				</div>
			</SignedOut>
			<SignedIn>
				<Images />
			</SignedIn>
		</main>
	);
}
