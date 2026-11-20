/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { useState } from "react";
import Modal from "@/shared/ui/modal";
import type { AboutEmployeeModalProps } from "../../types/employee-card.types";
import css from "./index.module.css";

export default function AboutEmployeeModal({
	isOpen = false,
	fullname,
	position,
	toggleClose,
	tabs,
	content,
}: AboutEmployeeModalProps) {
	const [activeTabKey, setActiveTabKey] = useState<string>(tabs[0].tabKey);

	return (
		<Modal
			isOpen={isOpen}
			toggleClose={toggleClose}
			className={css.root}
			contentClassName={css.modalContent}
		>
			<div className={css.head}>
				{fullname && (
					<p
						dangerouslySetInnerHTML={{ __html: fullname }}
						className={css.fullname}
					/>
				)}
				{position && (
					<p
						dangerouslySetInnerHTML={{ __html: position }}
						className={css.position}
					/>
				)}
			</div>
			{tabs.length > 1 && (
				<div className={css.tabs}>
					{tabs.map((tab, tabKey) => (
						<button
							type="button"
							key={tabKey}
							className={`${css.tab} ${activeTabKey === tab.tabKey && css.activeTab}`}
							onClick={() => setActiveTabKey(tab.tabKey)}
						>
							{tab.tabTitle}
						</button>
					))}
				</div>
			)}
			{content[activeTabKey] && (
				<div className={css.tabContent}>
					{content[activeTabKey].title && (
						<h4
							dangerouslySetInnerHTML={{
								__html: content[activeTabKey].title,
							}}
							className={css.contentTitle}
						/>
					)}
					<ul className={css.tabContentList}>
						{content[activeTabKey].content.map(
							(tabContent, tabContentIndex) => (
								<li
									key={`${activeTabKey}-${tabContentIndex}`}
									className={css.paragraph}
								>
									{tabContent.year && (
										<time
											className={css.tabContentYear}
											dangerouslySetInnerHTML={{ __html: tabContent.year }}
										/>
									)}
									<div className={css.paragraphWrapper}>
										{tabContent.title && (
											<strong
												className={css.tabContentTitle}
												dangerouslySetInnerHTML={{ __html: tabContent.title }}
											/>
										)}
										{tabContent.description && (
											<p
												className={css.tabContentDescription}
												dangerouslySetInnerHTML={{
													__html: tabContent.description,
												}}
											/>
										)}
									</div>
								</li>
							),
						)}
					</ul>
				</div>
			)}
		</Modal>
	);
}
