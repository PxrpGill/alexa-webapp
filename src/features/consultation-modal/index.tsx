/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import { useLayoutContext } from "@/shared/config/layout-context";
import Modal from "@/shared/ui/modal";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import { CONSULTATION_MODAL_PICTURE } from "./models/consultation-modal.constants";
import ModalForm from "./ui/modal-form";
import ModalTitleBlock from "./ui/modal-title-block";

export default function ConsultationModal() {
	const { isConsultationModalOpen, toggleConsultationModal } =
		useLayoutContext();

	return (
		<Modal
			isOpen={isConsultationModalOpen}
			toggleClose={() => toggleConsultationModal(false)}
			contentClassName={css.root}
			className={css.rootModal}
		>
			<div className={css.posterWrapper}>
				<Picture poster={CONSULTATION_MODAL_PICTURE} />
			</div>
			<ModalTitleBlock />
			<ModalForm />
		</Modal>
	);
}
