/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import { APPOINTMENT_MODAL_TITLE_BLOCK } from "../../models/appointment-modal.constants";

import css from "./index.module.css";

export default function ModalTitleBlock() {
	return (
		<div className={css.root}>
			<h6
				dangerouslySetInnerHTML={{
					__html: APPOINTMENT_MODAL_TITLE_BLOCK.title,
				}}
				className={css.title}
			/>
			<p
				dangerouslySetInnerHTML={{
					__html: APPOINTMENT_MODAL_TITLE_BLOCK.description,
				}}
				className={css.description}
			/>
		</div>
	);
}
