'use client';

import { useCallback, useState } from 'react';

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import CertificatesStack from '@/shared/ui/certificates-stack';

import css from './index.module.css';
import type { PromotionRequestSectionProps } from './types/promotion-request-section.types';
import RequestForm from './ui/request-form';
import SectionHeader from './ui/section-header';
import SuccessForm from './ui/success-form';

export default function PromotionRequestSection({
    slug,
    title,
    description,
    className,
}: PromotionRequestSectionProps) {
    const [isSuccess, toggleSuccess] = useState<boolean>(false);

    const toggleSuccessFromClose = useCallback(() => {
        toggleSuccess(false);
    }, []);

    const toggleSuccessFromOpen = useCallback(() => {
        toggleSuccess(true);
    }, []);

    return (
        <AnimationWrapper
            as="section"
            className={`${css.root} ${className} container`}
        >
            <div className={css.wrapper}>
                <SuccessForm
                    isOpen={isSuccess}
                    toggleClose={toggleSuccessFromClose}
                />
                <div className={css.leftPart}>
                    <SectionHeader
                        title={title}
                        description={description}
                        className={css.header}
                    />
                    <RequestForm
                        slug={slug}
                        toggleSuccess={toggleSuccessFromOpen}
                    />
                </div>
                <CertificatesStack
                    layout="dense"
                    className={css.certificates}
                />
            </div>
        </AnimationWrapper>
    );
}
