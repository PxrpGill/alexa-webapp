import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { FirstVisitSectionProps } from "./types/first-visit-section.types";
import CardList from "./ui/card-list";
import SectionHeader from "./ui/section-header";

export default function FirstVisitSection({
	sectionHeader,
	cards,
	className,
}: FirstVisitSectionProps) {
	if (!cards?.length) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			{sectionHeader && <SectionHeader {...sectionHeader} />}
			<CardList cards={cards} />
		</AnimationWrapper>
	);
}
