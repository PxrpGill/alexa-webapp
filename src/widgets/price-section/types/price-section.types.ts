import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type TabProps = {
	title?: string;
	slug?: string;
};

export type ControlsBlockProps = {
	title?: string;
	branchTabs?: TabProps[];
	filters?: {
		[branchSlug: string]: TabProps[];
	};
} & PropsWithClassName;

export type TitleBlockProps = {
	title?: string;
} & PropsWithClassName;

export type PriceSectionProps = {
	sectionHeader?: TitleBlockProps;
	controls?: ControlsBlockProps;
} & PropsWithClassName;
