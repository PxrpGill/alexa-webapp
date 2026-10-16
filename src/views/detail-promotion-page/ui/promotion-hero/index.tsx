/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import type { DetailPromotionHeroType } from "@/entities/promotion/types/detail-promotion.types";
import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import { getTimeLeft } from "@/shared/helpers/get-time-left";
import { handleSectionScroll } from "@/shared/helpers/handle-section-scroll";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";

export default function PromotionHero({
	className,
	banner,
	title,
	description,
	ends_at,
	starts_at,
	buttonText,
}: DetailPromotionHeroType & PropsWithClassName) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			<div className={css.contentPart}>
				{title && (
					<h1
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{description && (
					<div
						className={css.descriptionContent}
						dangerouslySetInnerHTML={{ __html: description }}
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
				<Button
					className={css.button}
					onClick={handleSectionScroll}
					href="#form"
					rightIcon={<ButtonIconSVG className={css.icon} />}
				>
					<span
						dangerouslySetInnerHTML={{
							__html: buttonText ?? "Оставить заявку",
						}}
					/>
				</Button>
			</div>
			<div className={css.imageWrapper}>
				{banner && <Picture poster={banner} />}
			</div>
		</AnimationWrapper>
	);
}
