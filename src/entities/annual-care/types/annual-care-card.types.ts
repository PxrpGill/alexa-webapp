import type { SiteButtonProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type AnnualCarePricePeriodType = "month" | "halfYear" | "year";

export type AnnualCareCardProps = {
	title?: string;
	price?: number;
	period?: AnnualCarePricePeriodType;
	description?: string;
	poster?: PictureFormatType;
	list?: string[];
	button?: SiteButtonProps;
} & PropsWithClassName;
