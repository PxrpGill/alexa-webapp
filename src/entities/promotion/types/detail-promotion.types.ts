import type { PictureFormatType } from "@/shared/ui/picture";

export type DetailPromotionHeroType = {
	slug: string;
	title: string;
	description?: string | null;
	banner?: PictureFormatType | null;
	starts_at: string;
	ends_at?: string | null;
	is_active: boolean;
	buttonText?: string;
};

export type DetailPromotionSectionType = {
	title: string;
	content: string;
};

export type DetailPromotionConditionCardType = {
	icon?: string | null;
	title: string;
	description: string;
};

export type DetailPromotionConditionsType = {
	title: string;
	cards: Array<DetailPromotionConditionCardType>;
};

export type PromotionFormType = {
	title?: string;
	description?: string;
	button_text?: string;
};

export type DetailPromotionType = {
	slug: string;
	hero: DetailPromotionHeroType;
	detail: DetailPromotionSectionType;
	detail_content?: string;
	form?: PromotionFormType;
};
