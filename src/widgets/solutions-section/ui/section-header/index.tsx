/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { SectionHeaderProps } from "../../types/solutions-section.types";

import css from "./index.module.css";

export default function SectionHeader({
	title,
	description,
	className,
}: SectionHeaderProps) {
	return (
		<div className={`${css.root} ${className} container`}>
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
