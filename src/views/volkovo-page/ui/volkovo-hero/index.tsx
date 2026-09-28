/** biome-ignore-all lint/performance/noImgElement: intentional suppression */
/** biome-ignore-all lint/a11y/useAltText: intentional suppression */

"use client";

import { useEffect, useState } from "react";

import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";

/**
 * Первая секция страницы, обе щётки — один и тот же файл. Путь вынесен сюда,
 * чтобы его же отдать в preload ниже.
 */
const TEETH_BRUSH_SRC = "/system/teeth-brath.webp";

export default function VolkovoHero({ className }: PropsWithClassName) {
	const { ref, isIntersecting } = useIntersectionObserver();
	const [isAnimate, toggleAnimate] = useState<boolean>(false);

	useEffect(() => {
		if (!isIntersecting) return;

		const timeoutId = setTimeout(() => {
			toggleAnimate(true);
		}, 367);

		return () => clearTimeout(timeoutId);
	}, [isIntersecting]);

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className}`}
			direction="fade"
		>
			{/* React поднимает этот link в head, так что загрузка стартует
          до разбора разметки секции */}
			<link
				rel="preload"
				as="image"
				href={TEETH_BRUSH_SRC}
				fetchPriority="high"
			/>
			<h1 className={`${css.title} ${isAnimate && css.animate}`}>
				Алекса. Центр профилактики.
			</h1>
			<div className={css.background} ref={ref} />
			<img
				className={`${css.upper} ${isAnimate && css.animate}`}
				src={TEETH_BRUSH_SRC}
				loading="eager"
				fetchPriority="high"
				aria-label="Зубная щетка"
			/>
			<img
				className={`${css.downer} ${isAnimate && css.animate}`}
				fetchPriority="high"
				src={TEETH_BRUSH_SRC}
				loading="eager"
				aria-label="Зубная щетка"
			/>
		</AnimationWrapper>
	);
}
