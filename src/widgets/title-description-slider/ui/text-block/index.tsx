/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { TextBlockProps } from "../../types/title-description-slider.types";
import css from "./index.module.css";

export default function TextBlock({
	title,
	description,
	className,
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
		</article>
	);
}
