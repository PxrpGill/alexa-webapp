/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconSvg from "@/public/icons/button-teeth.svg";

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import type { StillQuestionProps } from "./types/still-questions.types";

export default function StillQuestions({
	poster,
	title,
	description,
	buttonText,
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
					<p
						dangerouslySetInnerHTML={{ __html: description }}
						className={css.description}
					/>
				)}
				<Button rightIcon={<ButtonIconSvg className={css.icon} />}>
					{buttonText ?? "Оставить заявку"}
				</Button>
			</div>
		</AnimationWrapper>
	);
}
