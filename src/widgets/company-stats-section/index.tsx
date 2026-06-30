/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { CompanyStatsSectionProps } from "./types/company-stats-section.types";
import CompanyStatsCard from "./ui/company-stats-card";
import SectionHeader from "./ui/section-header";

export default function CompanyStatsSection({
	className,
	sectionHeader,
	cards,
}: CompanyStatsSectionProps) {
	if (!cards?.length) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			<SectionHeader {...sectionHeader} className={css.titleBlock} />
			<ul className={css.list}>
				{cards.map((card, index) => (
					<AnimationWrapper as="li" className={css.paragraph} key={index}>
						<CompanyStatsCard {...card} className={css.card} />
					</AnimationWrapper>
				))}
			</ul>
		</AnimationWrapper>
	);
}
