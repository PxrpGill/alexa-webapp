/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

"use client";

import { useState } from "react";
import ArrowSVG from "@/public/icons/slider-arrow.svg";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";

export default function Slider({
	posters,
	className,
}: { posters?: PictureFormatType[] } & PropsWithClassName) {
	const [activeIndex, toggleActiveIndex] = useState<number>(0);

	if (!posters?.length) return null;

	const withoutButtons = posters.length <= 1;

	const handlePrevButton = () => {
		if (activeIndex === 0) {
			toggleActiveIndex(posters.length - 1);

			return;
		}

		toggleActiveIndex((prev) => prev - 1);
	};

	const handleNextButton = () => {
		if (activeIndex === posters.length - 1) {
			toggleActiveIndex(0);

			return;
		}

		toggleActiveIndex((prev) => prev + 1);
	};

	return (
		<div className={`${css.root} ${className}`.trim()}>
			{posters.map((poster, index) => (
				<Picture
					poster={poster}
					key={index}
					className={`${css.poster} ${index === activeIndex && css.active}`}
				/>
			))}
			{!withoutButtons && (
				<>
					<button
						className={css.buttonPrev}
						type="button"
						onClick={handlePrevButton}
					>
						<ArrowSVG className={css.arrow} />
					</button>
					<button
						className={css.buttonNext}
						type="button"
						onClick={handleNextButton}
					>
						<ArrowSVG className={css.arrow} />
					</button>
				</>
			)}
		</div>
	);
}
