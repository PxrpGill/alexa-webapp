/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/performance/noImgElement: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

import { useCallback } from 'react';

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import Button from '@/shared/ui/button';

import type { TabsBlockProps } from '../../types/health-for-family.types';

import css from './index.module.css';

export default function TabsBlock({
    tabs,
    title,
    className,
    description,
    activeKey,
    setActiveKey,
}: TabsBlockProps) {
    const handleButtonClick = useCallback(
        (tabKey?: string) => {
            if (!(setActiveKey && activeKey)) return;

            setActiveKey(tabKey);
        },
        [setActiveKey, activeKey]
    );

    return (
					<AnimationWrapper
						as="nav"
						className={`${css.root} ${className} ${description && css.withDescription}`}
					>
						<div className={css.titleBlock}>
							{title && (
								<h2
									className={css.title}
									dangerouslySetInnerHTML={{ __html: title }}
								/>
							)}
							{description && (
								<p
									className={css.description}
									dangerouslySetInnerHTML={{ __html: description }}
								/>
							)}
						</div>
						{tabs?.length && (
							<div className={css.tabs}>
								{tabs.map((tab, index) => (
									<Button
										className={`${css.tab} ${activeKey === tab.slug && css.active} ${!tab.icon && css.withoutIcon}`}
										type="button"
										key={`${tab.slug}-${index}`}
										onClick={() => handleButtonClick(tab.slug)}
										{...(tab.icon && {
											leftIcon: (
												<div className={css.imageWrapper}>
													<img
														src={tab.icon}
														alt="Иконка таба"
														className={css.tabIcon}
													/>
												</div>
											),
										})}
									>
										{tab.title && (
											<span
												dangerouslySetInnerHTML={{
													__html: tab.title,
												}}
												className={css.text}
											/>
										)}
									</Button>
								))}
							</div>
						)}
					</AnimationWrapper>
				);
}
