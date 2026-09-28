/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import type { DetailPromotionConditionsType } from "@/entities/promotion/types/detail-promotion.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";

export default function RequirementBlock({
	className,
	title,
	cards,
}: DetailPromotionConditionsType & PropsWithClassName) {
	if (!cards?.length) return null;

	return (
		<AnimationWrapper as="article" className={`${css.root} ${className} container`}>
			<div className={css.wrapper}>
				{title && (
					<h4
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
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
			</div>
		</AnimationWrapper>
	);
}
