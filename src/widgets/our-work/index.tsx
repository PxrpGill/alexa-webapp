/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Picture from "@/shared/ui/picture";

import css from "./index.module.css";
import type { OurWorkProps } from "./types/our-work.types";

const COLUMNS = 4;

function distributeIntoColumns<T>(items: T[], columns: number): T[][] {
	return Array.from({ length: columns }, (_, col) =>
		items.filter((_, idx) => idx % columns === col),
	);
}

export default function OurWork({ title, className, posters }: OurWorkProps) {
	if (!posters?.length) return null;

	const columns = distributeIntoColumns(posters, COLUMNS);

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			{title && (
				<h2 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
			)}
			<div className={css.grid}>
				{columns.map((col, colIndex) => (
					<div key={colIndex} className={css.column}>
						{col.map((poster, index) => (
							<div
								key={index}
								className={`${css.posterWrapper} ${css[poster.size]}`}
							>
								<Picture poster={poster.poster} className={`${css.poster}`} />
							</div>
						))}
					</div>
				))}
			</div>
		</AnimationWrapper>
	);
}
