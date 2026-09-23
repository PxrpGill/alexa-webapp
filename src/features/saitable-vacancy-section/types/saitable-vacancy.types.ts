import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type SectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type SaitableVacanciesSectionProps = {
	poster?: PictureFormatType;
} & PropsWithClassName &
	SectionHeaderProps;

export type AppointmentFormProps = {
	toggleSuccess: () => void;
};

export type SuccessFormProps = {
	isOpen?: boolean;
	toggleClose: () => void;
} & PropsWithClassName;
