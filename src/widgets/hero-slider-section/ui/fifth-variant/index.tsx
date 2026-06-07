/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { FifthVariantProps } from "../../types/hero-slider-section.types";
import css from "./index.module.css";

export default function FifthVarinat({
	title,
	legend,
	subtitle,
	card,
	className,
	poster,
}: FifthVariantProps) {
	return (
		<div className={`${css.root} ${className}`}>
			<div className={css.contentWrapper}>
				<div className={css.titleBlock}>
					{subtitle && (
						<p
							dangerouslySetInnerHTML={{ __html: subtitle }}
							className={css.subtitle}
						/>
					)}
					{title && (
						<h1
							dangerouslySetInnerHTML={{ __html: title }}
							className={css.title}
						/>
					)}
					{legend && (
						<p
							dangerouslySetInnerHTML={{ __html: legend }}
							className={css.legend}
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
						<Button
							className={css.button}
							rightIcon={<ButtonIconSVG className={css.icon} />}
						>
							{card.buttonText ?? "Записаться на прием"}
						</Button>
					</div>
				)}
			</div>
			{poster && <Picture poster={poster} />}
		</div>
	);
}
