/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import { DMS_MODAL_TITLE_BLOCK } from "../../models/dms-modal.constants";

import css from "./index.module.css";

export default function ModalTitleBlock() {
	return (
		<div className={css.root}>
			<h6
				dangerouslySetInnerHTML={{
					__html: DMS_MODAL_TITLE_BLOCK.title,
				}}
				className={css.title}
			/>
			<p
				dangerouslySetInnerHTML={{
					__html: DMS_MODAL_TITLE_BLOCK.description,
				}}
				className={css.description}
			/>
		</div>
	);
}
