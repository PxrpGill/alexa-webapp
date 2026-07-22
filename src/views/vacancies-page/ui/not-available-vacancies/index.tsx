/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { NotAvailableVacanicesProps } from './types/not-available-vacancies.types';

export default function NotAvailableVacancies({
    title,
    className,
}: NotAvailableVacanicesProps) {
    if (!title) return null;

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            <div className={css.wrapper}>
                <h2
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={css.title}
                />
            </div>
        </AnimationWrapper>
    );
}
