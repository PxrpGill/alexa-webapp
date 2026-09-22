import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type VacanciesHeroProps = {
	title?: string;
	description?: string;
	poster?: PictureFormatType;
} & PropsWithClassName;
