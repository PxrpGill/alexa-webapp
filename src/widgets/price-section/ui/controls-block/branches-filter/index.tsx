/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

'use client';

import ButtonIconSVG from '@/public/icons/button-teeth.svg';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import Button from '@/shared/ui/button';
import { usePriceSectionContext } from '@/widgets/price-section/models/price-section-context';
import type { ControlsBlockProps } from '@/widgets/price-section/types/price-section.types';

import css from './index.module.css';

export default function BranchesFilter({
    branchesFilter,
    className,
}: {
    branchesFilter?: ControlsBlockProps['branchTabs'];
} & PropsWithClassName) {
    const { selectedBranch, selectBranch } = usePriceSectionContext();

    if (!branchesFilter?.length) return null;

    return (
        <div className={`${css.root} ${className}`}>
            <div className={css.desktopWrapper}>
                {branchesFilter.map((branch, index) => (
                    <Button
                        className={`${css.branchButton} ${selectedBranch === branch.slug && css.selected}`}
                        key={index}
                        onClick={() => selectBranch(branch.slug)}
                        theme={
                            selectedBranch === branch.slug
                                ? 'green'
                                : 'transparent'
                        }
                        rightIcon={<ButtonIconSVG className={css.icon} />}
                    >
                        {branch.title}
                    </Button>
                ))}
            </div>
        </div>
    );
}
