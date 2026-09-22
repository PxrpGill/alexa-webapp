/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */

"use client";

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import { handleSectionScroll } from "@/shared/helpers/handle-section-scroll";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { VacanciesHeroProps } from "../../types/vacancies-hero.types";
import css from "./index.module.css";

export default function VacanciesHero({
	title,
	description,
	poster,
	className,
}: VacanciesHeroProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			<div className={css.wrapper}>
				<div className={css.posterWrapper}>
					{poster && <Picture poster={poster} />}
				</div>
				<article className={css.information}>
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
					<div className={css.card}>
						<Button
							className={css.button}
							rightIcon={<ButtonIconSVG className={css.icon} />}
							onClick={handleSectionScroll}
							href="#vacancies"
						>
							Смотреть активные вакансии
						</Button>
						<img
							className={css.leftAlexik}
							src="/mock/vacancies/alexik-with-heart.png"
							alt="Алексик с сердцем"
						/>
						<img
							className={css.rightAlexik}
							src="/mock/vacancies/alexik-hello.png"
							alt="Алексик приветствует"
						/>
					</div>
				</article>
			</div>
		</AnimationWrapper>
	);
}
