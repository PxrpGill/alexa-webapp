import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type SupervisoryCardProps = {
	title?: string;
	websiteLink?: string;
	phone?: string;
	icon?: string;
} & PropsWithClassName;

export type SupervisoryAuthoritiesSectionProps = {
	title?: string;
	cards?: SupervisoryCardProps[];
} & PropsWithClassName;
