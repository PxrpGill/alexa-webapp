/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import type { OurWorkProps } from "./types/our-work.types";

function distributeIntoColumns<T>(items: T[], columns: number): T[][] {
	return Array.from({ length: columns }, (_, col) =>
		items.filter((_, idx) => idx % columns === col),
	);
}

function PostersGrid({
	columns,
	className,
}: {
	columns: OurWorkProps["posters"][];
	className: string;
}) {
	return (
		<div className={className}>
			{columns.map((col, colIndex) => (
				<div key={colIndex} className={css.column}>
					{col?.map((poster, index) => {
						if (!poster) return <div key={`${index}-${colIndex}`} />;

						return (
							<AnimationWrapper
								as="div"
								key={`${index}-${colIndex}`}
								className={`${css.posterWrapper} ${css[poster.size]}`}
							>
								<Picture poster={poster.poster} className={`${css.poster}`} />
							</AnimationWrapper>
						);
					})}
				</div>
			))}
		</div>
	);
}

export default function OurWork({ title, className, posters }: OurWorkProps) {
	if (!posters?.length) return null;

	const desktopColumns = distributeIntoColumns(posters, 4);
	const mobileColumns = distributeIntoColumns(posters, 2);

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			{title && (
				<h2 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
			)}
			<PostersGrid columns={desktopColumns} className={css.gridDesktop} />
			<PostersGrid columns={mobileColumns} className={css.gridMobile} />
		</AnimationWrapper>
	);
}
