import type { SiteLinkProps } from '@/shared/types/button.types';
import type { PropsWithClassName } from '@/shared/types/props-with-classname';
import type { TitleDescriptionSliderProps } from '@/widgets/title-description-slider/types/title-description-slider.types';

import type { AdvantagesSectionProps } from './advantages-section.types';
import type { PriceCardsProps } from './price-cards.types';
import type { StepperSectionProps } from './stepper-section.types';

export type TabType = {
    title?: string;
    slug?: string;
    icon?: string;
};

export type TabsBlockProps = {
    title?: string;
    description?: string;
    tabs?: TabType[];
    activeKey?: string;
    setActiveKey?: (arg?: string) => void;
} & PropsWithClassName;

export type FactoidCardsProps = {
    title?: string;
    description?: string;
    button?: SiteLinkProps;
};

export type FactoidCardsVariantType = {
    type: 'factoid';
    cards: FactoidCardsProps[];
};

export type SliderAdvantagesVariantType = {
    type: 'sliderAdvantages';
    advantagesSection?: AdvantagesSectionProps;
    slider?: TitleDescriptionSliderProps;
    priceCards?: PriceCardsProps;
    stepper?: StepperSectionProps;
};

export type TabContentProps = {
    [key: string]:
        | FactoidCardsVariantType
        | SliderAdvantagesVariantType
        | undefined;
};

export type HealthForFamilyProps = {
    tabsBlock?: TabsBlockProps;
    tabsContent?: TabContentProps;
} & PropsWithClassName;
