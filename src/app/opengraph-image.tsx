import { renderOgImage } from '@/shared/config/seo/og-image';
import {
    OG_IMAGE_CONTENT_TYPE,
    OG_IMAGE_SIZE,
} from '@/shared/config/seo/og-image-size';
import { DEFAULT_TITLE } from '@/shared/config/seo/seo.constants';

export const alt = DEFAULT_TITLE;
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export default async function OpengraphImage() {
    return renderOgImage(DEFAULT_TITLE);
}
