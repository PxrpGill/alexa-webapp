import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { EarlyPeriodontalTreatmentSectionProps } from "./types/early-periodontal-treatment-section.types";
import Card from "./ui/card";
import SectionHeader from "./ui/section-header";

export default function EarlyPeriodontalTreatmentSection({
	className,
	sectionHeader,
	card,
}: EarlyPeriodontalTreatmentSectionProps) {
	return (
		<AnimationWrapper
			className={`${css.root} ${className} container`}
			as="section"
		>
			<div className={css.wrapper}>
				<SectionHeader {...sectionHeader} />
				<Card {...card} />
			</div>
		</AnimationWrapper>
	);
}
