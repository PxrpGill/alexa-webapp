/** biome-ignore-all lint/performance/noImgElement: <explanation> */
/** biome-ignore-all lint/a11y/useAltText: <explanation> */

"use client";

import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";

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
			<h1 className={`${css.title} ${isAnimate && css.animate}`}>
				Алекса. Центр профилактики.
			</h1>
			<div className={css.background} ref={ref} />
			<img
				className={`${css.upper} ${isAnimate && css.animate}`}
				src="/system/teeth-brath.webp"
			/>
			<img
				className={`${css.downer} ${isAnimate && css.animate}`}
				src="/system/teeth-brath.webp"
			/>
		</AnimationWrapper>
	);
}
