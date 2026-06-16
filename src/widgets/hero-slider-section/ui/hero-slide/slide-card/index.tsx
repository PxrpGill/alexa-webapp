/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import Button from "@/shared/ui/button";
import type { SlideCardProps } from "@/widgets/hero-slider-section/types/hero-slider-section.types";
import css from "./index.module.css";

export default function SlideCard({
	title,
	content,
	buttonText,
	className,
}: SlideCardProps) {
	return (
		<article className={`${css.root} ${className}`}>
			{title && (
				<p dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{content && (
				<div
					dangerouslySetInnerHTML={{ __html: content }}
					className={css.content}
				/>
			)}
			<Button
				className={css.button}
				rightIcon={<ButtonIconSVG className={css.icon} />}
			>
				{buttonText ?? "Записаться на прием"}
			</Button>
		</article>
	);
}
