import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type SectionHeaderProps = {
	title?: string;
	description?: string;
};

export type ElinerProps = {
	name?: string;
	country?: string;
	deliveryTime?: string;
	stepsTime?: string;
	wearingComfort?: string;
	specialCases?: string;
};

export type ElinersSectionTableProps = {
	sectionHeader?: SectionHeaderProps;
	eliners?: ElinerProps[];
} & PropsWithClassName;
