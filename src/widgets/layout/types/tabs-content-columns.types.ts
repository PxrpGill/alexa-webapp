import type { HeaderMenuLinksType } from "@/shared/types/header-menu-links.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type ContentColumnProps = {
	title?: string;
	titleHref?: string;
	links?: HeaderMenuLinksType;
};

export type TabsContentColumnsProps = {
	columns?: ContentColumnProps[];
} & PropsWithClassName;
