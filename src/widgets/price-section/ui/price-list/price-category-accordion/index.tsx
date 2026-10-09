/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
'use client';

import { Fragment } from 'react';

import type {
    PriceCategory,
    PriceItem,
} from '@/shared/types/price-category.types';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import PriceRow from '../price-row';

import css from './index.module.css';

type Props = {
    category: PriceCategory;
    items: PriceItem[];
    isOpen: boolean;
    onToggle: () => void;
};

export default function PriceCategoryAccordion({
    category,
    items,
    isOpen,
    onToggle,
}: Props) {
    return (
        <AnimationWrapper className={css.root}>
            <button
                className={css.header}
                onClick={onToggle}
                type="button"
                aria-expanded={isOpen}
            >
                <span className={css.title}>{category.title}</span>
                <span
                    className={`${css.icon} ${isOpen ? css.iconOpen : ''}`}
                    aria-hidden
                >
                    +
                </span>
            </button>
            <div
                className={`${css.content} ${isOpen ? css.contentOpen : ''}`}
                aria-hidden={!isOpen}
            >
                <div className={css.contentInner}>
                    {items.map((item, i) => {
                        const isGroupStart =
                            !!item.group && item.group !== items[i - 1]?.group;

                        return (
                            <Fragment key={`${item.code ?? ''}-${i}`}>
                                {isGroupStart && (
                                    <p className={css.group}>{item.group}</p>
                                )}
                                <PriceRow {...item} />
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </AnimationWrapper>
    );
}
