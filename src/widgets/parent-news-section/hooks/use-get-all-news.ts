import { useInfiniteQuery } from "@tanstack/react-query";

import { getAllNews } from "@/entities/news/api/get-all-news";
import type { GetAllNewsResponseType } from "@/entities/news/types/news.types";

const DEFAULT_PER_PAGE = 6;

export const useGetAllNews = ({
	initialData,
	perPage = DEFAULT_PER_PAGE,
}: {
	initialData?: GetAllNewsResponseType;
	perPage?: number;
}) => {
	const initialPage = initialData?.pagination?.page ?? 1;

	return useInfiniteQuery({
		queryKey: ["news", "all"],
		queryFn: ({ pageParam }) => getAllNews({ page: pageParam, perPage }),
		initialPageParam: initialPage,
		getNextPageParam: (lastPage) => {
			const { page, totalPages } = lastPage?.pagination ?? {};
			if (page === undefined || totalPages === undefined) return undefined;
			return page < totalPages ? page + 1 : undefined;
		},
		initialData: initialData
			? {
					pages: [initialData],
					pageParams: [initialPage],
				}
			: undefined,
	});
};
