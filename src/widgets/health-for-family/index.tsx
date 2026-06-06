"use client";

import { useState } from "react";
import css from "./index.module.css";
import type { HealthForFamilyProps } from "./types/health-for-family.types";
import TabsBlock from "./ui/tabs-block";
import TabsContent from "./ui/tabs-content";

export default function HealthForFamily({
	tabsContent,
	tabsBlock,
	className,
}: HealthForFamilyProps) {
	const keys = Object.keys(tabsContent ?? {});
	const [activeKey, setActiveKey] = useState<string | undefined>(keys[0]);

	if (!(tabsContent && Object.keys(tabsContent)?.length)) return null;

	return (
		<section className={`${css.root} ${className} container`.trim()}>
			<TabsBlock
				{...tabsBlock}
				activeKey={activeKey}
				setActiveKey={setActiveKey}
			/>
			<TabsContent cards={tabsContent[activeKey ?? ""]} key={activeKey} />
		</section>
	);
}
