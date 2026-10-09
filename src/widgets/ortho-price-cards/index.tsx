/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { OrthoPriceCardsSectionProps } from "./types/ortho-price-cards.types";
import OrthoPriceCard from "./ui/ortho-price-card";

export default function OrthoPriceCards({
	className,
	cards,
}: OrthoPriceCardsSectionProps) {
	if (!cards?.length) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			<ul className={css.list}>
				{cards.map((card, index) => (
					<li className={css.paragraph} key={index}>
						<OrthoPriceCard {...card} className={css.card} />
					</li>
				))}
			</ul>
		</AnimationWrapper>
	);
}
