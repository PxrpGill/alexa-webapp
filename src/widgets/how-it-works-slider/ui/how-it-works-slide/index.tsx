/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ArrowSVG from "@/public/icons/arrow-without-stick.svg";
import Picture from "@/shared/ui/picture";
import type { HowItWorksSlideProps } from "../../types/how-it-works-slider.types";
import css from "./index.module.css";

export default function HowItWorksSlide({
	title,
	description,
	className,
	poster,
	sequenceNumber,
	handlePrevSlide,
	handleNextSlide,
}: HowItWorksSlideProps) {
	return (
		<div className={`${css.root} ${className}`}>
			<div className={css.textContent}>
				{title && (
					<strong
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
				<div className={css.controllers}>
					<div className={css.controllersWrapper}>
						<button
							type="button"
							className={css.controller}
							onClick={handlePrevSlide}
						>
							<ArrowSVG className={`${css.arrow} ${css.leftArrow}`} />
						</button>
						<button
							type="button"
							className={css.controller}
							onClick={handleNextSlide}
						>
							<ArrowSVG className={`${css.arrow} ${css.rightArrow}`} />
						</button>
					</div>
				</div>
			</div>
			<div className={css.posterWrapper}>
				{poster && <Picture poster={poster} />}
			</div>
			{sequenceNumber && (
				<p className={css.sequenceNumber}>
					{sequenceNumber >= 10 ? sequenceNumber : `0${sequenceNumber}`}
				</p>
			)}
		</div>
	);
}
