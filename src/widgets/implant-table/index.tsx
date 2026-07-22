import { AnimationWrapper } from '@/shared/ui/animation-wrapper';

import css from './index.module.css';
import type { ImplantTableProps } from './types/implant-table.types';
import SectionHeader from './ui/section-header';
import Table from './ui/table';

export default function ImplantTable({
    sectionHeader,
    implants,
    className,
}: ImplantTableProps) {
    return (
        <AnimationWrapper as="section" className={`${css.root} ${className}`}>
            <SectionHeader {...sectionHeader} />
            <Table implants={implants} />
        </AnimationWrapper>
    );
}
