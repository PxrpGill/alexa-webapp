/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import { handleSectionScroll } from "@/shared/helpers/handle-section-scroll";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import type { NotAvailableVacanicesProps } from "../../types/not-available-vacancies.types";
import css from "./index.module.css";

export default function NotAvailableVacancies({
	title,
	description,
	className,
}: NotAvailableVacanicesProps) {
	if (!title) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			<div className={css.wrapper} id="vacancies">
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
				{description && (
					<p
						dangerouslySetInnerHTML={{ __html: description }}
						className={css.description}
					/>
				)}
				<Button
					className={css.button}
					onClick={handleSectionScroll}
					href="#saitable"
				>
					Оставить заявку
				</Button>
			</div>
		</AnimationWrapper>
	);
}
