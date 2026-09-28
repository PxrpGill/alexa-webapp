/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */

"use client";

import ReactDOM from "react-dom";

import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { PromotionHeroProps } from "../../types/promotion-hero-types";
import css from "./index.module.css";

/**
 * Секция первого экрана, поэтому картинки не должны догружаться по ходу
 * анимации: пути вынесены сюда, чтобы те же три файла уходили в <link
 * rel="preload"> в head ещё до разбора разметки.
 */
const CERTIFICATES = {
	/** «Сертификат на 15.000 р.» — тёмно-зелёный с узором */
	green: "/system/certificates/1-green.webp",
	/** «Сертификат на 5.000 р.» — белый */
	white: "/system/certificates/2-white.webp",
	/** «Сертификат на 10.000 р.» — градиентный */
	gradient: "/system/certificates/3-green.webp",
} as const;

export default function PromotionHero({
	title,
	description,
	className,
}: PromotionHeroProps) {
	const { ref, isIntersecting } = useIntersectionObserver({
		threshold: 0.3,
		freezeOnceVisible: true,
	});

	for (const src of Object.values(CERTIFICATES)) {
		ReactDOM.preload(src, { as: "image", fetchPriority: "high" });
	}

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
						src={CERTIFICATES.gradient}
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.first}`}
						fetchPriority="high"
						loading="eager"
					/>
					<img
						src={CERTIFICATES.green}
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.second}`}
						fetchPriority="high"
						loading="eager"
					/>
					<img
						src={CERTIFICATES.gradient}
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.third}`}
						fetchPriority="high"
						loading="eager"
					/>
					<img
						src={CERTIFICATES.green}
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.fourth}`}
						fetchPriority="high"
						loading="eager"
					/>
					<img
						src={CERTIFICATES.white}
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.fifth}`}
						fetchPriority="high"
						loading="eager"
					/>
					<img
						src={CERTIFICATES.white}
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.sixth}`}
						fetchPriority="high"
						loading="eager"
					/>
					<img
						src={CERTIFICATES.gradient}
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.seventh}`}
						fetchPriority="high"
						loading="eager"
					/>
					<img
						src={CERTIFICATES.green}
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.eighth}`}
						fetchPriority="high"
						loading="eager"
					/>
					<img
						src={CERTIFICATES.green}
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.ninth}`}
						fetchPriority="high"
						loading="eager"
					/>
					{/* Только для мобильного макета — там белых карточек три, а не две */}
					<img
						src={CERTIFICATES.white}
						alt="Изображение сертификата стоматологии"
						className={`${css.certificate} ${css.tenth}`}
						fetchPriority="high"
						loading="eager"
					/>
				</div>
			</div>
		</AnimationWrapper>
	);
}
