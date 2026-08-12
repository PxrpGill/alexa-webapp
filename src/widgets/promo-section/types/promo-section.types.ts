import type { SiteButtonProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type SectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type PromoCardProps = {
	title?: string;
	content?: string;
	button?: SiteButtonProps;
	theme?: "light" | "green";
} & PropsWithClassName;

export type PromoSectionProps = {
	sectionHeader?: SectionHeaderProps;
	cards?: PromoCardProps[];
} & PropsWithClassName;
