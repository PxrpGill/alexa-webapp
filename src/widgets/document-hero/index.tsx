/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { DocumentHeroProps } from "./types/document-hero.types";

export default function DocumentHero({
	title,
	subtitle,
	underTitle,
	className,
}: DocumentHeroProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			{subtitle && (
				<p
					dangerouslySetInnerHTML={{ __html: subtitle }}
					className={css.subtitle}
				/>
			)}
			{title && (
				<h1 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{underTitle && (
				<p
					dangerouslySetInnerHTML={{ __html: underTitle }}
					className={css.underTitle}
				/>
			)}
		</AnimationWrapper>
	);
}
