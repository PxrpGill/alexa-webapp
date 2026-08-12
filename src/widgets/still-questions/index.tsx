/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import ButtonIconSvg from "@/public/icons/button-teeth.svg";
import { defineButtonProps } from "@/shared/helpers/define-site-button-props";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import type { StillQuestionProps } from "./types/still-questions.types";

export default function StillQuestions({
	poster,
	title,
	description,
	button,
	className,
}: StillQuestionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			<div className={css.imageWrapper}>
				{poster && <Picture poster={poster} />}
			</div>
			<div className={css.content}>
				{title && (
					<h2
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{description && (
					<div
						dangerouslySetInnerHTML={{ __html: description }}
						className={css.description}
					/>
				)}
				{button && (
					<Button
						className={css.button}
						rightIcon={<ButtonIconSvg className={css.icon} />}
						{...defineButtonProps(button)}
					>
						{button.title ?? "Оставить заявку"}
					</Button>
				)}
			</div>
		</AnimationWrapper>
	);
}
