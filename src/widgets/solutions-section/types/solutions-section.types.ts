import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type SectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type SolutionCardProps = {
	title?: string;
	description?: string;
	href?: string;
	poster?: PictureFormatType;
} & PropsWithClassName;

export type SolutionsSectionProps = {
	sectionHeader?: SectionHeaderProps;
	cards?: Array<SolutionCardProps>;
} & PropsWithClassName;
