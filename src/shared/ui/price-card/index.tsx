/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import ButtonIconSvg from "@/public/icons/button-teeth.svg";
import { defineButtonProps } from "@/shared/helpers/define-site-button-props";
import type { PriceCardProps } from "@/shared/types/price-card.types";
import Button from "../button";
import css from "./index.module.css";

export default function PriceCard({
	title,
	content,
	button,
	className,
}: PriceCardProps) {
	return (
		<article className={`${css.root} ${className}`}>
			{title && (
				<h6 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{content && (
				<div
					className={css.content}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			)}
			{button && (
				<Button
					theme="transparent"
					className={css.button}
					rightIcon={<ButtonIconSvg className={css.icon} />}
					{...defineButtonProps(button)}
				>
					{button.title ?? "Консультация"}
				</Button>
			)}
		</article>
	);
}
