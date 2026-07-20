/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { SolutionsSectionProps } from "./types/solutions-section.types";
import SectionHeader from "./ui/section-header";
import SolutionCard from "./ui/solution-card";

export default function SolutionsSection({
	sectionHeader,
	className,
	cards,
}: SolutionsSectionProps) {
	if (!cards?.length) return null;

	return (
		<AnimationWrapper as="section" className={`${css.root} ${className}`}>
			<SectionHeader {...sectionHeader} className={css.header} />

			<ul className={`${css.list} container`}>
				{cards.map((card, index) => (
					<li key={index} className={css.paragraph}>
						<SolutionCard {...card} />
					</li>
				))}
			</ul>
		</AnimationWrapper>
	);
}
