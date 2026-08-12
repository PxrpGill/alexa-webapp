/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/complexity/useOptionalChain: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
"use client";

import { useCallback, useState } from "react";

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";

import css from "./index.module.css";
import type { CostOfServicesProps } from "./types/cost-of-services.types";
import CostOfServicesCard from "./ui/cost-of-services-card";
import Tabs from "./ui/tabs";

export default function CostOfServices({
	title,
	cards,
	tabs,
	className,
}: CostOfServicesProps) {
	const [visibleCount, setVisibleCount] = useState(4);
	const [activeTabKey, setActiveTab] = useState<string>(
		(tabs && tabs[0]?.tabKey) ?? "",
	);

	const visibleCards = cards?.slice(0, visibleCount);
	const hasMore = visibleCount < (cards?.length ?? 0);

	const handleShowMore = () => {
		setVisibleCount((prev) => prev + 4);
	};

	const handleTabChange = useCallback((tabKey: string) => {
		setActiveTab(tabKey);
	}, []);

	return (
		<AnimationWrapper as="section" className={`${css.root} ${className}`}>
			<div className={`${css.sectionHeader} container`}>
				{title && (
					<h2
						dangerouslySetInnerHTML={{ __html: title }}
						className={`${css.title}`}
					/>
				)}
			</div>

			{tabs && (
				<Tabs
					tabs={tabs}
					onTabChange={handleTabChange}
					activeTabKey={activeTabKey}
				/>
			)}

			<ul className={`${css.list} container`}>
				{visibleCards?.map((card, index) => (
					<AnimationWrapper as="li" key={index} className={css.paragraph}>
						<CostOfServicesCard {...card} className={css.card} />
					</AnimationWrapper>
				))}
			</ul>

			<div className="container">
				{hasMore && (
					<Button className={css.getMoreButton} onClick={handleShowMore}>
						Показать еще
					</Button>
				)}
			</div>
		</AnimationWrapper>
	);
}
