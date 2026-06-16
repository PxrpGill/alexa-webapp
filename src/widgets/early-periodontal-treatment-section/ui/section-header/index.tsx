/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { SectionHeaderProps } from "../../types/early-periodontal-treatment-section.types";

import css from "./index.module.css";

export default function SectionHeader({
	title,
	description,
	legend,
	className,
}: SectionHeaderProps) {
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
			{legend && (
				<p
					dangerouslySetInnerHTML={{ __html: legend }}
					className={css.legend}
				/>
			)}
		</div>
	);
}
