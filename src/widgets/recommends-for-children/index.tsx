import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { RecommendsForChildrenProps } from "./types/recommends-for-children.types";
import CardsList from "./ui/cards-list";
import SectionHeader from "./ui/section-header";

export default function RecommendsForChildren({
	sectionHeader,
	cards,
	className,
}: RecommendsForChildrenProps) {
	if (!cards?.length) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			{sectionHeader && <SectionHeader {...sectionHeader} />}
			<CardsList cards={cards} />
		</AnimationWrapper>
	);
}
