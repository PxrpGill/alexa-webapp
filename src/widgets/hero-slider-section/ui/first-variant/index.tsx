/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { FirstVariantProps } from "../../types/hero-slider-section.types";
import css from "./index.module.css";

export default function FirstVariant({
	title,
	subtitle,
	legend,
	poster,
	card,
	className,
}: FirstVariantProps) {
	return (
		<div className={`${css.root} ${className}`}>
			<div className={css.contentPart}>
				<div className={css.mobilePosterWrapper}>
					<div className={css.imageWrap}>
						{poster && <Picture poster={poster} />}
					</div>
				</div>
				<div className={css.titleBlock}>
					{subtitle && (
						<p
							className={css.subtitle}
							dangerouslySetInnerHTML={{ __html: subtitle }}
						/>
					)}
					{title && (
						<h1
							className={css.title}
							dangerouslySetInnerHTML={{ __html: title }}
						/>
					)}
					{legend && (
						<p
							className={css.mobileLegend}
							dangerouslySetInnerHTML={{ __html: legend }}
						/>
					)}
				</div>
				{card && (
					<div className={css.card}>
						{card.title && (
							<p
								className={css.cardTitle}
								dangerouslySetInnerHTML={{ __html: card.title }}
							/>
						)}
						{card.content && (
							<div
								className={css.cardContent}
								dangerouslySetInnerHTML={{ __html: card.content }}
							/>
						)}
						<Button
							className={css.button}
							rightIcon={<ButtonIconSVG className={css.icon} />}
						>
							{card.buttonText ?? "Записаться на прием"}
						</Button>
					</div>
				)}
			</div>
			<div className={css.leftPart}>
				<div className={css.posterWrapper}>
					{poster && <Picture poster={poster} />}
				</div>
				{legend && (
					<p
						className={css.legend}
						dangerouslySetInnerHTML={{ __html: legend }}
					/>
				)}
			</div>
		</div>
	);
}
