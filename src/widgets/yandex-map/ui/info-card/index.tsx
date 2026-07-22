/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: yandex map API returns HTML content */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: static list, order won't change */

import Link from 'next/link';
import { Fragment } from 'react';

import PointSVG from '@/public/icons/point.svg';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';

import css from './index.module.css';

export type BranchInformationProps = {
    locality?: string;
    title?: string;
    workSchedule?: string;
    phone?: string;
    cords?: [number, number];
};

export type InfoCardProps = {
    title?: string;
    branches?: BranchInformationProps[];
    onBranchSelect?: (cords: [number, number]) => void;
} & PropsWithClassName;

export default function InfoCard({
    title,
    branches,
    className,
    onBranchSelect,
}: InfoCardProps) {
    if (!branches?.length) return null;

    return (
        <article className={`${css.root} ${className}`}>
            {title && (
                <h5
                    dangerouslySetInnerHTML={{ __html: title }}
                    className={css.title}
                />
            )}
            <ul className={css.list}>
                {branches.map((branch, index) => {
                    const cords = branch.cords;

                    return (
                        <Fragment key={index}>
                            <li
                                className={css.paragraph}
                                onClick={
                                    cords
                                        ? () => onBranchSelect?.(cords)
                                        : undefined
                                }
                                onKeyDown={
                                    cords
                                        ? (e) => {
                                              if (
                                                  e.key === 'Enter' ||
                                                  e.key === ' '
                                              ) {
                                                  e.preventDefault();
                                                  onBranchSelect?.(cords);
                                              }
                                          }
                                        : undefined
                                }
                                role={cords ? 'button' : undefined}
                                tabIndex={cords ? 0 : undefined}
                            >
                                {branch.locality && (
                                    <div className={css.pointWrapper}>
                                        <PointSVG className={css.pointSVG} />
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: branch.locality,
                                            }}
                                            className={css.locality}
                                        />
                                    </div>
                                )}
                                {branch.title && (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: branch.title,
                                        }}
                                        className={css.branchTitle}
                                    />
                                )}
                                {branch.workSchedule && (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: branch.workSchedule,
                                        }}
                                        className={css.workSchedule}
                                    />
                                )}
                                {branch.phone && (
                                    <Link
                                        href={`tel:${branch.phone}`}
                                        className={css.phone}
                                    >
                                        {branch.phone}
                                    </Link>
                                )}
                            </li>
                            {index < branches.length - 1 && (
                                <hr className={css.hr} />
                            )}
                        </Fragment>
                    );
                })}
            </ul>
        </article>
    );
}
