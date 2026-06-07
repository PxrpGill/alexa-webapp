/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { BrickworkCardsProps } from "../../types/brickwork-section.types";

import css from "./index.module.css";

function chunkArray<T>(arr: T[], size: number): T[][] {
	return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
		arr.slice(i * size, i * size + size),
	);
}

export default function SectionCards({
	cards,
	className,
}: BrickworkCardsProps) {
	if (!cards?.length) return null;

	const pairs = chunkArray(cards, 2);

	return (
		<ul className={`${css.root} ${className}`}>
			{pairs.map((pair, pairIndex) => (
				<li
					className={`${css.pair} ${pairIndex % 2 === 0 && css.odd}`}
					key={pairIndex}
				>
					{pair.map((card, cardIndex) => (
						<AnimationWrapper
							className={css.card}
							key={`${cardIndex}-${pairIndex}`}
						>
							{card.icon && (
								<img src={card.icon} className={css.icon} alt="Иконка" />
							)}
							{card.title && (
								<p
									className={css.title}
									dangerouslySetInnerHTML={{ __html: card.title }}
								/>
							)}
							{card.description && (
								<p
									dangerouslySetInnerHTML={{ __html: card.description }}
									className={css.description}
								/>
							)}
						</AnimationWrapper>
					))}
				</li>
			))}
		</ul>
	);
}
