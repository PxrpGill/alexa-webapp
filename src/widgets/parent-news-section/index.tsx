/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
"use client";

import NewsCard from "@/entities/news/ui/news-card";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";

import { useGetAllNews } from "./hooks/use-get-all-news";
import css from "./index.module.css";
import { EMPTY_TITLE } from "./models/parent-news.constants";
import type { ParentNewsSectionProps } from "./types/parent-news-section.types";

export default function ParentNewsSection({
	title,
	className,
	news,
}: ParentNewsSectionProps) {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
		useGetAllNews({ initialData: news });

	const newsItems = data?.pages.flatMap((page) => page?.items ?? []) ?? [];

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			{title && (
				<h2 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
			)}
			{newsItems.length > 0 ? (
				<ul className={css.list}>
					{newsItems.map((newsCard, index) => (
						<AnimationWrapper as="li" key={index}>
							<NewsCard {...newsCard} className={css.card} />
						</AnimationWrapper>
					))}
				</ul>
			) : (
				<div className={css.empty}>
					<h4
						className={css.emptyTitle}
						dangerouslySetInnerHTML={{ __html: EMPTY_TITLE }}
					/>
				</div>
			)}
			{hasNextPage && (
				<Button
					className={css.button}
					onClick={() => fetchNextPage()}
					isLoading={isFetchingNextPage}
				>
					Загрузить еще
				</Button>
			)}
		</AnimationWrapper>
	);
}
