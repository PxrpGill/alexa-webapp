import css from './index.module.css';
import { PriceSectionContextProvider } from './models/price-section-context';
import type { PriceSectionProps } from './types/price-section.types';
import ControlsBlock from './ui/controls-block';
import PriceList from './ui/price-list';
import TitleBlock from './ui/title-block';

export default function PriceSection({
    sectionHeader,
    controls,
    className,
}: PriceSectionProps) {
    return (
        <section className={`${css.root} ${className} container`}>
            <PriceSectionContextProvider {...controls}>
                <TitleBlock {...sectionHeader} className={css.sectionHeader} />
                <ControlsBlock {...controls} className={css.controls} />
                <PriceList />
            </PriceSectionContextProvider>
        </section>
    );
}
