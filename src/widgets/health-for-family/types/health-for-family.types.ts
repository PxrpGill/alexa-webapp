import type { SiteLinkProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type TabType = {
	title?: string;
	slug?: string;
	icon?: string;
};

export type TabsBlockProps = {
	title?: string;
	tabs?: TabType[];
	activeKey?: string;
	setActiveKey?: (arg?: string) => void;
} & PropsWithClassName;

export type ContentCardProps = {
	title?: string;
	description?: string;
	button?: SiteLinkProps;
};

export type TabContentProps = {
	[key: string]: ContentCardProps[] | undefined;
};

export type HealthForFamilyProps = {
	tabsBlock?: TabsBlockProps;
	tabsContent?: TabContentProps;
} & PropsWithClassName;
