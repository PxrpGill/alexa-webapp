/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import Button from "@/shared/ui/button";
import type { TabProps } from "../../types/cost-of-services.types";
import css from "./index.module.css";

export default function Tabs({
	tabs,
	className,
	activeTabKey,
	onTabChange,
}: {
	tabs?: TabProps[];
	activeTabKey?: string;
	onTabChange?: (tabKey: string) => void;
} & PropsWithClassName) {
	if (!(tabs?.length && onTabChange)) return null;

	return (
		<div className={`${css.root} ${className} container`}>
			{tabs.map((tab, index) => (
				<Button
					className={css.tab}
					key={`${index}-${tab.tabKey}`}
					theme={activeTabKey === tab.tabKey ? "green" : "white"}
					onClick={() => onTabChange(tab.tabKey)}
				>
					{tab.title}
				</Button>
			))}
		</div>
	);
}
