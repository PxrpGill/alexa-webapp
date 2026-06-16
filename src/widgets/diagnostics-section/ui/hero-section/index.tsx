/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Picture from "@/shared/ui/picture";
import type { HeroSectionProps } from "../../types/diagnostics-section.types";
import css from "./index.module.css";

export default function HeroSection({
	title,
	description,
	poster,
	className,
}: HeroSectionProps) {
	return (
		<AnimationWrapper as="article" className={`${css.root} ${className}`}>
			<div className={css.content}>
				{title && (
					<h2
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{description && (
					<p
						dangerouslySetInnerHTML={{ __html: description }}
						className={css.description}
					/>
				)}
			</div>
			<div className={css.posterWrapper}>
				{poster && <Picture poster={poster} />}
			</div>
		</AnimationWrapper>
	);
}
