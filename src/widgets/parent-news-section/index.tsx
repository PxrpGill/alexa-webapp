/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
"use client";

import NewsCard from "@/entities/news/ui/news-card";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";

import css from "./index.module.css";
import type { ParentNewsSectionProps } from "./types/parent-news-section.types";

export default function ParentNewsSection({
	title,
	className,
	news,
}: ParentNewsSectionProps) {
	if (!(news?.items && news.pagination)) return;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			{title && (
				<h2 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
			)}
			<ul className={css.list}>
				{news?.items?.map((newsCard, index) => (
					<AnimationWrapper as="li" key={index}>
						<NewsCard {...newsCard} className={css.card} />
					</AnimationWrapper>
				))}
			</ul>
			{news?.pagination.page < news?.pagination.totalPages && (
				<Button className={css.button}>Загрузить еще</Button>
			)}
		</AnimationWrapper>
	);
}
