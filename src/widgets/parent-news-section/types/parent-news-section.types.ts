import type { GetAllNewsResponseType } from "@/entities/news/types/news.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type ParentNewsSectionProps = {
	title?: string;
	news?: GetAllNewsResponseType;
} & PropsWithClassName;
