import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type ChildWhatIncludesCardColSpan = 1 | 2 | 3 | 4;

type ChildWhatIncludesCardType =
	| "default"
	| "vertical-alexik"
	| "horizontal-alexik";

export type ChildWhatIncludesServiceCardProps = {
	title?: string;
	description?: string;
	poster?: PictureFormatType;
	cardType?: ChildWhatIncludesCardType;
};

export type SectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type CardListProps = {
	cards?: Array<ChildWhatIncludesServiceCardProps>;
} & PropsWithClassName;

export type ChildWhatIncludesServicesProps = {
	sectionHeader?: SectionHeaderProps;
} & PropsWithClassName &
	Omit<CardListProps, "className">;
