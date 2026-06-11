import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type IconCardProps = {
	icon?: string;
	title?: string;
	description?: string;
} & PropsWithClassName;

export type TextCardsProps = {
	cards?: Array<Omit<IconCardProps, "icon">>;
} & PropsWithClassName;

export type IconCardsProps = {
	cards?: IconCardProps[];
} & PropsWithClassName;

export type SectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type TreatmentDelayConsequencesProps = {
	sectionHeader?: SectionHeaderProps;
	iconCards?: IconCardsProps;
	textCards?: TextCardsProps;
} & PropsWithClassName;
