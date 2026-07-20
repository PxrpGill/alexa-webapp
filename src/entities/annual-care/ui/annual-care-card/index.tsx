/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

"use client";

import ButtonLogoSVG from "@/public/icons/button-teeth.svg";
import CheckSVG from "@/public/icons/check.svg";
import { formatPrice } from "@/shared/helpers/format-price";
import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import { definePricePeriod } from "../../helpers/define-price-period";
import type { AnnualCareCardProps } from "../../types/annual-care-card.types";
import css from "./index.module.css";

export default function AnnualCareCard({
	title,
	description,
	className,
	period,
	poster,
	price,
	button,
	list,
}: AnnualCareCardProps) {
	const { ref, isIntersecting } = useIntersectionObserver({
		freezeOnceVisible: true,
		threshold: 0.3,
	});

	return (
		<article className={`${css.root} ${className}`} ref={ref}>
			<div className={css.titleWrapper}>
				<div className={css.titleBlock}>
					{title && (
						<h4
							dangerouslySetInnerHTML={{ __html: title }}
							className={css.title}
						/>
					)}
					{poster && (
						<Picture
							poster={poster}
							className={`${css.poster} ${isIntersecting ? css.visible : ""}`}
						/>
					)}
				</div>
				<div className={css.shadow} />
			</div>

			<div className={css.contentBlock}>
				<div className={css.priceBlock}>
					{price && (
						<p className={css.price}>
							<span className={css.priceElement}>{formatPrice(price)} ₽</span>{" "}
							{period && (
								<span className={css.pricePeriod}>
									{definePricePeriod(period)}
								</span>
							)}
						</p>
					)}
					<div className={css.hr} />
					{description && (
						<p
							dangerouslySetInnerHTML={{ __html: description }}
							className={css.description}
						/>
					)}
				</div>

				{list?.length && (
					<ul className={css.list}>
						{list.map((paragraph, index) => (
							<li key={index} className={css.paragraph}>
								<CheckSVG className={css.check} />
								<p
									dangerouslySetInnerHTML={{ __html: paragraph }}
									className={css.paragraphContent}
								/>
							</li>
						))}
					</ul>
				)}

				{button && (
					<Button
						target={button.target}
						href={button.href}
						rightIcon={<ButtonLogoSVG className={css.icon} />}
						className={css.button}
					>
						{button.title}
					</Button>
				)}
			</div>
		</article>
	);
}
