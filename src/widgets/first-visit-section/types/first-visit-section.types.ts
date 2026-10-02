import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type SectionHeaderProps = {
	title?: string;
	mockup?: string;
} & PropsWithClassName;

export type FirstVisitCardProps = {
	title?: string;
	description?: string;
	poster?: PictureFormatType;
} & PropsWithClassName;

export type FirstVisitListProps = {
	cards?: Array<FirstVisitCardProps>;
} & PropsWithClassName;

export type FirstVisitSectionProps = {
	sectionHeader?: SectionHeaderProps;
} & PropsWithClassName &
	Omit<FirstVisitListProps, "className">;
