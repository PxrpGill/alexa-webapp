/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */

import type { SectionHeaderProps } from "../../types/recommends-for-children.types";

import css from "./index.module.css";

export default function SectionHeader({
	title,
	description,
	mockup,
	className,
}: SectionHeaderProps) {
	return (
		<div className={`${css.root} ${className}`}>
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
			{mockup && (
				<img
					src={mockup}
					alt="Алексик - талисман клиники"
					className={css.mockup}
				/>
			)}
		</div>
	);
}
