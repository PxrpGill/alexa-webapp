/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { SecondVariantProps } from "../../types/hero-slider-section.types";
import css from "./index.module.css";

export default function SecondVariant({
	className,
	poster,
	legend,
	title,
	subtitle,
	card,
}: SecondVariantProps) {
	return (
		<div className={`${css.root} ${className}`}>
			<div className={css.contentWrapper}>
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
							className={css.legend}
							dangerouslySetInnerHTML={{ __html: legend }}
						/>
					)}
				</div>
				{card && (
					<div className={css.card}>
						{card.title && (
							<p
								dangerouslySetInnerHTML={{ __html: card.title }}
								className={css.cardTitle}
							/>
						)}
						{card.content && (
							<div
								dangerouslySetInnerHTML={{ __html: card.content }}
								className={css.cardContent}
							/>
						)}
						{card.buttonText && (
							<Button
								className={css.button}
								rightIcon={<ButtonIconSVG className={css.icon} />}
							>
								{card.buttonText ?? "Записаться на прием"}
							</Button>
						)}
					</div>
				)}
			</div>
			{poster && <Picture poster={poster} />}
		</div>
	);
}
