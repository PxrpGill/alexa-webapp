/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { type PropsWithChildren, useCallback, useMemo, useState } from "react";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import css from "./index.module.css";

export type MainTabProps = {
	title: string;
	tabKey: string;
};

export type TabContentProps = {
	contentKey: string;
} & PropsWithChildren;

export type MainTabsProps = {
	tabs?: Array<MainTabProps>;
	tabContents?: Array<TabContentProps>;
} & PropsWithClassName;

export default function MainTabs({ tabs, tabContents }: MainTabsProps) {
	const [activeTab, setActiveTab] = useState<string>(
		tabs?.length ? tabs[0].tabKey : "",
	);

	const tabsContentMap = useMemo(() => {
		if (!tabContents?.length) return null;

		return new Map(
			tabContents?.map((tabContent) => [
				tabContent.contentKey,
				tabContent.children,
			]),
		);
	}, [tabContents]);

	const handleButtonClick = useCallback((tabKey?: string) => {
		if (!tabKey) return null;

		setActiveTab(tabKey);
	}, []);

	if (!(tabContents?.length && tabs?.length)) return null;

	return (
		<div className={`${css.root}`}>
			<div className={css.tabsWrapper}>
				{tabs.map((tab, tabIndex) => (
					<Button
						onClick={() => handleButtonClick(tab.tabKey)}
						key={tabIndex}
						className={`${css.button} ${activeTab === tab.tabKey && css.active}`}
						theme={activeTab === tab.tabKey ? "green" : "transparent"}
					>
						{tab.title}
					</Button>
				))}
			</div>
			<AnimationWrapper className={css.tabContent} key={activeTab}>
				{tabsContentMap?.get(activeTab)}
			</AnimationWrapper>
		</div>
	);
}
