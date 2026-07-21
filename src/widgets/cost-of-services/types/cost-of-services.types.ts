import type { SiteLinkProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type CostOfServicesCardProps = {
	title?: string;
	description?: string;
	price?: number;
	button?: SiteLinkProps;
} & PropsWithClassName;

export type CostOfServicesProps = {
	title?: string;
	cards?: Array<CostOfServicesCardProps>;
} & PropsWithClassName;
