import type { PriceItem } from '@/shared/types/price-category.types';

import css from './index.module.css';

function formatPrice(price: number | string): string {
    if (price === 0) return 'Бесплатно';
    if (typeof price === 'string') return price;
    return `${price.toLocaleString('ru-RU')} ₽`;
}

export default function PriceRow({ code, name, price }: PriceItem) {
    return (
        <div className={css.root}>
            <div className={css.left}>
                {code && <span className={css.code}>{code}</span>}
                <p className={css.name}>{name}</p>
            </div>
            <span className={css.price}>{formatPrice(price)}</span>
        </div>
    );
}
