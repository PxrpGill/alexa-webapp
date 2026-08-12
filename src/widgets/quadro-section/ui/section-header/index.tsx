/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Picture from "@/shared/ui/picture";

import type { SectionHeaderProps } from "../../types/quadro-section.types";

import Card from "./card";
import css from "./index.module.css";

export default function SectionHeader({
	title,
	card,
	description,
	poster,
	underDescription,
}: SectionHeaderProps) {
	return (
		<AnimationWrapper as="div" className={`${css.root}`}>
			<div className={css.titleBlock}>
				{description && (
					<p
						dangerouslySetInnerHTML={{ __html: description }}
						className={css.description}
					/>
				)}
				{title && (
					<h1
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{underDescription && (
					<p
						dangerouslySetInnerHTML={{ __html: underDescription }}
						className={css.underDescription}
					/>
				)}
				{card && <Card {...card} className={css.desktopCard} />}
			</div>
			<div className={css.imageBlock}>
				{poster && <Picture poster={poster} />}
			</div>
			{card && <Card {...card} className={css.mobileCard} />}
		</AnimationWrapper>
	);
}
