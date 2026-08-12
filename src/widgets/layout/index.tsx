import type { PropsWithChildren } from "react";
import AppointmentModal from "@/features/appointment-modal";
import ConsultationModal from "@/features/consultation-modal";
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
			<ConsultationModal />
			<AppointmentModal />
		</LayoutProvider>
	);
}
