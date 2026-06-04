"use client";

import Link from "next/link";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import HeaderDropdown from "@/shared/ui/header-dropdown";
import {
	HEADER_NAVIGATION_ADULT_DENTISTRY_LINKS,
	HEADER_NAVIGATION_INFO,
	HEADER_NAVIGATION_PEDIATRIC_DENTISTRY,
} from "@/widgets/layout/models/header.constants";
import css from "./index.module.css";

export default function DesktopNavigation({ className }: PropsWithClassName) {
	return (
		<nav className={`${css.root} ${className}`.trim()}>
			<HeaderDropdown dropDownItems={HEADER_NAVIGATION_ADULT_DENTISTRY_LINKS}>
				Взрослая стоматология
			</HeaderDropdown>
			<HeaderDropdown dropDownItems={HEADER_NAVIGATION_PEDIATRIC_DENTISTRY}>
				Детская стоматология
			</HeaderDropdown>
			<HeaderDropdown dropDownItems={HEADER_NAVIGATION_INFO}>
				Информация
			</HeaderDropdown>
			<Link className={css.blog} href={SITE_NAVIGATION.blog}>
				Блог
			</Link>
		</nav>
	);
}
