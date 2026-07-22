import Picture from '@/shared/ui/picture';

import type { PosterBlockProps } from '../../types/installment-plan-section.types';

import css from './index.module.css';

export default function PosterBlock({ poster, className }: PosterBlockProps) {
    return (
        <div className={`${css.root} ${className}`}>
            {poster && <Picture poster={poster} />}
        </div>
    );
}
