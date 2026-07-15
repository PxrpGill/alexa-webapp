"use client";

import { useLayoutContext } from "@/shared/config/layout-context";
import Modal from "@/shared/ui/modal";
import {
	HEADER_NAVIGATION_ADULT_DENTISTRY_LINKS,
	HEADER_NAVIGATION_INFO,
	HEADER_NAVIGATION_PEDIATRIC_DENTISTRY,
} from "../../models/header.constants";
import css from "./index.module.css";
import MainTabs, { type MainTabsProps } from "./main-tabs";
import TabsContentColumns from "./tabs-content-columns";

const MENU_TABS_DATA: MainTabsProps = {
	tabs: [
		{
			title: "Услуги",
			tabKey: "uslugiy",
		},
		{
			title: "Информация",
			tabKey: "informaciya",
		},
	],
	tabContents: [
		{
			contentKey: "uslugiy",
			children: (
				<TabsContentColumns
					columns={[
						{
							title: "Взрослая стоматология",
							links: HEADER_NAVIGATION_ADULT_DENTISTRY_LINKS,
						},
						{
							title: "Детская стоматология",
							links: HEADER_NAVIGATION_PEDIATRIC_DENTISTRY,
						},
					]}
				/>
			),
		},
		{
			contentKey: "informaciya",
			children: (
				<TabsContentColumns
					columns={[
						{
							title: "Информация",
							links: HEADER_NAVIGATION_INFO,
						},
						{
							title: "Блог",
						},
					]}
				/>
			),
		},
	],
};

export default function Menu() {
	const { isMenuOpen, toggleMenuOpen } = useLayoutContext();
	const closeMenu = () => toggleMenuOpen(false);

	return (
		<Modal
			isOpen={isMenuOpen}
			toggleClose={closeMenu}
			backdropClassName={css.backdrop}
			closeButtonClassName={css.closeButton}
			contentClassName={`${css.root} ${isMenuOpen && css.open} container`}
		>
			<div className={css.wrap}>
				<MainTabs {...MENU_TABS_DATA} />
			</div>
		</Modal>
	);
}
