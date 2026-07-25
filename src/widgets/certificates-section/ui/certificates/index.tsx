/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

'use client';

import { useIntersectionObserver } from '@/shared/hooks/use-intersection-observer';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { PictureFormatType } from '@/shared/ui/picture';
import Picture from '@/shared/ui/picture';

import css from './index.module.css';

export default function Certificates({
    certificates,
    className,
}: {
    certificates?: PictureFormatType[];
} & PropsWithClassName) {
    const { isIntersecting, ref } = useIntersectionObserver({ threshold: 1 });

    if (!certificates?.length) return null;

    return (
        <div
            className={`${css.root} ${className} ${isIntersecting && css.visible}`}
            ref={ref}
        >
            {certificates.map((certificate, index) => (
                <Picture
                    poster={certificate}
                    key={index}
                    className={`${css.certificate} ${css.certificate}-${index}`}
                />
            ))}
            <div className={css.shadow} />
        </div>
    );
}
