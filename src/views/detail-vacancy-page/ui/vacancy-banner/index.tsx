/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

"use client";

import type { DetailVacancyHeroType } from "@/entities/vacancies/types/detail-vacancy.types";
import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";

export default function VacancyBanner({
	vacancy_name,
	description,
	badges,
	className,
}: DetailVacancyHeroType & PropsWithClassName) {
	const { ref, isIntersecting } = useIntersectionObserver({
		freezeOnceVisible: true,
		threshold: 0.3,
	});

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			<div className={css.wrapper} ref={ref}>
				<div className={css.contentWrapper}>
					{vacancy_name && (
						<h1 className={css.title}>
							Мы ищем:
							<br /> {vacancy_name}
						</h1>
					)}
					{description && (
						<p
							dangerouslySetInnerHTML={{ __html: description }}
							className={css.description}
						/>
					)}
					{Array.isArray(badges) && badges.length > 0 && (
						<div className={css.badges}>
							{badges.map((badge, index) => (
								<div className={css.badge} key={index}>
									{badge}
								</div>
							))}
						</div>
					)}
				</div>
				<img
					src="/system/alexik.png"
					alt="Алексик с зубной щеткой"
					className={`${css.alexik} ${isIntersecting && css.show}`}
				/>
			</div>
		</AnimationWrapper>
	);
}
