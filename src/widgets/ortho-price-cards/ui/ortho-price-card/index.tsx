/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import { defineButtonProps } from "@/shared/helpers/define-site-button-props";
import { formatPrice } from "@/shared/helpers/format-price";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { OrthoPriceCardProps } from "../../types/ortho-price-cards.types";
import css from "./index.module.css";

export default function OrthoPriceCard({
	chips,
	className,
	title,
	peculiarities,
	poster,
	price,
	indications,
	advantages,
	button,
}: OrthoPriceCardProps) {
	return (
		<article className={`${css.root} ${className}`}>
			<div className={css.posterWrapper}>
				{Array.isArray(chips) && (
					<ul className={css.chips}>
						{chips.map((chip, index) => (
							<li
								key={index}
								dangerouslySetInnerHTML={{ __html: chip }}
								className={css.chip}
							/>
						))}
					</ul>
				)}
				{title && (
					<strong
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{price && (
					<p className={css.price}>от&nbsp;{formatPrice(price)}&nbsp;₽</p>
				)}
				{poster && <Picture poster={poster} className={css.poster} />}
			</div>

			{Array.isArray(indications) && (
				<ul className={css.indicationsWrapper}>
					{indications.map((indication, index) => (
						<li key={index} className={css.indicationBlock}>
							{indication.label && (
								<p
									dangerouslySetInnerHTML={{ __html: indication.label }}
									className={css.indicationLabel}
								/>
							)}
							{indication.description && (
								<p
									dangerouslySetInnerHTML={{ __html: indication.description }}
									className={css.indicationDescription}
								/>
							)}
						</li>
					))}
				</ul>
			)}

			{Array.isArray(advantages) && (
				<div className={css.advantagesWrapper}>
					<strong className={css.blockLabel}>Преимущества</strong>
					<ul className={css.advantagesList}>
						{advantages.map((advantage, index) => (
							<li
								key={index}
								className={css.advantage}
								dangerouslySetInnerHTML={{ __html: advantage }}
							/>
						))}
					</ul>
				</div>
			)}

			{Array.isArray(peculiarities) && (
				<div className={css.peculiaritiesWrapper}>
					<strong className={css.blockLabel}>Особенности</strong>
					<ul className={css.peculiaritiesList}>
						{peculiarities.map((peculiarity, index) => (
							<li
								key={index}
								className={css.peculiarity}
								dangerouslySetInnerHTML={{ __html: peculiarity }}
							/>
						))}
					</ul>
				</div>
			)}

			<div className={css.controls}>
				<Button
					{...defineButtonProps(button)}
					className={css.button}
					rightIcon={<ButtonIconSVG className={css.icon} />}
				>
					{button.title}
				</Button>
			</div>
		</article>
	);
}
