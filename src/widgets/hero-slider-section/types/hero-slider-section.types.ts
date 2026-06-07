import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type SlideVariantProps = {
	title?: string;
	subtitle?: string;
	card?: {
		title?: string;
		content?: string;
		buttonText: string;
	};
	legend?: string;
	poster?: PictureFormatType;
};

export type FirstVariantProps = SlideVariantProps & {
	type: "firstVariant";
} & PropsWithClassName;

export type SecondVariantProps = SlideVariantProps & {
	type: "secondVariant";
} & PropsWithClassName;

export type ThirdVarirantProps = SlideVariantProps & {
	type: "thirdVariant";
} & PropsWithClassName;

export type FourthVariantProps = SlideVariantProps & {
	type: "fourthVariant";
} & PropsWithClassName;

export type FifthVariantProps = SlideVariantProps & {
	type: "fifthVariant";
} & PropsWithClassName;

export type SixthVaraintProps = SlideVariantProps & {
	type: "sixthVariant";
} & PropsWithClassName;

export type HeroSliderSectionProps = {
	slides?: Array<
		| FirstVariantProps
		| SecondVariantProps
		| ThirdVarirantProps
		| FourthVariantProps
		| FifthVariantProps
		| SixthVaraintProps
	>;
} & PropsWithClassName;
