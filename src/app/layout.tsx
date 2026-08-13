import "@/shared/styles/reset.css";
import "@/shared/styles/colors.css";
import "@/shared/styles/global.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Favicon from "@/shared/config/favicon";
import { GENERAL_META } from "@/shared/config/general-meta.constants";
import InvolveFont from "@/shared/config/local-font";
import Layout from "@/widgets/layout";

export const metadata: Metadata = {
	title: GENERAL_META.title,
	description: GENERAL_META.description,
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" className={InvolveFont.className}>
			<Favicon />
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
