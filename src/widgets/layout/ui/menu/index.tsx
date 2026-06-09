"use client";

import Link from "next/link";
import { useLayoutContext } from "@/shared/config/layout-context";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import HeaderDropdown from "@/shared/ui/header-dropdown";
import Modal from "@/shared/ui/modal";
import {
	HEADER_NAVIGATION_ADULT_DENTISTRY_LINKS,
	HEADER_NAVIGATION_INFO,
	HEADER_NAVIGATION_PEDIATRIC_DENTISTRY,
} from "../../models/header.constants";
import css from "./index.module.css";

export default function Menu() {
	const { isMenuOpen, toggleMenuOpen } = useLayoutContext();

	const closeMenu = () => toggleMenuOpen(false);

	return (
		<Modal
			isOpen={isMenuOpen}
			toggleClose={closeMenu}
			contentClassName={`${css.root} ${isMenuOpen && css.open}`}
		>
			<HeaderDropdown
				dropDownItems={HEADER_NAVIGATION_ADULT_DENTISTRY_LINKS}
				className={css.green}
				onLinkClick={closeMenu}
			>
				Взрослая стоматология
			</HeaderDropdown>
			<HeaderDropdown
				dropDownItems={HEADER_NAVIGATION_PEDIATRIC_DENTISTRY}
				className={css.green}
				onLinkClick={closeMenu}
			>
				Детская стоматология
			</HeaderDropdown>
			<HeaderDropdown
				dropDownItems={HEADER_NAVIGATION_INFO}
				className={css.green}
				onLinkClick={closeMenu}
			>
				Информация
			</HeaderDropdown>
			<Link className={css.blog} href={SITE_NAVIGATION.blog} onClick={closeMenu}>
				Блог
			</Link>
		</Modal>
	);
}
