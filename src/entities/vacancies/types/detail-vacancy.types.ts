import type { PictureFormatType } from "@/shared/ui/picture";

export type WhatYouWillGetCardType = {
	title: string;
	description: string;
};

export type WhatYouWillGetType = {
	title?: string;
	images: Array<{ image: PictureFormatType }>;
	cards: Array<WhatYouWillGetCardType>;
};

export type DetailVacancyHeroType = {
	vacancy_name?: string;
	description?: string;
	badges?: Array<string>;
};

export type RequirementBlockType = {
	title?: string;
	cards?: Array<WhatYouWillGetCardType & { icon?: string }>;
};

export type RequirementsType = {
	required?: RequirementBlockType;
	partial?: RequirementBlockType;
};

export type ResponsibilitiesType = {
	title?: string;
	cards?: Array<WhatYouWillGetCardType & { image?: PictureFormatType }>;
};

export type DetailVacancyType = {
	slug: string;
	hero?: DetailVacancyHeroType;
	what_you_will_get?: WhatYouWillGetType;
	requirements?: RequirementsType;
	responsibilities?: ResponsibilitiesType;
};
