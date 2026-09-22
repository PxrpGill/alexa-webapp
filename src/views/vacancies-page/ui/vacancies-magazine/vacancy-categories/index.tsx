/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import Button from "@/shared/ui/button";
import type { VacancyCategoryType } from "@/views/vacancies-page/types/get-vacancies-request.types";
import css from "./index.module.css";

type VacancyCategoriesProps = {
	categories?: Array<VacancyCategoryType>;
} & PropsWithClassName;

export default function VacancyCategories({
	categories,
	className,
}: VacancyCategoriesProps) {
	const [activeCategory, setActiveCategory] = useState<string>(
		categories ? categories[0].slug : "",
	);

	const router = useRouter();
	const handleButtonClick = useCallback(
		(categorySlug: string) => {
			setActiveCategory(categorySlug);

			router.push(`?category=${categorySlug}`, { scroll: false });
		},
		[router],
	);

	if (!categories?.length) return null;

	return (
		<div className={`${css.root} ${className}`}>
			{categories.map((category, index) => (
				<Button
					className={css.tab}
					theme={category.slug === activeCategory ? "green" : "transparent"}
					key={`${category.slug}-${index}`}
					onClick={() => handleButtonClick(category.slug)}
				>
					{category.name}
				</Button>
			))}
		</div>
	);
}
