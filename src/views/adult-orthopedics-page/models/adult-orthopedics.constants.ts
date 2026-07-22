import type { BrickworkSectionProps } from '@/widgets/brickwork-section/types/brickwork-section.types';
import type { QuadroSectionProps } from '@/widgets/quadro-section/types/quadro-section.types';
import type { TitleStickySectionProps } from '@/widgets/tilte-sticky-section/types/title-sticky-section.types';
import type { TitleDescriptionSliderProps } from '@/widgets/title-description-slider/types/title-description-slider.types';

export const QUADRO_MOCK: QuadroSectionProps = {
    sectionHeader: {
        title: 'Цифровая ортопедия',
        description: 'с&nbsp;интраоральным сканером Detsply Sirona PrimeScan',
        card: {
            title: 'Ваша здоровая улыбка начинается здесь!',
            buttonText: 'Записаться на прием',
        },
        poster: {
            original: {
                src: '/mock/adult-orthopedics/1-desktop.jpg',
            },
        },
    },
    cards: [
        {
            title: 'Устранить недостатки зубов и&nbsp;улучшить внешний вид улыбки.',
        },
        {
            title: 'Восстановить целостность зубного ряда и&nbsp;вернуть полноценную функцию зубам.',
        },
    ],
};

export const TITLE_STICKY_SECTION_MOCK: TitleStickySectionProps = {
    title: 'Показания к&nbsp;ортопедии в&nbsp;клинике &laquo;Алекса&raquo;',
    cards: [
        {
            title: 'Имеете отсутствующие зубы или зубы с&nbsp;значительным разрушением коронковой части.',
        },
        {
            title: 'Заметили изменения в&nbsp;прикусе или нарушения функции зубочелюстного аппарата.',
        },
        {
            title: 'Желаете получить прочные и&nbsp;надежные ортопедические конструкции.',
        },
        {
            title: 'Планируете провести имплантацию зубов и&nbsp;нуждаетесь в&nbsp;протезировании.',
        },
        {
            title: 'Испытываете неудобство при жевании из-за отсутствующих зубов.',
        },
        {
            title: 'Хотите восстановить эстетику улыбки и&nbsp;устранить недостатки зубов',
        },
        { title: 'Хотите улучшить дикцию и&nbsp;восстановить функцию речи.' },
    ],
    lastCard: {
        poster: {
            original: {
                src: '/mock/sticky-title/title-sticky.jpg',
            },
        },
        buttonText: 'Записаться на прием',
    },
};

export const BRICKWORK_SECTION_MOCK: BrickworkSectionProps = {
    sectionHeader: {
        title: 'Ваша улыбка в&nbsp;руках профессионалов!',
        description: 'Мы&nbsp;предлагаем:',
    },
    cards: [
        {
            icon: '/mock/adult-orthopedics/1-icon.webp',
            title: 'Вкладки:',
            description:
                'Прочные и&nbsp;эстетичные вкладки из&nbsp;прессованной керамики заменят пломбу и&nbsp;восстановят форму и&nbsp;функцию зуба.',
        },
        {
            icon: '/mock/adult-orthopedics/2-icon.png',
            title: 'Виниры:',
            description:
                'Тонкие керамические накладки на&nbsp;передние зубы, которые помогут устранить недостатки эмали и&nbsp;сделать улыбку более яркой и&nbsp;привлекательной.',
        },
        {
            icon: '/mock/adult-orthopedics/3-icon.png',
            title: 'Коронки, коронки на&nbsp;имплантах:',
            description:
                'Прочные и&nbsp;эстетичные коронки из&nbsp;различных материалов (оксид циркония и&nbsp;E-max) восстановят форму и&nbsp;функцию поврежденного зуба.',
        },
        {
            icon: '/mock/adult-orthopedics/4-icon.webp',
            title: 'Съемные протезы:',
            description:
                'Подходят при полной или частичной адентии, как вариант, временных протезов на&nbsp;этапе ортопедического лечения.',
        },
        {
            icon: '/mock/adult-orthopedics/5-icon.webp',
            title: 'Цифровое протезирование с&nbsp;использованием интраорального сканера Medit i500:',
            description:
                'Сканирование зубов проводится быстро и&nbsp;комфортно, без использования слепочных масс. Вы&nbsp;сможете увидеть 3D&nbsp;модель ваших будущих ортопедических конструкций. Нет погрешностей при сканировании в&nbsp;отличие от&nbsp;слепков.',
        },
        {
            title: 'Бонусная система',
            description: 'Ваше лечение возвращается подарками!',
            cardTheme: 'green',
            buttonText: 'Записаться на прием',
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
            webp: {
                src: '/mock/adult-orthopedics/second-slider/1-slide.webp',
            },
        },
        {
            webp: {
                src: '/mock/adult-orthopedics/second-slider/2-slide.webp',
            },
        },
        {
            webp: {
                src: '/mock/adult-orthopedics/second-slider/3-slide.webp',
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
        title: 'Индивидуальный подход к&nbsp;каждому пациенту:',
        description:
            'Мы&nbsp;учитываем все ваши потребности и&nbsp;особенности.',
    },
    posters: [
        {
            webp: {
                src: '/mock/adult-orthopedics/fourth-slider/1-slide.webp',
            },
        },
        {
            webp: {
                src: '/mock/adult-orthopedics/fourth-slider/2-slide.webp',
            },
        },
        {
            webp: {
                src: '/mock/adult-orthopedics/fourth-slider/3-slide.webp',
            },
        },
    ],
};
