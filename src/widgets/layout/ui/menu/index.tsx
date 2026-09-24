"use client";

import { useLayoutContext } from "@/shared/config/layout-context";
import Modal from "@/shared/ui/modal";
import { useDefineMenuContent } from "../../hooks/use-define-menu-content";
import css from "./index.module.css";
import MainTabs from "./main-tabs";

export default function Menu() {
	const { isMenuOpen, toggleMenuOpen, currentBranch } = useLayoutContext();
	const closeMenu = () => toggleMenuOpen(false);
	const menuContent = useDefineMenuContent(isMenuOpen, currentBranch);

	return (
		<Modal
			isOpen={isMenuOpen}
			toggleClose={closeMenu}
			backdropClassName={css.backdrop}
			closeButtonClassName={css.closeButton}
			contentClassName={`${css.root} ${isMenuOpen && css.open} container`}
		>
			<div className={css.wrap}>
				<MainTabs key={currentBranch} {...menuContent} />
			</div>
		</Modal>
	);
}
