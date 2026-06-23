"use client";

import { useEffect, useState } from "react";
import type { PriceCategory } from "@/shared/types/price-category.types";
import { usePriceSectionContext } from "../../models/price-section-context";
import css from "./index.module.css";
import PriceCategoryAccordion from "./price-category-accordion";

export default function PriceList() {
	const { currentBranchCategories, selectedBranchFilter, searchQuery } =
		usePriceSectionContext();

	const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

	useEffect(() => {
		if (selectedBranchFilter && selectedBranchFilter !== "all") {
			setOpenCategories(new Set([selectedBranchFilter]));
		} else if (searchQuery.trim()) {
			const matching = currentBranchCategories
				.filter((cat) =>
					cat.items.some((item) =>
						item.name.toLowerCase().includes(searchQuery.toLowerCase()),
					),
				)
				.map((cat) => cat.slug);
			setOpenCategories(new Set(matching));
		}
	}, [selectedBranchFilter, searchQuery, currentBranchCategories]);

	const toggle = (slug: string) => {
		setOpenCategories((prev) => {
			const next = new Set(prev);
			if (next.has(slug)) next.delete(slug);
			else next.add(slug);
			return next;
		});
	};

	const visibleCategories = currentBranchCategories.filter((cat) => {
		if (selectedBranchFilter && selectedBranchFilter !== "all") {
			return cat.slug === selectedBranchFilter;
		}
		if (searchQuery.trim()) {
			return cat.items.some((item) =>
				item.name.toLowerCase().includes(searchQuery.toLowerCase()),
			);
		}
		return true;
	});

	const getVisibleItems = (cat: PriceCategory) => {
		if (!searchQuery.trim()) return cat.items;
		return cat.items.filter((item) =>
			item.name.toLowerCase().includes(searchQuery.toLowerCase()),
		);
	};

	if (!visibleCategories.length) {
		return <p className={css.empty}>По вашему запросу ничего не найдено</p>;
	}

	return (
		<div className={css.root}>
			{visibleCategories.map((cat) => (
				<PriceCategoryAccordion
					key={cat.slug}
					category={cat}
					items={getVisibleItems(cat)}
					isOpen={openCategories.has(cat.slug)}
					onToggle={() => toggle(cat.slug)}
				/>
			))}
		</div>
	);
}
