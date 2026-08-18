import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type NewsCardProps = {
	title?: string;
	description?: string;
	publishDate?: string;
	poster?: PictureFormatType;
	slug?: string;
	previewPoster?: PictureFormatType;
} & PropsWithClassName;

export type SingleNewsProps = NewsCardProps & {
	content?: string;
};
