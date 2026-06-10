import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { InstallmentPlanSectionProps } from "./types/installment-plan-section.types";
import DescriptionBlock from "./ui/description-block";
import PosterBlock from "./ui/poster-block";

export default function InstallmentPlanSection({
	descriptionBlock,
	postersBlock,
	className,
}: InstallmentPlanSectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			<PosterBlock {...postersBlock} className={css.posterBlock} />
			<DescriptionBlock {...descriptionBlock} className={css.descriptioBlock} />
		</AnimationWrapper>
	);
}
