"use client";

import Link from "next/link";

import LogoSvg from "@/public/icons/logo.svg";
import { useLayoutContext } from "@/shared/config/layout-context";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import { BRANCH_COOKIES_VALUES } from "@/shared/hooks/set-branch-in-cookies";
import BreadCrumbs from "./bread-crumbs";
import ContactPart from "./contact-part";
import css from "./index.module.css";

export default function Header() {
	const { currentBranch } = useLayoutContext();

	return (
		<header className={`${css.root} container`}>
			<div className={css.wrapper}>
				<div className={css.leftPart}>
					<Link
						className={css.link}
						aria-label="Перейти на главную"
						href={
							currentBranch === BRANCH_COOKIES_VALUES.volkova
								? SITE_NAVIGATION.volkovaBase
								: SITE_NAVIGATION.landyshevayaBase
						}
					>
						<LogoSvg className={css.logo} />
					</Link>
					<div className={css.divider} />
					<BreadCrumbs className={css.breadcrumbs} />
				</div>
				<ContactPart />
			</div>
		</header>
	);
}
