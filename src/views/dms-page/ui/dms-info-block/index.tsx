/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { DMSInfoBlockProps } from './types/dms-info-block.types';

export default function DMSInfoBlock({ title, className }: DMSInfoBlockProps) {
    if (!title) return null;

    return (
        <AnimationWrapper className={`${css.root} ${className} container`}>
            <div className={css.wrapper}>
                <h2
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={css.title}
                />
            </div>
        </AnimationWrapper>
    );
}
