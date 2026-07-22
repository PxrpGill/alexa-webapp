import type { FC, SVGProps } from 'react';

import type { SiteLinkProps } from './button.types';

export type HeaderMenuLinkType = SiteLinkProps & {
    IconSvg: FC<SVGProps<SVGSVGElement>>;
    description?: string;
};

export type HeaderMenuLinksType = Array<HeaderMenuLinkType>;
