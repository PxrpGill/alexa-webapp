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
	poster,
	button,
}: PromotionCardProps) {
	const { togglePromotionModal, selectPromotion } = usePromotionPageContext();

	const handlePromotionSelect = useCallback(() => {
		selectPromotion({ title, description });
		togglePromotionModal(true);
	}, [description, selectPromotion, title, togglePromotionModal]);

	return (
		<article className={`${css.root} ${className}`}>
			{poster && (
				<div className={css.posterWrapper}>
					<Picture poster={poster} />
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
				{button && (
					<Button className={css.button} onClick={handlePromotionSelect}>
						{button.title}
					</Button>
				)}
			</div>
		</article>
	);
}
