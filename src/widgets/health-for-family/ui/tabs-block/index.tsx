/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { TabsBlockProps } from "../../types/health-for-family.types";

import css from "./index.module.css";

export default function TabsBlock({ tabs, title, className }: TabsBlockProps) {
	return (
		<AnimationWrapper as="nav" className={`${css.root} ${className}`}>
			{title && (
				<h2 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
			)}
			{tabs?.length && (
				<div className={css.tabs}>
					{tabs.map((tab, index) => (
						<button
							className={css.tab}
							type="button"
							key={`${tab.slug}-${index}`}
						>
							<div className={css.imageWrapper}>
								{tab.icon && (
									<img
										src={tab.icon}
										alt="Иконка таба"
										className={css.tabIcon}
									/>
								)}
							</div>
						</button>
					))}
				</div>
			)}
		</AnimationWrapper>
	);
}
