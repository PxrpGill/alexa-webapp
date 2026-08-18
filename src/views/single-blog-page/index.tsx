/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { SingleNewsProps } from "@/entities/news/types/news-card.types";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";

export default function SingleBlogPage({ content, poster }: SingleNewsProps) {
	return (
		<main className={css.root}>
			{poster && (
				<div className={css.posterWrapper}>
					<Picture poster={poster} />
				</div>
			)}
			{content && (
				<div className="container">
					<div
						className={`${css.content}`}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</div>
			)}
		</main>
	);
}
