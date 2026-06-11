import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { TreatmentDelayConsequencesProps } from "./types/treatment-delay-consequences.types";
import IconCards from "./ui/icon-cards";
import SectionHeader from "./ui/section-header";
import TextCards from "./ui/text-cards";

export default function TreatmentDelayConsequences({
	sectionHeader,
	textCards,
	iconCards,
	className,
}: TreatmentDelayConsequencesProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			<SectionHeader {...sectionHeader} className={css.titleBlock} />
			<IconCards {...iconCards} className={css.iconCards} />
			<TextCards {...textCards} />
		</AnimationWrapper>
	);
}
