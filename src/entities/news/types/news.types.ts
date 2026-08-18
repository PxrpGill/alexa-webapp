import type { PaginationType } from "@/shared/types/pagination.types";
import type { NewsCardProps } from "./news-card.types";

export type GetAllNewsResponseType = {
	items?: Array<NewsCardProps>;
	pagination: PaginationType;
};
