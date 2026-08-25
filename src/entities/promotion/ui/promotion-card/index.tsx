/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import { useCallback } from "react";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import { usePromotionPageContext } from "../../models/promotion-page-context";
import type { PromotionCardProps } from "../../types/promotion-card.types";
import css from "./index.module.css";

export default function PromotionCard({
	title,
	description,
	className,
	banner,
	slug,
}: PromotionCardProps) {
	const { togglePromotionModal, selectPromotion } = usePromotionPageContext();

	const handlePromotionSelect = useCallback(() => {
		if (slug) selectPromotion({ slug, title });
		togglePromotionModal(true);
	}, [selectPromotion, togglePromotionModal, slug, title]);

	return (
		<article className={`${css.root} ${className}`}>
			{banner && (
				<div className={css.posterWrapper}>
					<Picture poster={banner} />
				</div>
			)}
			<div className={css.content}>
				{title && (
					<h5
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{description && (
					<div
						dangerouslySetInnerHTML={{ __html: description }}
						className={css.description}
					/>
				)}
				<Button className={css.button} onClick={handlePromotionSelect}>
					Оставить заявку
				</Button>
			</div>
		</article>
	);
}
