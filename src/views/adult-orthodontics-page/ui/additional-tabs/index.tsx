/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import Button from "@/shared/ui/button";
import type { AdditionalTabsProps } from "../../types/additional-tabs.types";
import css from "./index.module.css";

export default function AdditionalTabs({
	className,
	additionalTabsTitle,
	isChangePanelVisible,
	tabs,
	activeKey,
	setActiveKey,
}: AdditionalTabsProps) {
	if (!(tabs?.length && setActiveKey)) return;

	return (
		<div
			className={`${css.root} ${className} ${isChangePanelVisible && css.visible}`}
		>
			{additionalTabsTitle && (
				<p
					dangerouslySetInnerHTML={{ __html: additionalTabsTitle }}
					className={css.title}
				/>
			)}
			<div className={css.buttonsWrapper}>
				{tabs.map((category, index) => (
					<Button
						key={index}
						className={`${css.tab} ${category.slug === activeKey && css.active}`}
						theme={activeKey === category.slug ? "green" : "transparent"}
						onClick={() => setActiveKey(category.slug)}
					>
						{category.title}
					</Button>
				))}
			</div>
		</div>
	);
}
