/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */

"use client";

import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { PromotionHeroProps } from "../../types/promotion-hero-types";
import css from "./index.module.css";

export default function PromotionHero({
	title,
	description,
	className,
}: PromotionHeroProps) {
	const { ref, isIntersecting } = useIntersectionObserver();
	if (!(title || description)) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			<div className={css.wrapper}>
				<article className={css.contentPart}>
					{title && (
						<h1
							dangerouslySetInnerHTML={{ __html: title }}
							className={css.title}
						/>
					)}
					{description && (
						<p
							dangerouslySetInnerHTML={{ __html: description }}
							className={css.description}
						/>
					)}
				</article>
				<div
					className={`${css.promotionsWrapper} ${isIntersecting && css.visible}`}
					ref={ref}
				>
					<img
						src="/system/certificates/3-green.webp"
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.first}`}
					/>
					<img
						src="/system/certificates/1-green.webp"
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.second}`}
					/>
					<img
						src="/system/certificates/3-green.webp"
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.third}`}
					/>
					<img
						src="/system/certificates/1-green.webp"
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.fourth}`}
					/>
					<img
						src="/system/certificates/2-white.webp"
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.fifth}`}
					/>
					<img
						src="/system/certificates/2-white.webp"
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.sixth}`}
					/>
					<img
						src="/system/certificates/3-green.webp"
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.seventh}`}
					/>
					<img
						src="/system/certificates/1-green.webp"
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.eighth}`}
					/>
					<img
						src="/system/certificates/1-green.webp"
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.ninth}`}
					/>
				</div>
			</div>
		</AnimationWrapper>
	);
}
