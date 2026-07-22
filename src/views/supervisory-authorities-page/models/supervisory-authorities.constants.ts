import type { SupervisoryAuthoritiesSectionProps } from '@/widgets/supervisory-authorities-section/types/supervisory-authorities-section.types';

export const SUPERVISORY_SECTION_MOCK: SupervisoryAuthoritiesSectionProps = {
    title: 'Надзорные органы',
    cards: [
        {
            title: 'Министерство здравоохранения Ростовской области',
            phone: '+7 (863) 242-41-09',
            websiteLink: 'https://minzdrav.donland.ru',
            icon: '/mock/supervisory/1-icon.png',
        },
        {
            title: 'Управление Росздравнадзора по&nbsp;Ростовской области',
            phone: '+7 (863) 286-98-11',
            websiteLink: 'https://61reg.roszdravnadzor.ru',
            icon: '/mock/supervisory/2-icon.png',
        },
        {
            title: 'Управление Федеральной службы по&nbsp;надзору в&nbsp;сфере защиты прав потребителей и&nbsp;благополучия человека по&nbsp;Ростовской области',
            phone: '+7 (800) 100-74-17',
            websiteLink: 'https://www.rpndon.ru',
            icon: '/mock/supervisory/3-icon.png',
        },
        {
            title: 'Территориальный фонд обязательного медицинского страхования Ростовской области',
            phone: '+7 (863) 234-90-22',
            websiteLink: 'https://rostov-tfoms.ru',
            icon: '/mock/supervisory/4-icon.png',
        },
    ],
};
