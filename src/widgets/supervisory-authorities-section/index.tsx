/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { SupervisoryAuthoritiesSectionProps } from "./types/supervisory-authorities-section.types";
import SupervisoryCard from "./ui/supervisory-card";

export default function SupervisoryAuthoritiesSection({
	title,
	cards,
	className,
}: SupervisoryAuthoritiesSectionProps) {
	if (!cards?.length) return null;

	return (
		<section className={`${css.root} ${className} container`}>
			{title && (
				<AnimationWrapper className={css.titleBlock}>
					<h1
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				</AnimationWrapper>
			)}
			<ul className={css.list}>
				{cards.map((card, index) => (
					<li key={index} className={css.paragraph}>
						<SupervisoryCard {...card} className={css.card} />
					</li>
				))}
			</ul>
		</section>
	);
}
