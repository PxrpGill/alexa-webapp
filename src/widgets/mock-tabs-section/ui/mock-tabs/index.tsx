/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { MockTabsProps } from "../../types/mock-tabs-section.types";

import css from "./index.module.css";

export default function MockTabs({ tabs, className }: MockTabsProps) {
	if (!tabs?.length) return null;

	return (
		<ul className={`${css.root} ${className}`}>
			{tabs.map((tab, index) => (
				<li
					className={css.paragraph}
					key={index}
					dangerouslySetInnerHTML={{ __html: tab }}
				/>
			))}
		</ul>
	);
}
