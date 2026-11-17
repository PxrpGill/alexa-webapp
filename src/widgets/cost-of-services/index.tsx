/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/complexity/useOptionalChain: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
"use client";

import { useCallback, useRef, useState } from "react";

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";

import css from "./index.module.css";
import {
	INITIAL_VISIBLE_COUNT_OF_CARDS,
	SHOW_MORE_VISIBLE_COUNT_OF_CARDS,
} from "./models/cost-of-services.constants";
import type { CostOfServicesProps } from "./types/cost-of-services.types";
import CostOfServicesCard from "./ui/cost-of-services-card";
import Tabs from "./ui/tabs";

export default function CostOfServices({
	title,
	cards,
	tabs,
	className,
}: CostOfServicesProps) {
	const timeOutRef = useRef<number>(0);
	const [visibleCount, setVisibleCount] = useState(
		INITIAL_VISIBLE_COUNT_OF_CARDS,
	);
	const [activeTabKey, setActiveTab] = useState<string>(
		(tabs && tabs[0]?.tabKey) ?? "",
	);

	const visibleCards = cards?.slice(0, visibleCount);

	const handleShowMore = () => {
		if (timeOutRef.current) clearTimeout(timeOutRef.current);

		setVisibleCount((prev) => prev + SHOW_MORE_VISIBLE_COUNT_OF_CARDS);

		timeOutRef.current = Number(
			setTimeout(() => {
				document.getElementById("controlsOfCosts")?.scrollIntoView({
					behavior: "smooth",
					block: "end",
				});
			}, 0.167),
		);
	};

	const handleClose = () => {
		if (timeOutRef.current) clearTimeout(timeOutRef.current);

		if (visibleCount <= INITIAL_VISIBLE_COUNT_OF_CARDS) return;

		setVisibleCount((prev) => prev - SHOW_MORE_VISIBLE_COUNT_OF_CARDS);

		timeOutRef.current = Number(
			setTimeout(() => {
				document.getElementById("controlsOfCosts")?.scrollIntoView({
					behavior: "smooth",
					block: "end",
				});
			}, 0.167),
		);
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

			{(cards?.length ?? 0) > INITIAL_VISIBLE_COUNT_OF_CARDS && (
				<div className={`${css.controls} container`} id="controlsOfCosts">
					<Button
						className={css.getMoreButton}
						onClick={handleShowMore}
						disabled={visibleCount >= (cards?.length ?? 1)}
					>
						Показать еще
					</Button>
					<Button
						className={css.closeButton}
						onClick={handleClose}
						disabled={visibleCount <= INITIAL_VISIBLE_COUNT_OF_CARDS}
					>
						Показать меньше
					</Button>
				</div>
			)}
		</AnimationWrapper>
	);
}
