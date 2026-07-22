'use client';

import { useState } from 'react';

import css from './index.module.css';
import type { HealthForFamilyProps } from './types/health-for-family.types';
import FactoidCards from './ui/factoid-cards';
import SliderAdvantages from './ui/slider-advantages';
import TabsBlock from './ui/tabs-block';

export default function HealthForFamily({
    tabsContent,
    tabsBlock,
    className,
}: HealthForFamilyProps) {
    const keys = Object.keys(tabsContent ?? {});
    const [activeKey, setActiveKey] = useState<string | undefined>(keys[0]);

    if (!(tabsContent && Object.keys(tabsContent)?.length)) return null;

    return (
        <section className={`${css.root} ${className} container`.trim()}>
            <TabsBlock
                {...tabsBlock}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
            />
            {activeKey && tabsContent[activeKey]?.type === 'factoid' && (
                <FactoidCards
                    cards={tabsContent[activeKey].cards}
                    key={activeKey}
                />
            )}
            {activeKey &&
                tabsContent[activeKey]?.type === 'sliderAdvantages' && (
                    <SliderAdvantages
                        {...tabsContent[activeKey]}
                        key={activeKey}
                    />
                )}
        </section>
    );
}
