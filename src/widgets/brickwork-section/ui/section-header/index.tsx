/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { SectionHeaderProps } from "../../types/brickwork-section.types";

import css from "./index.module.css";

export default function SectionHeader({
	title,
	description,
	className,
}: SectionHeaderProps) {
	if (!(title || description)) return null;

	return (
		<div className={`${css.root} ${className}`}>
			{title && (
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{description && (
				<p
					dangerouslySetInnerHTML={{ __html: description }}
					className={css.description}
				/>
			)}
		</div>
	);
}
