import type { SiteButtonProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type PromotionCardProps = {
	title?: string;
	description?: string;
	poster?: PictureFormatType;
	button?: SiteButtonProps;
} & PropsWithClassName;
