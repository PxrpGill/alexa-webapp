/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

'use client';

import { useRef } from 'react';

import EmployeeCard from '@/entities/employee/ui/employee-card';
import ButtonIconsSVG from '@/public/icons/button-teeth.svg';
import { useOneHeightOfCards } from '@/shared/hooks/use-one-height-of-cards';
import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import Button from '@/shared/ui/button';

import css from './index.module.css';
import type { OurPeopleSectionProps } from './types/our-people-section.types';
import SectionHeader from './ui/section-header';

export default function OurPeopleSection({
    className,
    title,
    employees,
    button,
    isSlider,
}: OurPeopleSectionProps) {
    const { contentsRef, maxContentHeight } = useOneHeightOfCards();

    if (!employees?.length) return null;

    return (
        <AnimationWrapper as="section" className={`${css.root} ${className}`}>
            <SectionHeader title={title} button={button} />
            <ul className={`${css.list} container ${isSlider && css.slider}`}>
                {employees.map((employee, index) => (
                    <AnimationWrapper
                        as="li"
                        direction="fade"
                        className={css.paragraph}
                        key={`${employee.fullname}-${index}`}
                    >
                        <EmployeeCard
                            {...employee}
                            className={css.employee}
                            contentsRef={(el) => {
                                contentsRef.current[index] = el;
                            }}
                            contentsStyle={{
                                minHeight: maxContentHeight
                                    ? `${maxContentHeight}px`
                                    : 'auto',
                            }}
                        />
                    </AnimationWrapper>
                ))}
            </ul>
            {button && (
                <Button
                    className={css.button}
                    href={button.href}
                    rightIcon={<ButtonIconsSVG className={css.icon} />}
                >
                    {button.title}
                </Button>
            )}
        </AnimationWrapper>
    );
}
