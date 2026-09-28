/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import CircleArrowSVG from "@/public/icons/circle-arrow.svg";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import { getTimeLeft } from "@/shared/helpers/get-time-left";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { PromotionCardProps } from "../../types/promotion-card.types";
import css from "./index.module.css";

export default function PromotionCard({
	title,
	description,
	className,
	banner,
	slug,
	ends_at,
	starts_at,
}: PromotionCardProps) {
	return (
		<article className={`${css.root} ${className}`}>
			<div className={css.posterWrapper}>
				{banner && <Picture poster={banner} />}
			</div>
			<div className={css.content}>
				<div className={css.textContent}>
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
					{ends_at && starts_at && (
						<div className={css.timeLeft}>
							<p className={css.label}>До конца акции:</p>
							<p className={css.date}>
								{getTimeLeft(ends_at, new Date(starts_at))}
							</p>
						</div>
					)}
				</div>
				<Button
					className={css.button}
					href={`${SITE_NAVIGATION.akcii}/${slug}`}
					rightIcon={<CircleArrowSVG className={css.circleArrow} />}
				>
					Узнать подробнее
				</Button>
			</div>
		</article>
	);
}
