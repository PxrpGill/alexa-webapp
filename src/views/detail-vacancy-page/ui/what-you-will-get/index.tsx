/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import type { WhatYouWillGetType } from "@/entities/vacancies/types/detail-vacancy.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";

export default function WhatYouWillGetSection({
	className,
	title,
	images,
	cards,
}: WhatYouWillGetType & PropsWithClassName) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			<div className={css.wrapper}>
				{title && (
					<h2
						className={css.title}
						dangerouslySetInnerHTML={{ __html: title }}
					/>
				)}
				{Array.isArray(images) && images.length > 0 && (
					<div className={css.images}>
						{images.map((image, index) => (
							<AnimationWrapper
								direction="fade"
								className={css.imageWrapper}
								key={index}
								delay={`${index * 0.1}s`}
							>
								<Picture poster={image.image} alt="Изображение преимущества" />
							</AnimationWrapper>
						))}
					</div>
				)}
				{Array.isArray(cards) && cards.length > 0 && (
					<ul className={css.cardList}>
						{cards.map((card, index) => (
							<AnimationWrapper
								as="li"
								direction="fade"
								key={index}
								className={css.card}
							>
								<strong
									className={css.cardTitle}
									dangerouslySetInnerHTML={{ __html: card.title }}
								/>
								<p
									className={css.cardDescription}
									dangerouslySetInnerHTML={{ __html: card.description }}
								/>
							</AnimationWrapper>
						))}
					</ul>
				)}
			</div>
		</AnimationWrapper>
	);
}
