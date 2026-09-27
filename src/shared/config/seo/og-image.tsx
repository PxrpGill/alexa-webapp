import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { OG_IMAGE_SIZE } from './og-image-size';
import { SITE_NAME, SITE_URL } from './seo.constants';

// public/ копируется в standalone-образ (docker/prod/Dockerfile:22),
// а shared/ — нет, поэтому шрифт лежит рядом с остальными шрифтами.
const FONT_PATH = join(
    process.cwd(),
    'public/fonts/Involve-SemiBold-subset.ttf'
);

type OgFont = {
    name: string;
    data: Buffer;
    weight: 600;
    style: 'normal';
};

const loadFont = async (): Promise<Array<OgFont>> => {
    try {
        const data = await readFile(FONT_PATH);

        return [{ name: 'Involve', data, weight: 600, style: 'normal' }];
    } catch (error) {
        console.error('OG font unavailable, falling back', error);

        return [];
    }
};

export const renderOgImage = async (title: string) => {
    const fonts = await loadFont();
    const domain = SITE_URL.replace(/^https?:\/\//, '');

    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#183826',
                padding: '80px',
                fontFamily: fonts.length ? 'Involve' : 'sans-serif',
            }}
        >
            <div style={{ display: 'flex', color: '#a3d2b9', fontSize: 36 }}>
                {SITE_NAME}
            </div>
            <div
                style={{
                    display: 'flex',
                    color: '#ffffff',
                    fontSize: 72,
                    lineHeight: 1.15,
                }}
            >
                {title}
            </div>
            <div style={{ display: 'flex', color: '#7fc29e', fontSize: 32 }}>
                {domain}
            </div>
        </div>,
        { ...OG_IMAGE_SIZE, ...(fonts.length ? { fonts } : {}) }
    );
};
