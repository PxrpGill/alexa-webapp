import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { ChildWhatIncludesServicesProps } from "./types/child-what-includes-services.types";
import CardsList from "./ui/cards-list";
import SectionHeader from "./ui/section-header";

export default function ChildWhatIncludesServices({
	sectionHeader,
	className,
	cards,
}: ChildWhatIncludesServicesProps) {
	if (!cards?.length) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			{sectionHeader && <SectionHeader {...sectionHeader} />}
			<CardsList cards={cards} />
		</AnimationWrapper>
	);
}
