"use client";

import type { VacancyCategoryType } from "@/entities/vacancies/types/vacancies-list.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import Button from "@/shared/ui/button";
import css from "./index.module.css";

type VacancyCategoriesProps = {
	categories?: Array<VacancyCategoryType>;
	activeCategory: string;
	onCategoryChange: (categorySlug: string) => void;
} & PropsWithClassName;

export default function VacancyCategories({
	categories,
	activeCategory,
	onCategoryChange,
	className,
}: VacancyCategoriesProps) {
	if (!categories?.length) return null;

	return (
		<div className={`${css.root} ${className}`}>
			{categories.map((category) => (
				<Button
					className={css.tab}
					theme={category.slug === activeCategory ? "green" : "transparent"}
					key={category.slug}
					onClick={() => onCategoryChange(category.slug)}
				>
					{category.name}
				</Button>
			))}
		</div>
	);
}
