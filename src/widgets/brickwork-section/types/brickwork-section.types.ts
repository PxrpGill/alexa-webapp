import type { SiteButtonProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type SectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type BrickworkCardProps = {
	title?: string;
	description?: string;
	icon?: string;
	button?: SiteButtonProps;
	cardTheme?: "white" | "green";
};

export type BrickworkCardsProps = {
	cards?: BrickworkCardProps[];
} & PropsWithClassName;

export type BrickworkSectionProps = {
	sectionHeader?: SectionHeaderProps;
} & PropsWithClassName &
	BrickworkCardsProps;
