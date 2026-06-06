/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { formatDayMonthYear } from "@/shared/helpers/format-day-month-year";
import Picture from "@/shared/ui/picture";
import type { NewsCardProps } from "../../types/news-card.types";
import css from "./index.module.css";

export default function NewsCard({
	title,
	description,
	className,
	poster,
	publishDate,
}: NewsCardProps) {
	return (
		<article className={`${css.root} ${className}`}>
			<div className={css.wrapper}>{poster && <Picture poster={poster} />}</div>
			<header className={css.info}>
				{title && (
					<h5
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
				{publishDate && (
					<time className={css.time}>{formatDayMonthYear(publishDate)}</time>
				)}
			</header>
		</article>
	);
}
