import type { RequestToSaitableBodyData } from "@/shared/api/post-saitable-form";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type SectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type SaitableVacanciesSectionProps = {
	poster?: PictureFormatType;
	/**
	 * Slug вакансии, на которую откликаются. Без него уходит общий отклик
	 * «нет подходящей вакансии».
	 */
	vacancySlug?: string;
} & PropsWithClassName &
	SectionHeaderProps;

export type SaitableVacancyFormProps = {
	toggleSuccess: () => void;
	vacancySlug?: string;
};

export type UsePostVacancyApplyParams = SaitableVacancyFormProps & {
	setFieldError: (
		field: keyof RequestToSaitableBodyData,
		message: string,
	) => void;
};

export type SuccessFormProps = {
	isOpen?: boolean;
	toggleClose: () => void;
} & PropsWithClassName;
