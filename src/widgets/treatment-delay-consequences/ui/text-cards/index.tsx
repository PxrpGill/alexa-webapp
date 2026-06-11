/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { TextCardsProps } from "../../types/treatment-delay-consequences.types";

import css from "./index.module.css";

export default function TextCards({ cards, className }: TextCardsProps) {
	if (!cards?.length) return null;

	return (
		<ul className={`${css.root} ${className}`}>
			{cards.map((card, index) => (
				<li key={index} className={css.card}>
					{card.title && (
						<p
							dangerouslySetInnerHTML={{ __html: card.title }}
							className={css.title}
						/>
					)}
					{card.description && (
						<p
							dangerouslySetInnerHTML={{ __html: card.description }}
							className={css.description}
						/>
					)}
				</li>
			))}
		</ul>
	);
}
