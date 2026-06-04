import type { PropsWithChildren } from "react";
import Footer from "./ui/footer";
import Header from "./ui/header";

type LayoutProps = {} & PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
