/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import { usePromotionPageContext } from "@/entities/promotion/models/promotion-page-context";
import css from "./index.module.css";

export default function ModalTitleBlock() {
	const { selectedPromotion } = usePromotionPageContext();

	return (
		<div className={css.root}>
			<h6
				dangerouslySetInnerHTML={{
					__html: selectedPromotion?.title ?? "",
				}}
				className={css.title}
			/>
			{/* <p
				dangerouslySetInnerHTML={{
					__html: PROMOTION_MODAL_TITLE_BLOCK.description,
				}}
				className={css.description}
			/> */}
		</div>
	);
}
