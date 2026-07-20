import type { AnnualCareCardProps } from "@/entities/annual-care/types/annual-care-card.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type SectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type AnnualCareProgramsProps = {
	sectionHeader?: SectionHeaderProps;
	programs?: Array<AnnualCareCardProps>;
} & PropsWithClassName;
