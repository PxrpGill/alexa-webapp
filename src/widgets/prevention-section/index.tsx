/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { PreventionSectionProps } from "./types/prevention-section.types";
import SectionHeader from "./ui/section-header";
import ZupBlock from "./ui/zup-block";

export default function PreventionSection({
	sectionHeader,
	className,
	content,
}: PreventionSectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			<SectionHeader {...sectionHeader} className={css.header} />
			<div className={css.contentPart}>
				<ZupBlock />
				{content && (
					<div
						className={css.descriptionBlock}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				)}
			</div>
		</AnimationWrapper>
	);
}
