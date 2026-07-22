import type { SiteLinkProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type WhyChooseUsCardProps = {
	icon?: string;
	title?: string;
	description?: string;
};

export type WhyChooseUsCardsProps = {
	cards?: Array<WhyChooseUsCardProps>;
} & PropsWithClassName;

export type WhyChooseUsMainSectionProps = {
	title?: string;
	list?: Array<string>;
	button?: SiteLinkProps;
	poster?: PictureFormatType;
} & PropsWithClassName;

export type SectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type WhyChooseUsProps = {
	sectionHeader?: SectionHeaderProps;
	mainSection?: WhyChooseUsMainSectionProps;
} & PropsWithClassName &
	Omit<WhyChooseUsCardsProps, "className">;
