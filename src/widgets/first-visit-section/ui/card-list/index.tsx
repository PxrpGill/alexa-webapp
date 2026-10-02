/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { RequiredField } from "@/shared/types/required-field.types";
import Picture from "@/shared/ui/picture";
import type { FirstVisitListProps } from "../../types/first-visit-section.types";
import css from "./index.module.css";

export default function CardList({
	cards,
	className,
}: RequiredField<FirstVisitListProps, "cards">) {
	return (
		<ul className={`${css.root} ${className}`}>
			{cards.map((card, index) => (
				<li className={css.card} key={index}>
					<div className={css.textContent}>
						{card.title && (
							<strong
								className={css.cardTitle}
								dangerouslySetInnerHTML={{ __html: card.title }}
							/>
						)}
						{card.description && (
							<p
								dangerouslySetInnerHTML={{ __html: card.description }}
								className={css.cardDescription}
							/>
						)}
					</div>
					<div className={css.posterWrapper}>
						{card.poster && <Picture poster={card.poster} />}
					</div>
				</li>
			))}
		</ul>
	);
}
