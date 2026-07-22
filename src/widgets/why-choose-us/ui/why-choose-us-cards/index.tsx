/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { WhyChooseUsCardsProps } from "../../types/why-choose-us.types";
import css from "./index.module.css";

export default function WhyChooseUsCards({
	className,
	cards,
}: WhyChooseUsCardsProps) {
	if (!cards?.length) return null;

	return (
		<ul className={`${css.root} ${className}`}>
			{cards.map((card, index) => (
				<AnimationWrapper as="section" key={index} className={css.card}>
					{card.icon && (
						<img
							src={card.icon}
							alt="Иконка почему выбирают нас"
							className={css.icon}
						/>
					)}
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
				</AnimationWrapper>
			))}
		</ul>
	);
}
