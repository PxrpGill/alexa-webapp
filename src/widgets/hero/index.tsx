/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import { defineButtonProps } from "@/shared/helpers/define-site-button-props";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import type { HeroProps } from "./types/hero.types";

export default function Hero({
	className,
	title,
	description,
	button,
	poster,
}: HeroProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			<div className={css.content}>
				<div className={css.titleBlock}>
					{title && (
						<h1
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
				</div>
				{button && (
					<Button
						className={css.button}
						rightIcon={<ButtonIconSVG className={css.icon} />}
						{...defineButtonProps(button)}
					>
						{button.title}
					</Button>
				)}
			</div>
			<div className={css.posterWrapper}>
				{poster && <Picture poster={poster} />}
			</div>
		</AnimationWrapper>
	);
}
