/** biome-ignore-all lint/suspicious/noArrayIndexKey: карточки статичны и не переупорядочиваются */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { RequiredField } from "@/shared/types/required-field.types";
import Picture from "@/shared/ui/picture";
import {
	chunkCardsIntoRows,
	getCardColSpan,
} from "../../models/child-what-includes-services.helpers";
import type { CardListProps } from "../../types/child-what-includes-services.types";
import css from "./index.module.css";

const COL_SPAN_CLASS = {
	1: "",
	2: css.span2,
	3: css.span3,
	4: css.span4,
} as const;

export default function CardsList({
	cards,
	className,
}: RequiredField<CardListProps, "cards">) {
	const rows = chunkCardsIntoRows(cards);

	return (
		<ul className={`${css.root} ${className}`}>
			{rows.map((row, rowIndex) => (
				<li key={rowIndex} className={css.row}>
					<ul className={css.rowList}>
						{row.map((card, cardIndex) => (
							<li
								key={cardIndex}
								className={`${css.card} ${css[card.cardType ?? "default"]} ${COL_SPAN_CLASS[getCardColSpan(row.length, cardIndex)]} ${row.length === 3 ? css.tallCard : ""}`}
							>
								<div className={css.content}>
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
								{card.poster && (
									<Picture poster={card.poster} className={css.poster} />
								)}
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
}
