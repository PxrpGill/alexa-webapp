/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import Button from "@/shared/ui/button";
import type { TextBlockProps } from "../../types/title-description-slider.types";
import css from "./index.module.css";

export default function TextBlock({
	title,
	description,
	className,
	withButton,
}: TextBlockProps) {
	return (
		<article className={`${css.root} ${className}`.trim()}>
			{title && (
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{description && (
				<p
					dangerouslySetInnerHTML={{ __html: description }}
					className={css.description}
				/>
			)}
			{withButton && (
				<Button
					className={css.button}
					rightIcon={<ButtonIconSVG className={css.icon} />}
				>
					Получить консультацию
				</Button>
			)}
		</article>
	);
}
