"use client";

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
				<button
					className={css.closeButton}
					type="button"
					onClick={toggleClose}
				></button>
				{children}
			</div>
		</dialog>
	);
}
