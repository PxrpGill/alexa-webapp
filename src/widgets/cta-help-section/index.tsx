/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import { defineButtonProps } from "@/shared/helpers/define-site-button-props";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import css from "./index.module.css";
import type { CtaHelpSectionProps } from "./types/cta-help-section.types";

export default function CtaHelpSection({
	title,
	description,
	button,
	className,
}: CtaHelpSectionProps) {
	if (!(title || description)) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			<div className={css.wrapper}>
				<div className={css.titleBlock}>
					{title && (
						<h2
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
					<div className={css.rightPart}>
						<Button
							theme="white"
							className={css.button}
							rightIcon={<ButtonIconSVG className={css.icon} />}
							{...defineButtonProps(button)}
						>
							{button?.title}
						</Button>
					</div>
				)}
			</div>
		</AnimationWrapper>
	);
}
