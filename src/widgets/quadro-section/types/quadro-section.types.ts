import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type SectionHeaderCardProps = {
	title?: string;
	buttonText?: string;
} & PropsWithClassName;

export type SectionContentProps = {
	cards?: string[];
} & PropsWithClassName;

export type SectionHeaderProps = {
	title?: string;
	description?: string;
	card?: SectionHeaderCardProps;
	poster?: PictureFormatType;
};

export type QuadroSectionProps = {
	sectionHeader?: SectionHeaderProps;
} & PropsWithClassName &
	SectionContentProps;
