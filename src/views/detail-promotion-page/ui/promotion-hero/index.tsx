/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
import type { DetailPromotionHeroType } from "@/entities/promotion/types/detail-promotion.types";
import { getTimeLeft } from "@/shared/helpers/get-time-left";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";

export default function PromotionHero({
	className,
	banner,
	title,
	description,
	ends_at,
	starts_at,
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
			</div>
			<div className={css.imageWrapper}>
				{banner && <Picture poster={banner} />}
			</div>
		</AnimationWrapper>
	);
}
