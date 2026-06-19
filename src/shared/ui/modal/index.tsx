"use client";

import CrossSVG from "@/public/icons/x.svg";
import { useKeyPress } from "@/shared/hooks/use-key-press";
import { useLockBodyScroll } from "@/shared/hooks/use-lock-body-scroll";
import type { ModalProps } from "@/shared/types/modal.types";
import css from "./index.module.css";

export default function Modal({
	isOpen,
	toggleClose,
	className,
	children,
	contentClassName,
}: ModalProps) {
	useLockBodyScroll(isOpen);
	useKeyPress("Escape", toggleClose);

	return (
		<dialog
			className={`${css.root} ${isOpen && css.open} ${className}`.trim()}
			open
		>
			<button
				type="button"
				className={css.backdrop}
				onClick={toggleClose}
				aria-label="Закрыть модальное окно"
			/>
			<div className={`${css.modalContent} ${contentClassName}`.trim()}>
				<button className={css.closeButton} type="button" onClick={toggleClose}>
					<CrossSVG className={css.icon} />
				</button>
				{children}
			</div>
		</dialog>
	);
}
