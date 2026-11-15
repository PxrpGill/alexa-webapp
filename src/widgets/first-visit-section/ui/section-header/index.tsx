/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */

"use client";

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import { defineButtonProps } from "@/shared/helpers/define-site-button-props";
import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import Button from "@/shared/ui/button";
import type { SectionHeaderProps } from "../../types/first-visit-section.types";
import css from "./index.module.css";

export default function SectionHeader({
	title,
	mockup,
	className,
	button,
}: SectionHeaderProps) {
	const { ref, isIntersecting } = useIntersectionObserver({
		threshold: 1,
		freezeOnceVisible: true,
	});

	if (!title) return null;

	return (
		<div
			className={`${css.root} ${className} ${isIntersecting && css.visible}`}
			ref={ref}
		>
			{title && (
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{button && (
				<Button
					className={css.button}
					rightIcon={<ButtonIconSVG className={css.icon} />}
					{...defineButtonProps(button)}
				>
					{button.title}
				</Button>
			)}
			{mockup && (
				<img
					src={mockup}
					alt="Алексик - талисман клиники"
					className={css.mockup}
				/>
			)}
		</div>
	);
}
