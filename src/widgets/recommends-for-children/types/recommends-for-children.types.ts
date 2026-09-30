import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type SectionHeaderProps = {
	title?: string;
	description?: string;
	mockup?: string;
} & PropsWithClassName;

export type RecommendsForChildrenCardProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type RecommendsForChildrenCardListProps = {
	cards?: Array<RecommendsForChildrenCardProps>;
} & PropsWithClassName;

export type RecommendsForChildrenProps = {
	sectionHeader?: SectionHeaderProps;
} & PropsWithClassName &
	Omit<RecommendsForChildrenCardListProps, "className">;
