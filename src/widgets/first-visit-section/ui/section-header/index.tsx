/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */

"use client";

import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import type { SectionHeaderProps } from "../../types/first-visit-section.types";

import css from "./index.module.css";

export default function SectionHeader({
	title,
	mockup,
	className,
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
