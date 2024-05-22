'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uplodthing";
import { useRouter } from "next/navigation";

function TopNav() {
	const router = useRouter();
	return (
		<nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
			<div>Gallery</div>
			<div>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UploadButton
						endpoint="imageUploader"
						onClientUploadComplete={() => {
							router.refresh();
						}}
					/>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	);
}

export default TopNav;
