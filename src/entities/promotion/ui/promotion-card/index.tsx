/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { PromotionCardProps } from "../../types/promotion-card.types";
import css from "./index.module.css";

export default function PromotionCard({
	title,
	description,
	className,
	poster,
	buttonText,
}: PromotionCardProps) {
	return (
		<article className={`${css.root} ${className}`}>
			{poster && (
				<div className={css.posterWrapper}>
					<Picture poster={poster} />
				</div>
			)}
			<div className={css.content}>
				{title && (
					<h5
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
				{buttonText && <Button className={css.button}>{buttonText}</Button>}
			</div>
		</article>
	);
}
