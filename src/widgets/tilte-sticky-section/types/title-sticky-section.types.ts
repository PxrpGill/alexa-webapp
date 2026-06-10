import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type TitleStickySectionProps = {
	title?: string;
	cards?: Array<{
		title?: string;
		description?: string;
		theme?: 'white' | 'green'
	}>;
	lastCard?: {
		poster?: PictureFormatType;
		buttonText?: string;
	};
} & PropsWithClassName;
