/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: intentional suppression */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import Link from 'next/link';
import { type PropsWithChildren, useState } from 'react';

import type { HeaderMenuLinkType } from '@/shared/types/header-menu-links.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';

import css from './index.module.css';

export type HeaderDropdownProps = {
    dropDownItems: Array<HeaderMenuLinkType>;
    onLinkClick?: () => void;
} & PropsWithChildren &
    PropsWithClassName;

export default function HeaderDropdown({
    className,
    dropDownItems,
    children,
    onLinkClick,
}: HeaderDropdownProps) {
    const [isDropDownOpen, toggleDropDownOpen] = useState<boolean>(false);

    if (!dropDownItems.length) return null;

    return (
        <div className={`${css.root} ${className}`.trim()}>
            <button
                className={css.button}
                type="button"
                onClick={() => toggleDropDownOpen(!isDropDownOpen)}
            >
                {children}
            </button>
            <ul className={`${css.list} ${isDropDownOpen && css.show}`.trim()}>
                <div className={css.wrapper}>
                    <div className={css.wrapperContent}>
                        {dropDownItems.map(
                            (
                                { IconSvg, title, description, href, target },
                                index
                            ) => (
                                <li
                                    className={css.paragraph}
                                    key={`${title}-${index}`}
                                >
                                    <Link
                                        href={href}
                                        className={css.link}
                                        target={target}
                                        onClick={() => {
                                            toggleDropDownOpen(false);
                                            onLinkClick?.();
                                        }}
                                    >
                                        <IconSvg className={css.logo} />
                                        <div className={css.rightPart}>
                                            {title && (
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: title,
                                                    }}
                                                    className={css.title}
                                                />
                                            )}
                                            {description && (
                                                <p
                                                    className={css.description}
                                                    dangerouslySetInnerHTML={{
                                                        __html: description,
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </Link>
                                </li>
                            )
                        )}
                    </div>
                </div>
            </ul>
        </div>
    );
}
