const HTML_ENTITIES: Record<string, string> = {
    '&nbsp;': ' ',
    '&mdash;': '—',
    '&ndash;': '–',
    '&laquo;': '«',
    '&raquo;': '»',
    '&#8209;': '‑',
    '&amp;': '&',
    '&quot;': '"',
};

export const normalizeMetaText = (
    raw: string | undefined,
    maxLength: number
): string | undefined => {
    if (!raw) return undefined;

    let text = raw.replace(/<[^>]*>/g, '');

    for (const [entity, char] of Object.entries(HTML_ENTITIES)) {
        text = text.split(entity).join(char);
    }

    text = text.replace(/\s+/g, ' ').trim();

    if (!text) return undefined;
    if (text.length <= maxLength) return text;

    const cut = text.slice(0, maxLength - 1);
    const lastSpace = cut.lastIndexOf(' ');

    return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
};
