import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type PromotionCardProps = {
	title?: string;
	slug?: string;
	description?: string;
	banner?: PictureFormatType;
	starts_at?: string;
	ends_at?: string;
	is_active?: boolean;
} & PropsWithClassName;
