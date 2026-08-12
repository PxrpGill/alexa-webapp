/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import { useCallback, useRef } from "react";
import { usePromotionPageContext } from "@/entities/promotion/models/promotion-page-context";
import Modal from "@/shared/ui/modal";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import { PROMOTION_MODAL_PICTURE } from "./models/appointment-modal.constants";
import ModalForm from "./ui/modal-form";
import ModalTitleBlock from "./ui/modal-title-block";

export default function PromotionModal() {
	const timoutRef = useRef<number>(0);
	const { isPromotionModalOpen, togglePromotionModal, selectPromotion } =
		usePromotionPageContext();

	const handleModalClose = useCallback(() => {
		if (timoutRef.current) {
			clearTimeout(timoutRef.current);
		}

		togglePromotionModal(false);

		timoutRef.current = Number(
			setTimeout(() => {
				selectPromotion(undefined);
			}, 367),
		);
	}, [selectPromotion, togglePromotionModal]);

	return (
		<Modal
			isOpen={isPromotionModalOpen}
			toggleClose={handleModalClose}
			contentClassName={css.root}
			className={css.rootModal}
		>
			<div className={css.posterWrapper}>
				<Picture poster={PROMOTION_MODAL_PICTURE} />
			</div>
			<ModalTitleBlock />
			<ModalForm />
		</Modal>
	);
}
