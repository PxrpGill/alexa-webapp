/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */

import type { IconCardsProps } from "../../types/treatment-delay-consequences.types";

import css from "./index.module.css";

export default function IconCards({ cards, className }: IconCardsProps) {
	if (!cards?.length) return null;

	return (
		<ul className={`${css.root} ${className}`}>
			{cards.map((card, index) => (
				<li key={index} className={css.card}>
					{card.icon && (
						<img src={card.icon} alt="Иконка" className={css.icon} />
					)}
					{card.title && (
						<p
							className={css.title}
							dangerouslySetInnerHTML={{ __html: card.title }}
						/>
					)}
					{card.description && (
						<p
							className={css.description}
							dangerouslySetInnerHTML={{ __html: card.description }}
						/>
					)}
				</li>
			))}
		</ul>
	);
}
