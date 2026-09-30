/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { RequiredField } from "@/shared/types/required-field.types";
import type { RecommendsForChildrenCardListProps } from "../../types/recommends-for-children.types";
import css from "./index.module.css";

export default function CardsList({
	cards,
	className,
}: RequiredField<RecommendsForChildrenCardListProps, "cards">) {
	return (
		<ul className={`${css.root} ${className}`}>
			{cards.map((card, index) => (
				<li
					className={`${css.card} ${index % 2 === 0 && css.green}`}
					key={index}
				>
					<p className={css.number}>
						{index + 1 < 10 ? `0${index + 1}` : index + 1}
					</p>
					<div className={css.cardContent}>
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
				</li>
			))}
		</ul>
	);
}
