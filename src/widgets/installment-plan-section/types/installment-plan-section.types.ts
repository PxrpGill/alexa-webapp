import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type DescriptionBlockProps = {
	title?: string;
	content?: string;
	buttonText?: string;
} & PropsWithClassName;

export type PosterBlockProps = {
	poster?: PictureFormatType;
} & PropsWithClassName;

export type InstallmentPlanSectionProps = {
	descriptionBlock?: DescriptionBlockProps;
	postersBlock?: PosterBlockProps;
} & PropsWithClassName;
