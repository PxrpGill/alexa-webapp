import type { SiteButtonProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type IndicationsType = {
	label: string;
	description: string;
};

export type OrthoPriceCardProps = {
	poster?: PictureFormatType;
	title?: string;
	chips?: Array<string>;
	price?: number;
	indications?: Array<IndicationsType>;
	advantages?: Array<string>;
	peculiarities?: Array<string>;
	button: SiteButtonProps;
} & PropsWithClassName;

export type OrthoPriceCardsSectionProps = {
	cards?: Array<OrthoPriceCardProps>;
} & PropsWithClassName;
