import type { PropsWithChildren } from "react";
import { LayoutProvider } from "@/shared/config/layout-context";
import Footer from "./ui/footer";
import Header from "./ui/header";
import Menu from "./ui/menu";

type LayoutProps = {} & PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
	return (
		<LayoutProvider>
			<Header />
			{children}
			<Menu />
			<Footer />
		</LayoutProvider>
	);
}
