/** biome-ignore-all lint/performance/noImgElement: intentional suppression */

'use client';

import ReactDOM from 'react-dom';

import { useIntersectionObserver } from '@/shared/hooks/use-intersection-observer';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';

import css from './index.module.css';

/**
 * Пути вынесены сюда, чтобы при `priority` те же три файла уходили
 * в <link rel="preload"> в head ещё до разбора разметки.
 */
const CERTIFICATES = {
    /** «Сертификат на 15.000 р.» — тёмно-зелёный с узором */
    green: '/system/certificates/1-green.webp',
    /** «Сертификат на 5.000 р.» — белый */
    white: '/system/certificates/2-white.webp',
    /** «Сертификат на 10.000 р.» — градиентный */
    gradient: '/system/certificates/3-green.webp',
} as const;

export type CertificatesStackProps = {
    /**
     * «hero» — разреженный веер на всю ширину колонки страницы акций.
     * «dense» — плотная раскладка для более узкой колонки секции заявки:
     * тот же веер, сдвинутый к правому краю, плюс две карточки, которые
     * закрывают освободившийся левый нижний угол.
     */
    layout?: 'hero' | 'dense';
    /**
     * Стек на первом экране: картинки не должны догружаться по ходу анимации,
     * поэтому они преloadятся и грузятся с высоким приоритетом. Ниже по
     * странице приоритет наоборот отнимался бы у основного контента.
     */
    priority?: boolean;
} & PropsWithClassName;

export default function CertificatesStack({
    priority,
    layout = 'hero',
    className,
}: CertificatesStackProps) {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 0.3,
        freezeOnceVisible: true,
    });

    if (priority) {
        for (const src of Object.values(CERTIFICATES)) {
            ReactDOM.preload(src, { as: 'image', fetchPriority: 'high' });
        }
    }

    const loadingProps = priority
        ? ({ fetchPriority: 'high', loading: 'eager' } as const)
        : ({ loading: 'lazy' } as const);

    return (
        <div
            className={`${css.root} ${css[layout]} ${className} ${isIntersecting && css.visible}`}
            ref={ref}
        >
            <img
                src={CERTIFICATES.gradient}
                alt="Изображение сертификата стоматологии"
                className={`${css.certificate} ${css.first}`}
                {...loadingProps}
            />
            <img
                src={CERTIFICATES.green}
                alt="Изображение сертификата стоматологии"
                className={`${css.certificate} ${css.second}`}
                {...loadingProps}
            />
            <img
                src={CERTIFICATES.gradient}
                alt="Изображение сертификата стоматологии"
                className={`${css.certificate} ${css.third}`}
                {...loadingProps}
            />
            <img
                src={CERTIFICATES.green}
                alt="Изображение сертификата стоматологии"
                className={`${css.certificate} ${css.fourth}`}
                {...loadingProps}
            />
            <img
                src={CERTIFICATES.white}
                alt="Изображение сертификата стоматологии"
                className={`${css.certificate} ${css.fifth}`}
                {...loadingProps}
            />
            <img
                src={CERTIFICATES.white}
                alt="Изображение сертификата стоматологии"
                className={`${css.certificate} ${css.sixth}`}
                {...loadingProps}
            />
            <img
                src={CERTIFICATES.gradient}
                alt="Изображение сертификата стоматологии"
                className={`${css.certificate} ${css.seventh}`}
                {...loadingProps}
            />
            <img
                src={CERTIFICATES.green}
                alt="Изображение сертификата стоматологии"
                className={`${css.certificate} ${css.eighth}`}
                {...loadingProps}
            />
            <img
                src={CERTIFICATES.green}
                alt="Изображение сертификата стоматологии"
                className={`${css.certificate} ${css.ninth}`}
                {...loadingProps}
            />
            {/* В «hero» живёт только в мобильном макете, где белых карточек три */}
            <img
                src={CERTIFICATES.white}
                alt="Изображение сертификата стоматологии"
                className={`${css.certificate} ${css.tenth}`}
                {...loadingProps}
            />
            {/* Только для «dense» — закрывает нижний левый угол */}
            <img
                src={CERTIFICATES.gradient}
                alt="Изображение сертификата стоматологии"
                className={`${css.certificate} ${css.eleventh}`}
                {...loadingProps}
            />
        </div>
    );
}
