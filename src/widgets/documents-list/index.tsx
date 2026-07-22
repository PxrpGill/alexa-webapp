/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

import { AnimationWrapper } from '@/shared/ui/animation-wrapper';
import DocumentCard from '@/shared/ui/document-card';

import css from './index.module.css';
import type { DocumentsListProps } from './types/documents-list.types';

export default function DocumentsList({
    documents,
    className,
}: DocumentsListProps) {
    if (!documents?.length) return null;

    return (
        <ul className={`${css.root} ${className} container`}>
            {documents.map((document, index) => (
                <AnimationWrapper as="li" key={index} className={css.paragraph}>
                    <DocumentCard {...document} />
                </AnimationWrapper>
            ))}
        </ul>
    );
}
