import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type FirstVariantProps = {
	type: "firstVariant";
	title?: string;
	subtitle?: string;
	card?: {
		title?: string;
		content?: string;
		buttonText: string;
	};
	legend?: string;
	poster?: PictureFormatType;
} & PropsWithClassName;

export type SecondVariantProps = {
	type: "secondVariant";
	title?: string;
	subtitle?: string;
	legend?: string;
	poster?: PictureFormatType;
	card?: {
		title?: string;
		content?: string;
		buttonText: string;
	};
} & PropsWithClassName;

export type HeroSliderSectionProps = {
	slides?: Array<FirstVariantProps | SecondVariantProps>;
} & PropsWithClassName;
