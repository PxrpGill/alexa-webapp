"use client";

import { type ReactNode, useEffect } from "react";
import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { usePageFilterContentContext } from "../../models/page-filter-content-context";

type PageContentResultProps = {
	content: Map<string, ReactNode>;
} & PropsWithClassName;

export default function PageContentResult({
	className,
	content,
}: PageContentResultProps) {
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
	const { activeCategorySlug, toggleChangePanelVisible } =
		usePageFilterContentContext();

	useEffect(() => {
		toggleChangePanelVisible(isIntersecting);
	}, [isIntersecting, toggleChangePanelVisible]);

	return (
		<div className={className} ref={ref}>
			{content.get(activeCategorySlug)}
		</div>
	);
}
