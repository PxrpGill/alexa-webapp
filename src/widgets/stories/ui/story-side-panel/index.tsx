import Picture from '@/shared/ui/picture';

import type { StoryGroup } from '../../types/stories.types';

import css from './index.module.css';

type StorySidePanelProps = {
    group: StoryGroup;
    onClick: () => void;
};

/**
 * Содержимое неактивной ячейки дорожки: превью группы с подписью. Позицию и
 * размер задаёт сама ячейка, панель просто растягивается по ней.
 */
export default function StorySidePanel({
    group,
    onClick,
}: StorySidePanelProps) {
    return (
        <button
            type="button"
            className={css.root}
            onClick={onClick}
            aria-label={
                group.title
                    ? `Перейти к истории «${group.title}»`
                    : 'Перейти к соседней истории'
            }
        >
            <Picture poster={group.preview} withoutSkeleton />
            {group.title && <span className={css.title}>{group.title}</span>}
        </button>
    );
}
