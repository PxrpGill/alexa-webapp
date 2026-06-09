/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { useMemo } from "react";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import FactoidCard from "@/shared/ui/factoid-card";
import { HEALTH_FOR_FAMILY_FACTOID_BUTTON } from "../../models/health-for-family.constants";
import type { FactoidCardsProps } from "../../types/health-for-family.types";
import css from "./index.module.css";

export default function FactoidCards({
	cards,
	className,
}: {
	cards?: FactoidCardsProps[];
} & PropsWithClassName) {
	const evenCards = useMemo(
		() => cards?.filter((_, index) => index % 2 === 0),
		[cards],
	);

	const oddCards = useMemo(
		() => cards?.filter((_, index) => index % 2 !== 0),
		[cards],
	);

	if (!cards?.length) return null;

	return (
		<section className={`${css.root} ${className}`}>
			<div className={css.even}>
				{evenCards?.map((card, index) => (
					<FactoidCard
						title={card.title}
						description={card.description}
						key={`${index}-${card.title}`}
						button={{
							...HEALTH_FOR_FAMILY_FACTOID_BUTTON,
							href: card.button?.href ?? "",
						}}
					/>
				))}
			</div>
			<div className={css.odd}>
				{oddCards?.map((card, index) => (
					<FactoidCard
						title={card.title}
						description={card.description}
						key={`${index}-${card.title}`}
						button={{
							...HEALTH_FOR_FAMILY_FACTOID_BUTTON,
							href: card.button?.href ?? "",
						}}
					/>
				))}
			</div>
		</section>
	);
}
