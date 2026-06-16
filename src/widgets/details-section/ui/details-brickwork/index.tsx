/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { chunkArray } from "@/shared/helpers/chunk-array";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { DetailsCard } from "../../types/details-section.types";
import css from "./index.module.css";

export default function DetailsBrickwork({
	cards,
	className,
}: {
	cards?: DetailsCard[];
} & PropsWithClassName) {
	if (!cards?.length) return null;

	const pairs = chunkArray(cards, 2);

	return (
		<ul className={`${css.root} ${className}`}>
			{pairs.map((pair, pairIndex) => (
				<li
					key={pairIndex}
					className={`${css.pair} ${pairIndex % 2 === 0 && css.odd}`}
				>
					{pair.map((card, cardIndex) => (
						<AnimationWrapper key={cardIndex} className={css.card}>
							{card.title && (
								<p
									dangerouslySetInnerHTML={{ __html: card.title }}
									className={css.title}
								/>
							)}
							{card.content && (
								<div
									className={css.cardContent}
									dangerouslySetInnerHTML={{ __html: card.content }}
								/>
							)}
						</AnimationWrapper>
					))}
				</li>
			))}
		</ul>
	);
}
