import type { PriceCardProps } from "@/shared/types/price-card.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type PriceCardsProps = {
	cards?: PriceCardProps[];
} & PropsWithClassName;
