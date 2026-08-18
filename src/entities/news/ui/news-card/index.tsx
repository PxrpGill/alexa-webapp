/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import Link from "next/link";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import { formatDayMonthYear } from "@/shared/helpers/format-day-month-year";
import Picture from "@/shared/ui/picture";
import type { NewsCardProps } from "../../types/news-card.types";
import css from "./index.module.css";

export default function NewsCard({
	title,
	description,
	className,
	publishDate,
	previewPoster,
	slug,
}: NewsCardProps) {
	return (
		<article className={`${css.root} ${className}`}>
			<div className={css.wrapper}>
				{previewPoster && <Picture poster={previewPoster} />}
			</div>
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
			<Link className={css.link} href={SITE_NAVIGATION.blog + "/" + slug} />
		</article>
	);
}
