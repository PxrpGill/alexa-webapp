/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import type { TableImageSectionProps } from "./types/table-image-section.types";

export default function TableImageSection({
	title,
	description,
	poster,
	className,
}: TableImageSectionProps) {
	if (!poster) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			<div className={css.titleBlock}>
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
			</div>
			<div className={css.imageWrapper}>
				{poster && <Picture poster={poster} />}
			</div>
		</AnimationWrapper>
	);
}
