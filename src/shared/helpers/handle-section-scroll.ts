import type { MouseEvent } from 'react';

export const handleSectionScroll = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href')?.slice(1);
    if (!id) return;

    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        
    });
};
