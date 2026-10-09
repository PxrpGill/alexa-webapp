import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type PageContentFilterProps = {
	title?: string;
} & PropsWithClassName;

export type PageContentCategoryType = {
	title: string;
	slug: string;
};

export type PageFilterContentProviderType = {
	categories: Array<PageContentCategoryType>;
} & PropsWithChildren;

export type PageFilterContextType = {
	activeCategorySlug: string;
	categories: PageContentCategoryType[];
	isChangePanelVisible: boolean;
	toggleChangePanelVisible: Dispatch<SetStateAction<boolean>>;
	setActiveCategorySlug: Dispatch<SetStateAction<string>>;
};
