'use client';

import { useEffect, useState } from 'react';

import CrossSVG from '@/public/icons/x.svg';
import { useKeyPress } from '@/shared/hooks/use-key-press';
import { useLockBodyScroll } from '@/shared/hooks/use-lock-body-scroll';
import type { ModalProps } from '@/shared/types/modal.types';

import css from './index.module.css';

/** Длительность перехода из @mixin transitionOptions (0.3s) плюс запас. */
const CLOSE_TRANSITION_MS = 350;

export default function Modal({
    isOpen,
    toggleClose,
    className,
    children,
    contentClassName,
    closeButtonClassName,
    backdropClassName,
}: ModalProps) {
    useLockBodyScroll(isOpen);
    useKeyPress('Escape', toggleClose);

    // Модалки объявлены в общем layout, поэтому раньше их содержимое висело
    // в DOM на каждой странице: попадало в дерево доступности, ловило Tab и
    // тянуло свои картинки. Держим содержимое только пока окно открыто,
    // размонтируя его после завершения перехода — анимация закрытия цела.
    const [hasContent, setHasContent] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setHasContent(true);

            return;
        }

        const timer = setTimeout(
            () => setHasContent(false),
            CLOSE_TRANSITION_MS
        );

        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <dialog
            className={`${css.root} ${isOpen && css.open} ${className}`.trim()}
            open
            inert={!isOpen}
        >
            {hasContent && (
                <>
                    <button
                        type="button"
                        className={`${css.backdrop} ${backdropClassName}`}
                        onClick={toggleClose}
                        tabIndex={-1}
                        aria-hidden="true"
                    />
                    <div
                        className={`${css.modalContent} ${contentClassName}`.trim()}
                    >
                        <button
                            className={`${css.closeButton} ${closeButtonClassName}`}
                            type="button"
                            onClick={toggleClose}
                            aria-label="Закрыть"
                        >
                            <CrossSVG className={css.icon} />
                        </button>
                        {children}
                    </div>
                </>
            )}
        </dialog>
    );
}
