"use client";

import Link from "next/link";

import LogoSvg from "@/public/icons/logo.svg";
import { useLayoutContext } from "@/shared/config/layout-context";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import ContactPart from "./contact-part";
import css from "./index.module.css";

export default function Header() {
	const { currentBranch } = useLayoutContext();

	return (
		<header className={`${css.root} container`}>
			<div className={css.wrapper}>
				<Link
					className={css.link}
					aria-label="Перейти на главную"
					href={
						currentBranch === "volkova"
							? SITE_NAVIGATION.volkovaBase
							: SITE_NAVIGATION.landyshevayaBase
					}
				>
					<LogoSvg className={css.logo} />
				</Link>
				<ContactPart />
			</div>
		</header>
	);
}
