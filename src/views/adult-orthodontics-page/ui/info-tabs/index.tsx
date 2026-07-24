"use client";

import { useCallback, useState } from "react";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import CostOfServices from "@/widgets/cost-of-services";
import TabsBlock from "@/widgets/health-for-family/ui/tabs-block";
import StepsForPerfectSmile from "@/widgets/steps-for-perfect-smile";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import WhatServiceIncludes from "@/widgets/what-service-includes";
import type { InfoTabsProps } from "../../types/info-tabs.types";
import ElinersTable from "../eliners-table";
import css from "./index.module.css";

export default function InfoTabs({
	tabsBlock,
	content,
	className,
}: InfoTabsProps) {
	const [activeKey, setActiveKey] = useState<string>(
		content ? Object.keys(content)[0] : "",
	);

	const handleKeyChange = useCallback((keyStr?: string) => {
		if (!keyStr) return;

		setActiveKey(keyStr);
	}, []);

	if (!(tabsBlock && content)) return null;

	return (
		<AnimationWrapper as="section" className={`${css.root} ${className}`}>
			<div className="container">
				<TabsBlock
					{...tabsBlock}
					activeKey={activeKey}
					setActiveKey={handleKeyChange}
				/>
			</div>
			{content[activeKey] && (
				<div className={css.contentWrapper} key={activeKey}>
					{content[activeKey].whatIncludes && (
						<WhatServiceIncludes
							className={`${css.whatServiceIncludes}`}
							{...content[activeKey].whatIncludes}
						/>
					)}
					{content[activeKey].stickyTitle && (
						<TitleStickySection
							{...content[activeKey].stickyTitle}
							className={css.stickyTitle}
						/>
					)}
					{content[activeKey].stepsForPerfectSmile && (
						<StepsForPerfectSmile
							className={css.stepsForPerfectSmile}
							{...content[activeKey].stepsForPerfectSmile}
						/>
					)}
					{content[activeKey].costs && (
						<CostOfServices
							className={css.costs}
							{...content[activeKey].costs}
						/>
					)}
					{content[activeKey].eliners && (
						<ElinersTable
							{...content[activeKey].eliners}
							className={css.eliners}
						/>
					)}
				</div>
			)}
		</AnimationWrapper>
	);
}
