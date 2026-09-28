"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { VacanciesMagazineProps } from "../../types/vacancies-magazine.types";
import css from "./index.module.css";
import SectionHeader from "./section-header";
import VacanciesList from "./vacancies-list";
import VacancyCategories from "./vacancy-categories";

const CATEGORY_SEARCH_PARAM = "category";

export default function VacanciesMagazine({
	className,
	title,
	description,
	total,
	categories,
	vacanciesByCategory,
}: VacanciesMagazineProps) {
	const [activeCategory, setActiveCategory] = useState(
		categories[0]?.slug ?? "",
	);

	/**
	 * Категория живёт в URL, чтобы отфильтрованной страницей можно было
	 * поделиться. Читаем её после гидратации: страница статическая, и на
	 * пререндере search-параметров ещё нет.
	 */
	useEffect(() => {
		const categoryFromUrl = new URLSearchParams(window.location.search).get(
			CATEGORY_SEARCH_PARAM,
		);

		if (categoryFromUrl && categoryFromUrl in vacanciesByCategory) {
			setActiveCategory(categoryFromUrl);
		}
	}, [vacanciesByCategory]);

	/**
	 * replaceState вместо router.push: фильтрация целиком клиентская,
	 * обращаться к серверу за уже загруженными вакансиями не нужно.
	 */
	const handleCategoryChange = useCallback((categorySlug: string) => {
		setActiveCategory(categorySlug);

		const url = new URL(window.location.href);
		url.searchParams.set(CATEGORY_SEARCH_PARAM, categorySlug);
		window.history.replaceState(null, "", url);
	}, []);

	return (
		<AnimationWrapper
			as="section"
			id="vacancies"
			className={`${css.root} ${className} container`}
		>
			<div className={css.wrapper}>
				<SectionHeader
					className={css.header}
					title={title}
					description={description}
					total={total}
				/>
				<VacancyCategories
					categories={categories}
					activeCategory={activeCategory}
					onCategoryChange={handleCategoryChange}
					className={css.categories}
				/>
				<VacanciesList vacancies={vacanciesByCategory[activeCategory]} />
			</div>
		</AnimationWrapper>
	);
}
