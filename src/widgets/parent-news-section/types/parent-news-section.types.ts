import type { NewsCardProps } from "@/entities/news/types/news-card.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type ParentNewsSectionProps = {
	title?: string;
	news?: NewsCardProps[];
} & PropsWithClassName;
