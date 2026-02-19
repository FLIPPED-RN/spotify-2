import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div>
			<Sidebar />
			<main>
				{children}
			</main>
			<RightSidebar />
		</div>
	)
}
