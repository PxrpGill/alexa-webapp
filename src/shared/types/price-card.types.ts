import type { SiteButtonProps } from "./button.types";
import type { PropsWithClassName } from "./props-with-classname";

export type PriceCardProps = {
	title?: string;
	content?: string;
	button?: SiteButtonProps;
} & PropsWithClassName;
