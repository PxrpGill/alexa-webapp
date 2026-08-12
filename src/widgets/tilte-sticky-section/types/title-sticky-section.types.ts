import type { SiteButtonProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type ImageCardProps = {
	poster?: PictureFormatType;
	button?: SiteButtonProps;
} & PropsWithClassName;

export type TitleBlockProps = {
	title?: string;
	imageCard?: ImageCardProps;
} & PropsWithClassName;

export type TitleStickySectionProps = {
	title?: string;
	cards?: Array<{
		title?: string;
		description?: string;
		theme?: "white" | "green";
		button?: SiteButtonProps;
	}>;
	lastCard?: ImageCardProps;
} & PropsWithClassName;
