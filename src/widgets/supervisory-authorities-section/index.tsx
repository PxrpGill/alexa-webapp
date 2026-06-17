/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { SupervisoryAuthoritiesSectionProps } from "./types/supervisory-authorities-section.types";

export default function SupervisoryAuthoritiesSection({
	title,
	cards,
	className,
}: SupervisoryAuthoritiesSectionProps) {
	if (!cards?.length) return null;

	return (
		<section className={`${css.root} ${className}`}>
			{title && (
				<AnimationWrapper className={css.titleBlock}>
					<h1
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				</AnimationWrapper>
			)}
		</section>
	);
}
