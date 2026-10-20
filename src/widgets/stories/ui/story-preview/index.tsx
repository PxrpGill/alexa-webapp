import type { StoryGroup } from '@/entities/story/types/story.types';
import Picture from '@/shared/ui/picture';

import css from './index.module.css';

type StoryPreviewProps = {
    group: StoryGroup;
    isViewed?: boolean;
    onClick: () => void;
};

/** Кружок сториса в ленте превью */
export default function StoryPreview({
    group,
    isViewed,
    onClick,
}: StoryPreviewProps) {
    return (
        <li className={css.root}>
            <button
                type="button"
                className={`${css.button} ${isViewed ? css.viewed : ''}`.trim()}
                onClick={onClick}
                aria-label={
                    group.title
                        ? `Смотреть историю «${group.title}»`
                        : 'Смотреть историю'
                }
            >
                <span className={css.posterWrapper}>
                    <Picture poster={group.preview} />
                </span>
            </button>
            {group.title && <span className={css.title}>{group.title}</span>}
        </li>
    );
}
