import ArrowSVG from '@/public/icons/slider-arrow.svg';

import css from './index.module.css';

type StoryNavButtonProps = {
    direction: 'prev' | 'next';
    onClick: () => void;
};

/**
 * Кнопка переключения кадра по краю контента. На десктопе это видимая
 * стрелка, на мобиле — широкая прозрачная тап-зона.
 */
export default function StoryNavButton({
    direction,
    onClick,
}: StoryNavButtonProps) {
    return (
        <button
            type="button"
            className={`${css.root} ${direction === 'prev' ? css.prev : css.next}`}
            onClick={onClick}
            aria-label={
                direction === 'prev' ? 'Предыдущий кадр' : 'Следующий кадр'
            }
        >
            <ArrowSVG className={css.icon} />
        </button>
    );
}
