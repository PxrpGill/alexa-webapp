import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type SectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type MockTabsProps = {
	tabs?: Array<string>;
} & PropsWithClassName;

export type SectionContentProps = {
	title?: string;
	description?: string;
	buttonText?: string;
	poster?: PictureFormatType;
} & PropsWithClassName;

export type MockTabsSectionProps = {
	sectionHeader?: SectionHeaderProps;
	mockTabs?: MockTabsProps;
	sectionContent?: SectionContentProps;
} & PropsWithClassName;
