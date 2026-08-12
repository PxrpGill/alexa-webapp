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

const SERVICES_TAB = {
	title: "Услуги",
	tabKey: "services",
};

const INFORMATION_TAB = {
	title: "Информация",
	tabKey: "information",
};

const INFORAMTION_CONTENT = {
	contentKey: INFORMATION_TAB.tabKey,
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
};

const VOLKOVA_MENU_TABS_DATA: MainTabsProps = {
	tabs: [INFORMATION_TAB],
	tabContents: [INFORAMTION_CONTENT],
};

const LANDYSHEVAYA_MENU_TABS_DATA: MainTabsProps = {
	tabs: [SERVICES_TAB, INFORMATION_TAB],
	tabContents: [
		{
			contentKey: SERVICES_TAB.tabKey,
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
		INFORAMTION_CONTENT,
	],
};

export default function Menu() {
	const { isMenuOpen, toggleMenuOpen, currentBranch } = useLayoutContext();
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
				<MainTabs
					key={currentBranch}
					{...(currentBranch === "volkova"
						? VOLKOVA_MENU_TABS_DATA
						: LANDYSHEVAYA_MENU_TABS_DATA)}
				/>
			</div>
		</Modal>
	);
}
