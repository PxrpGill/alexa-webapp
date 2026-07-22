/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

'use client';

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import { usePriceSectionContext } from '../../models/price-section-context';
import type { ControlsBlockProps } from '../../types/price-section.types';

import BranchesFilter from './branches-filter';
import css from './index.module.css';
import SearchFilter from './search-filter';

export default function ControlsBlock({
    branchTabs,
    title,
    className,
}: ControlsBlockProps) {
    const { branchFilterTabs } = usePriceSectionContext();

    return (
        <AnimationWrapper className={`${css.root} ${className}`}>
            <div className={css.titleWrapper}>
                {title && (
                    <h2
                        dangerouslySetInnerHTML={{ __html: title }}
                        className={css.title}
                    />
                )}
                <BranchesFilter
                    branchesFilter={branchTabs}
                    className={css.branchTabs}
                />
            </div>
            <SearchFilter
                filters={branchFilterTabs}
                className={css.searchFilter}
            />
        </AnimationWrapper>
    );
}
