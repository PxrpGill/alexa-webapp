import { useEffect } from 'react';

export function useLockBodyScroll(locked: boolean) {
    useEffect(() => {
        if (!locked) return;

        const scrollY = window.scrollY;
        const originalStyle = document.body.style.cssText;

        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';

        return () => {
            document.body.style.cssText = originalStyle;
            window.scrollTo(0, scrollY);
        };
    }, [locked]);
}
