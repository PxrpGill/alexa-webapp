'use client';

import Script from 'next/script';
import { useEffect } from 'react';

import {
    SMARTWIDGETS_APP_KEY,
    SMARTWIDGETS_SCRIPT_URL,
} from '@/shared/config/global-constants.constants';

import css from './index.module.css';
import type { ReviewsWidgetProps } from './types/reviews-widget.types';

/**
 * Блок отзывов — сторонний виджет SmartWidgets, собирающий оценки
 * с Яндекс.Карт, ПроДокторов и 2ГИС.
 *
 * Его загрузчик инициализируется только по `readystatechange`/`DOMContentLoaded`,
 * поэтому при ленивой загрузке скрипта и при клиентской навигации
 * контейнер приходится поднимать вручную через `window.swAppRefresh()`.
 */
export default function ReviewsWidget({
    title,
    className,
}: ReviewsWidgetProps) {
    useEffect(() => {
        window.swAppRefresh?.();
    }, []);

    return (
        <section className={`${css.root} ${className} container`}>
            {title && <h2 className={css.title}>{title}</h2>}
            <div className={css.widget}>
                <div
                    className="sw-app"
                    data-app={SMARTWIDGETS_APP_KEY}
                    data-sw-lazy="near"
                />
            </div>
            <Script
                id="smartwidgets"
                src={SMARTWIDGETS_SCRIPT_URL}
                strategy="lazyOnload"
                onReady={() => window.swAppRefresh?.()}
            />
        </section>
    );
}
