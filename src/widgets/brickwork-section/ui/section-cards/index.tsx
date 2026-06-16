/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import { chunkArray } from "@/shared/helpers/chunk-array";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import type { BrickworkCardsProps } from "../../types/brickwork-section.types";
import css from "./index.module.css";

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
							className={`${css.card} ${css[card.cardTheme ?? "white"]}`}
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
								<div
									dangerouslySetInnerHTML={{ __html: card.description }}
									className={css.description}
								/>
							)}
							{card.buttonText && (
								<Button
									className={css.button}
									theme={card.cardTheme === "white" ? "green" : "white"}
									rightIcon={<ButtonIconSVG className={css.buttonIcon} />}
								>
									{card.buttonText}
								</Button>
							)}
						</AnimationWrapper>
					))}
				</li>
			))}
		</ul>
	);
}
