/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { DetailPromotionSectionType } from "@/entities/promotion/types/detail-promotion.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";

export default function PromotionDescription({
	content,
	title,
	className,
}: DetailPromotionSectionType & PropsWithClassName) {
	if (!(title || content)) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			<div className={css.wrapper}>
				{title && (
					<h2
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{content && (
					<div
						className={css.content}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				)}
			</div>
		</AnimationWrapper>
	);
}
