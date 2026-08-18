/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import { useCallback, useEffect, useState } from "react";
import { useLayoutContext } from "@/shared/config/layout-context";
import Modal from "@/shared/ui/modal";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import { DMS_MODAL_PICTURE } from "./models/dms-modal.constants";
import ModalForm from "./ui/modal-form";
import ModalTitleBlock from "./ui/modal-title-block";
import SuccessForm from "./ui/success-form";

export default function DMSModal() {
	const { isDMSModalOpen, toggleDMSModal } = useLayoutContext();

	const [isSuccess, toggleSuccess] = useState<boolean>(false);

	const toggleSuccessFormOpen = useCallback(() => {
		toggleSuccess(true);
	}, []);

	useEffect(() => {
		if (!isDMSModalOpen) toggleSuccess(false);
	}, [isDMSModalOpen]);

	return (
		<Modal
			isOpen={isDMSModalOpen}
			toggleClose={() => toggleDMSModal(false)}
			contentClassName={css.root}
			className={css.rootModal}
		>
			<div className={css.posterWrapper}>
				<Picture poster={DMS_MODAL_PICTURE} />
			</div>
			<ModalTitleBlock />
			<ModalForm toggleSuccess={toggleSuccessFormOpen} />
			<SuccessForm isOpen={isSuccess} />
		</Modal>
	);
}
