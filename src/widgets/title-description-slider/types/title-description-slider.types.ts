import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type TextBlockProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type TitleDescriptionSliderProps = {
	textBlock?: TextBlockProps;
	posters?: Array<PictureFormatType>;
	textBlockPosition?: "left" | "right";
} & PropsWithClassName;
