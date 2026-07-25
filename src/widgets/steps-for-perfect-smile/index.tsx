/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { chunkArray } from '@/shared/helpers/chunk-array';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { StepsForPerfectSmileProps } from './types/steps-for-perfect-smile.types';

export default function StepsForPerfectSmile({
    title,
    steps,
    className,
}: StepsForPerfectSmileProps) {
    if (!steps?.length) return null;

    const pairs = chunkArray(steps, 2);

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            <div className={css.wrapper}>
                {title && (
                    <h2
                        dangerouslySetInnerHTML={{ __html: title }}
                        className={css.title}
                    />
                )}

                <ul className={css.pairs}>
                    {pairs.map((pair, index) => (
                        <li
                            key={index}
                            className={`${css.pair} ${index % 2 === 0 && css.even} ${pair.length === 1 && css.single}`}
                        >
                            {pair.map((element, elementIndex) => (
                                <div
                                    className={`${css.element}`}
                                    key={`${elementIndex}-${index}`}
                                >
                                    <p
                                        className={css.elementText}
                                        dangerouslySetInnerHTML={{
                                            __html: element,
                                        }}
                                    />
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </AnimationWrapper>
    );
}
