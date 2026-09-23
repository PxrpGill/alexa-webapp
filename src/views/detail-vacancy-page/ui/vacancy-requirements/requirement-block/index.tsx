/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import type { RequirementBlockType } from "@/entities/vacancies/types/detail-vacancy.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";

export default function RequirementBlock({
	className,
	title,
	cards,
}: RequirementBlockType & PropsWithClassName) {
	if (!cards?.length) return null;

	return (
		<AnimationWrapper as="article" className={`${css.root} ${className}`}>
			{title && (
				<h4 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<ul className={css.list}>
				{cards.map((card, index) => (
					<AnimationWrapper
						as="li"
						key={index}
						direction="fade"
						delay={`${index * 0.1}s`}
						className={css.card}
					>
						{card.icon && (
							<img src={card.icon} alt="Иконка" className={css.icon} />
						)}
					</AnimationWrapper>
				))}
			</ul>
		</AnimationWrapper>
	);
}
