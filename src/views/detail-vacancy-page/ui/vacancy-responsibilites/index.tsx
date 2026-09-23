/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import type { ResponsibilitiesType } from "@/entities/vacancies/types/detail-vacancy.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";

export default function VacancyResponsibilities({
	className,
	title,
	cards,
}: ResponsibilitiesType & PropsWithClassName) {
	if (!cards?.length) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			<div className={css.wrapper}>
				{title && (
					<h4
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				<ul className={css.list}>
					{cards.map((card, index) => (
						<li
							key={index}
							className={`${css.responsibilityWrapper} ${index % 2 !== 0 && css.reversed}`}
						>
							<div className={css.cardImageWrapper}>
								{card.image && <Picture poster={card.image} />}
							</div>
							<div className={css.contentCard}>
								{card.title && (
									<strong
										dangerouslySetInnerHTML={{ __html: card.title }}
										className={css.cardContent}
									/>
								)}
								{card.description && (
									<p
										dangerouslySetInnerHTML={{ __html: card.description }}
										className={css.description}
									/>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</AnimationWrapper>
	);
}
