import type { BrickworkSectionProps } from '@/widgets/brickwork-section/types/brickwork-section.types';
import type { QuadroSectionProps } from '@/widgets/quadro-section/types/quadro-section.types';
import type { TitleDescriptionSliderProps } from '@/widgets/title-description-slider/types/title-description-slider.types';

export const QUADRO_SECTION_MOCK: QuadroSectionProps = {
    sectionHeader: {
        title: 'Гигиена полости рта для детей',
        description:
            'Бережный уход за&nbsp;молочными и&nbsp;постоянными зубами',
        card: {
            title: 'Запишитесь на&nbsp;прием и&nbsp;подарите своему ребенку здоровую и&nbsp;счастливую улыбку!',
            buttonText: 'Записаться на прием',
        },
        poster: {
            original: {
                src: '/mock/hygiene-and-preventation/1-desktop.jpg',
            },
        },
    },
    cards: [
        {
            title: 'Удаление налета снижает риск воспаления дёсен',
        },
        {
            title: 'Обеспечить правильное формирование постоянного прикуса',
        },
        {
            title: 'Снизить риск развитие кариеса',
        },
        {
            title: 'Сохранить здоровье молочных зубов',
        },
    ],
};

export const BRICKWORK_SECTION_MOCK: BrickworkSectionProps = {
    sectionHeader: {
        title: 'Здоровая улыбка малышей начинается с&nbsp;заботливой профилактики и&nbsp;гигиены!',
        description: 'Мы&nbsp;предлагаем:',
    },
    cards: [
        {
            icon: '/mock/hygiene-and-preventation/1-icon.svg',
            title: 'Здоровые зубы:',
            description:
                'Удаление налета и&nbsp;камня защищает от&nbsp;кариеса и&nbsp;снижает риск воспаления десен.',
        },
        {
            icon: '/mock/hygiene-and-preventation/2-icon.svg',
            title: 'Профилактика проблем:',
            description:
                'Профессиональная гигиена&nbsp;&mdash; это важная профилактика кариеса и&nbsp;других заболеваний полости рта.',
        },
        {
            icon: '/mock/hygiene-and-preventation/3-icon.svg',
            title: 'Уверенная улыбка:',
            description:
                'Чистые и&nbsp;светлые зубы делают улыбку красивее и&nbsp;улучшают самооценку ребенка.',
        },
        {
            icon: '/mock/hygiene-and-preventation/4-icon.svg',
            title: 'Правильный прикус:',
            description:
                'Здоровые молочные зубы&nbsp;&mdash; это залог здоровых постоянных зубов.',
        },
    ],
};

export const FIRST_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
    title: 'Наши преимущества',
    textBlock: {
        title: 'Современное оборудование',
        description:
            'Компьютерная томограмма и&nbsp;рентген, терапия, лечение зубов с&nbsp;микроскопом, гигиена, удаление зубов, имплантация и&nbsp;протезирование, исправление прикуса с&nbsp;применением самого современного оборудования, инновационных материалов и&nbsp;самых передовых протоколов лечения&nbsp;&mdash; залог здоровья наших пациентов!',
    },
    posters: [
        {
            webp: {
                src: '/mock/home/first-slider/first-desktop.webp',
            },
        },
        {
            webp: {
                src: '/mock/home/first-slider/second-desktop.webp',
            },
        },
        {
            webp: {
                src: '/mock/home/first-slider/third-desktop.webp',
            },
        },
        {
            webp: {
                src: '/mock/home/first-slider/fourth-desktop.webp',
            },
        },
        {
            webp: {
                src: '/mock/home/first-slider/fifth-desktop.webp',
            },
        },
    ],
};

export const SECOND_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
    textBlock: {
        title: 'Комфортная атмосфера:',
        description:
            'Мы&nbsp;делаем все возможное, чтобы ваше посещение было приятным и&nbsp;безопасным.',
    },
    posters: [
        {
            original: {
                src: '/mock/pediatric-dental-consultation/2-1-slide.jpg',
            },
        },
        {
            original: {
                src: '/mock/pediatric-dental-consultation/2-2-slide.jpg',
            },
        },
        {
            original: {
                src: '/mock/pediatric-dental-consultation/2-3-slide.jpg',
            },
        },
    ],
};

export const THIRD_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
    textBlock: {
        title: 'Профессионализм:',
        description:
            'Наши врачи обладают опытом и&nbsp;знаниями в&nbsp;области детской стоматологии.',
    },
    posters: [
        {
            webp: {
                src: '/mock/home/third-slider/3-1.webp',
            },
        },
        {
            webp: {
                src: '/mock/home/third-slider/3-2.webp',
            },
        },
        {
            webp: {
                src: '/mock/home/third-slider/3-3.webp',
            },
        },
    ],
};

export const FOURTH_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
    textBlock: {
        title: 'Индивидуальный подход:',
        description:
            'Мы&nbsp;учитываем все особенности вашего ребенка и&nbsp;подбираем оптимальный план лечения.',
    },
    posters: [
        {
            original: {
                src: '/mock/pediatric-dental-consultation/4-1-slide.jpg',
            },
        },
        {
            original: {
                src: '/mock/pediatric-dental-consultation/4-2-slide.jpg',
            },
        },
        {
            original: {
                src: '/mock/pediatric-dental-consultation/4-3-slide.jpg',
            },
        },
        {
            original: {
                src: '/mock/pediatric-dental-consultation/4-4-slide.jpg',
            },
        },
    ],
};
