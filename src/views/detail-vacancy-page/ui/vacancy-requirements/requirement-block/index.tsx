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
		<AnimationWrapper
			as="article"
			direction="fade"
			className={`${css.root} ${className}`}
		>
			{title && (
				<h4 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<ul className={css.list}>
				{cards.map((card, index) => (
					<AnimationWrapper
						as="li"
						key={index}
						direction="fade"
						className={css.card}
					>
						{card.icon && (
							<img src={card.icon} alt="Иконка" className={css.icon} />
						)}
						<div className={css.cardContentWrapper}>
							{card.title && (
								<strong
									dangerouslySetInnerHTML={{ __html: card.title }}
									className={css.cardTitle}
								/>
							)}
							{card.description && (
								<p
									dangerouslySetInnerHTML={{ __html: card.description }}
									className={css.cardDescription}
								/>
							)}
						</div>
					</AnimationWrapper>
				))}
			</ul>
		</AnimationWrapper>
	);
}
