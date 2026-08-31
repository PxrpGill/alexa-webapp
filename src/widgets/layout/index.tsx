"use client";

import { usePathname } from "next/navigation";
import { type PropsWithChildren, useLayoutEffect } from "react";
import AppointmentModal from "@/features/appointment-modal";
import ConsultationModal from "@/features/consultation-modal";
import CookiesPanel from "@/features/cookies-panel";
import { LayoutProvider } from "@/shared/config/layout-context";
import { LANDYSHEVAYA_CHILD_NAVIGATION } from "@/shared/config/site-navigation";
import Footer from "./ui/footer";
import Header from "./ui/header";
import Menu from "./ui/menu";

export default function Layout({ children }: PropsWithChildren) {
	const pathname = usePathname();

	useLayoutEffect(() => {
		if (Object.values(LANDYSHEVAYA_CHILD_NAVIGATION).includes(pathname)) {
			document.body.classList.remove("adult-theme");
			document.body.classList.add("child-theme");
		} else {
			document.body.classList.remove("child-theme");
			document.body.classList.add("adult-theme");
		}
	}, [pathname]);

	return (
		<LayoutProvider>
			<Header />
			{children}
			<Menu />
			<Footer />
			<CookiesPanel />
			<ConsultationModal />
			<AppointmentModal />
		</LayoutProvider>
	);
}
