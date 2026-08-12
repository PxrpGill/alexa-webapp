/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import { useLayoutContext } from "@/shared/config/layout-context";
import Modal from "@/shared/ui/modal";
import Picture from "@/shared/ui/picture";

import css from "./index.module.css";
import { APPOINTMENT_MODAL_PICTURE } from "./models/appointment-modal.constants";
import ModalForm from "./ui/modal-form";
import ModalTitleBlock from "./ui/modal-title-block";

export default function AppointmentModal() {
	const { isAppointmentModalOpen, toggleAppointmentModal } = useLayoutContext();

	return (
		<Modal
			isOpen={isAppointmentModalOpen}
			toggleClose={() => toggleAppointmentModal(false)}
			contentClassName={css.root}
			className={css.rootModal}
		>
			<div className={css.posterWrapper}>
				<Picture poster={APPOINTMENT_MODAL_PICTURE} />
			</div>
			<ModalTitleBlock />
			<ModalForm />
		</Modal>
	);
}
