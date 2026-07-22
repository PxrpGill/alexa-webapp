/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

'use client';

import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import Button from '@/shared/ui/button';
import Input from '@/shared/ui/input';
import { usePriceSectionContext } from '@/widgets/price-section/models/price-section-context';
import type { TabProps } from '@/widgets/price-section/types/price-section.types';

import css from './index.module.css';

export default function SearchFilter({
    className,
    filters,
}: { filters?: TabProps[] } & PropsWithClassName) {
    const {
        selectedBranchFilter,
        selectBranchFilter,
        searchQuery,
        setSearchQuery,
    } = usePriceSectionContext();

    if (!filters?.length) return null;

    return (
        <div className={`${css.root} ${className}`}>
            <Input
                placeholder="Поиск услуги..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className={css.filters}>
                {filters.map((filter, index) => (
                    <Button
                        className={css.button}
                        theme={
                            selectedBranchFilter === filter.slug
                                ? 'green'
                                : 'transparent'
                        }
                        key={`${index}-${filter.slug}`}
                        onClick={() => selectBranchFilter(filter.slug)}
                    >
                        {filter.title}
                    </Button>
                ))}
            </div>
        </div>
    );
}
