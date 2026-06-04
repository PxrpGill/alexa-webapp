import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type CtaDescriptionProps = {
	text?: string;
	icon?: string;
};

export type CtaSectionProps = {
	poster?: PictureFormatType;
	title?: string;
	content?: string;
	description?: CtaDescriptionProps;
} & PropsWithClassName;
