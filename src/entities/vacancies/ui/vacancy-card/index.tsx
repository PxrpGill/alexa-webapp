/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import Link from "next/link";
import CircleArrowSVG from "@/public/icons/circle-arrow.svg";
import BranchIcon from "@/public/icons/point.svg";
import ArrowSVG from "@/public/icons/white-arrow.svg";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import { BRANCH_COOKIES_VALUES } from "@/shared/hooks/set-branch-in-cookies";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import type { VacancyCardProps } from "../../types/vacancy-card.types";
import css from "./index.module.css";

export default function VacancyCard({
	className,
	vacancy_name,
	description,
	branch,
	delay = "0s",
	slug,
}: VacancyCardProps) {
	return (
		<AnimationWrapper
			as="article"
			className={`${css.root} ${className}`}
			direction="fade"
			delay={delay}
		>
			<div className={css.wrapper}>
				<div className={css.titleBlock}>
					{vacancy_name && (
						<h4
							dangerouslySetInnerHTML={{ __html: vacancy_name }}
							className={css.title}
						/>
					)}
					{description && (
						<p
							dangerouslySetInnerHTML={{ __html: description }}
							className={css.description}
						/>
					)}
				</div>
				{branch && (
					<div className={css.branchWrapper}>
						<BranchIcon className={css.point} />
						<p>
							{branch === BRANCH_COOKIES_VALUES.volkova
								? "Ростов-на-Дону"
								: "Посёлок Янтарный"}
						</p>
					</div>
				)}
			</div>
			<div className={css.arrowWrapper}>
				<ArrowSVG className={`${css.arrow} ${css.main}`} />
				<ArrowSVG className={`${css.arrow} ${css.hidden}`} />
			</div>
			<Button
				rightIcon={<CircleArrowSVG className={css.circleArrow} />}
				className={css.button}
			>
				Узнать подробнее
			</Button>
			{slug && (
				<Link
					className={css.link}
					href={SITE_NAVIGATION.vakansii + "/" + slug}
					aria-label={`Перейти к вакансии: ${vacancy_name}`}
				/>
			)}
		</AnimationWrapper>
	);
}
