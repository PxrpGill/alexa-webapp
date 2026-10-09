/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

"use client";

import { useCallback } from "react";
import Button from "@/shared/ui/button";
import css from "./index.module.css";
import { usePageFilterContentContext } from "./models/page-filter-content-context";
import type { PageContentFilterProps } from "./types/page-content-filter.types";

export default function PageContentFilter({
	title,
	className,
}: PageContentFilterProps) {
	const {
		activeCategorySlug,
		categories,
		isChangePanelVisible,
		setActiveCategorySlug,
	} = usePageFilterContentContext();

	const handleCategoryClick = useCallback(
		(categorySlug: string) => {
			setActiveCategorySlug(categorySlug);
		},
		[setActiveCategorySlug],
	);

	return (
		<div
			className={`${css.root} ${className} ${isChangePanelVisible && css.visible}`}
		>
			{title && (
				<p dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<div className={css.buttonsWrapper}>
				{categories.map((category, index) => (
					<Button
						key={index}
						className={`${css.tab} ${category.slug === activeCategorySlug && css.active}`}
						theme={
							activeCategorySlug === category.slug ? "green" : "transparent"
						}
						onClick={() => handleCategoryClick(category.slug)}
					>
						{category.title}
					</Button>
				))}
			</div>
		</div>
	);
}
