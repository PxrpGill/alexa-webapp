// Отдельный модуль без JSX и next/og: buildMetadata импортируется
// из серверных и клиентских мест, тянуть за собой рендер картинки не нужно.
export const OG_IMAGE_SIZE = { width: 1200, height: 630 };
export const OG_IMAGE_CONTENT_TYPE = 'image/png';
