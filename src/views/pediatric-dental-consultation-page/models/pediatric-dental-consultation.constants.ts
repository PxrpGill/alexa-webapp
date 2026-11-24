import type { AppointmentSchedulingProps } from '@/features/appointment-scheduling-section/types/appointment-scheduling.types';
import {
    APPOINTMENT_ID,
    COSTS_OF_SERVICES_BUTTON,
    GLOBAL_EMPLOYEES,
} from '@/shared/config/global-constants.constants';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import type { CertificatesSectionProps } from '@/widgets/certificates-section/types/certificates-section.types';
import type { ChildWhatIncludesServicesProps } from '@/widgets/child-what-includes-services/types/child-what-includes-services.types';
import type { CostOfServicesProps } from '@/widgets/cost-of-services/types/cost-of-services.types';
import type { FirstVisitSectionProps } from '@/widgets/first-visit-section/types/first-visit-section.types';
import type { HeroProps } from '@/widgets/hero/types/hero.types';
import type { OurPeopleSectionProps } from '@/widgets/our-people-section/types/our-people-section.types';
import type { RecommendsForChildrenProps } from '@/widgets/recommends-for-children/types/recommends-for-children.types';

export const HERO_DATA: HeroProps = {
    title: 'Здоровье зубов начинается с&nbsp;первого знакомства со&nbsp;стоматологом',
    description:
        'Осмотрим зубы, объясним всё простыми словами и&nbsp;составим понятный план. Родитель уходит с&nbsp;ответами, а&nbsp;ребёнок с&nbsp;хорошим опытом.',
    poster: {
        webp: {
            src: '/mock/pediatric-dental-consultation/child-consultation-hero.webp',
            mobile: '/mock/pediatric-dental-consultation/child-consultation-hero-mobile.webp',
        },
    },
    button: {
        title: 'Записать ребёнка на приём',
        href: APPOINTMENT_ID.id,
    },
};

export const CHILD_WHAT_INCLUDES_SERVICES: ChildWhatIncludesServicesProps = {
    sectionHeader: {
        title: 'Что входит в&nbsp;детскую консультацию',
        description:
            'Первый визит проходит спокойно: врач находит подход к&nbsp;каждому ребёнку, объясняет всё простыми словами и&nbsp;в&nbsp;конце дарит сюрприз.',
    },
    cards: [
        {
            title: 'Знакомство и&nbsp;беседа',
            description:
                'Врач знакомится с&nbsp;ребёнком, спрашивает о&nbsp;жалобах, привычках и&nbsp;уходе за&nbsp;зубами.',
            poster: {
                webp: {
                    src: '/mock/pediatric-surgery/what-includes-services/first.webp',
                },
            },
        },
        {
            title: 'Осмотр полости рта',
            description:
                'Оцениваем состояние зубов, дёсен, прикуса и&nbsp;гигиены.',
            cardType: 'vertical-alexik',
            poster: {
                original: {
                    src: '/mock/pediatric-surgery/what-includes-services/happy-alexik.png',
                },
            },
        },
        {
            title: 'Оценка рисков',
            description:
                'Определяем факторы, которые могут повлиять на здоровье зубов и развитие прикуса.',
            poster: {
                webp: {
                    src: '/mock/pediatric-surgery/what-includes-services/what-includes-1.webp',
                },
            },
        },
        {
            title: 'План дальнейших действий',
            description:
                'Если нужно лечение или дополнительная диагностика, врач объясняет, что делать и&nbsp;в&nbsp;каком порядке. Если ничего не&nbsp;требуется, так и&nbsp;скажем.',
            poster: {
                webp: {
                    src: '/mock/pediatric-surgery/what-includes-services/what-includes-2.webp',
                },
            },
        },
        {
            title: 'Рекомендации',
            description:
                'Рассказываем, как ухаживать за&nbsp;зубами дома, какие средства использовать и&nbsp;на&nbsp;что обратить внимание.',
            cardType: 'horizontal-alexik',
            poster: {
                original: {
                    src: '/mock/pediatric-surgery/what-includes-services/alexik-with-heart.png',
                },
            },
        },
    ],
};

export const FORM_DATA: AppointmentSchedulingProps = {
    title: 'Запись на&nbsp;приём',
    description:
        'Оставьте свои контактные данные и&nbsp;мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время',
    poster: {
        webp: {
            src: '/mock/appointment-scheduling-section/child-form.webp',
        },
    },
};

export const COST_OF_SERVICES: CostOfServicesProps = {
    title: 'Стоимость услуг:',
    cards: [
        {
            title: 'Консультация детского стоматолога первичная',
            description:
                '<p>Адаптационный визит (знакомство, игровая экскурсия, установление контакта, составление плана лечения).</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 1_500,
        },
        {
            title: 'Повторная консультация детского стоматолога',
            description:
                '<p>Контрольный осмотр: оцениваем состояние зубов, дёсен и&nbsp;прикуса, качество домашней гигиены и&nbsp;результат профилактики.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 1_500,
        },
        {
            title: 'Лечение кариеса молочного зуба две и&nbsp;более поверхности с&nbsp;восстановлением коронковой части фотокомпозитом',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 6_650,
        },
        {
            title: 'Лечение кариеса молочного зуба с&nbsp;восстановлением зуба стеклоионмерным цементом',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 5_550,
        },
        {
            title: 'Лечение пульпита, периодонтита молочного зуба',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 7_750,
        },
        {
            title: 'Восстановление молочного зуба коронкой металлической',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 5_200,
        },
        {
            title: 'Восстановление молочного зуба композитной коронкой',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 7_400,
        },
        {
            title: 'Восстановление молочного зуба цельнокерамической коронкой',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 10_100,
        },
        {
            title: 'Восстановление постоянного зуба металлической коронкой',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 5_200,
        },
        {
            title: 'Лечение поверхностного кариеса постоянного зуба с&nbsp;восстановлением коронковой части фотокомпозитом',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 8_850,
        },
        {
            title: 'Лечение кариеса постоянного зуба с&nbsp;восстановлением коронковой части фотокомпозитом',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 11_050,
        },
        {
            title: 'Восстановление коронковой части постоянного зуба фотокомпозитом после эндодонтического лечения',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 7_900,
        },
        {
            title: 'Восстановление коронковой части постоянного зуба с&nbsp;армированием после эндодонтического лечения',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 9_000,
        },
        {
            title: 'Профессиональная гигиена полости рта детям 1&nbsp;степени сложности',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 4_900,
        },
        {
            title: 'Профессиональная гигиена полости рта детям 2&nbsp;степени сложности',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 4_100,
        },
        {
            title: 'Проведение реминерализирующей терапии',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 3_000,
        },
        {
            title: 'Эндодонтическое лечение корневых каналов (анестезия, коффердам, механическая и&nbsp;медикаментозная обработка и&nbsp;пломбировка корневых каналов, пломба)&nbsp;&mdash; 1&nbsp;или 2&nbsp;канала',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 10_250,
        },
        {
            title: 'Эндодонтическое лечение корневых каналов (анестезия, коффердам, механическая и&nbsp;медикаментозная обработка и&nbsp;пломбировка корневых каналов, пломба)&nbsp;&mdash; 3&nbsp;канала и&nbsp;более',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 15_350,
        },
    ],
};

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
    title: 'Врачи, оказывающие услугу',
    button: {
        title: 'Смотреть всех специалистов',
        href: SITE_NAVIGATION.vrachi,
    },
    employees: [GLOBAL_EMPLOYEES.nikitin, GLOBAL_EMPLOYEES.tarasova],
};

export const RECOMMENDS_FOR_CHILDREN_DATA: RecommendsForChildrenProps = {
    sectionHeader: {
        title: 'Когда стоит показать ребёнка детскому стоматологу?',
        description:
            'Не&nbsp;обязательно ждать, пока появится боль. Регулярные осмотры помогают заметить изменения ещё до&nbsp;появления выраженных симптомов.',
        mockup: '/system/alexik-wash.png',
    },
    cards: [
        {
            title: 'Первый визит',
            description:
                'Ребёнок ещё ни&nbsp;разу не&nbsp;был у&nbsp;стоматолога&nbsp;&mdash; самое время познакомиться с&nbsp;врачом в&nbsp;спокойной обстановке.',
        },
        {
            title: 'Болит зуб',
            description:
                'Ребёнок жалуется на&nbsp;боль, чувствительность или неприятные ощущения во&nbsp;время еды.',
        },
        {
            title: 'Изменился цвет зуба',
            description:
                'Появились пятна, потемнение, белые участки или другие изменения эмали.',
        },
        {
            title: 'Проблемы с&nbsp;дёснами',
            description:
                'Кровоточивость, отёк, покраснение или неприятный запах изо рта.',
        },
        {
            title: 'Меняются молочные зубы',
            description:
                'Зубы начинают шататься, появляются первые постоянные зубы или есть вопросы по&nbsp;их&nbsp;прорезыванию.',
        },
        {
            title: 'Есть вопросы по&nbsp;прикусу',
            description:
                'Родителей беспокоит положение зубов, смыкание челюстей или привычки ребёнка.',
        },
    ],
};

export const FIRST_VISIT_SECTION_DATA: FirstVisitSectionProps = {
    sectionHeader: {
        title: 'Первая встреча, после которой не&nbsp;страшно возвращаться',
        mockup: '/system/alexik-idea.webp',
        button: {
            title: 'Записаться на приём',
            href: APPOINTMENT_ID.id,
        },
    },
    cards: [
        {
            title: 'Без давления',
            description:
                'Не&nbsp;торопим ребёнка и&nbsp;не&nbsp;заставляем делать&nbsp;то, к&nbsp;чему он&nbsp;пока не&nbsp;готов.',
            poster: {
                webp: {
                    src: '/mock/pediatric-dental-consultation/first-visit/first-card.webp',
                },
            },
        },
        {
            title: 'Всё понятно родителям',
            description:
                'Объясняем состояние зубов простым языком и&nbsp;рассказываем, что делать дальше.',
            poster: {
                webp: {
                    src: '/mock/pediatric-dental-consultation/first-visit/second-card.webp',
                },
            },
        },
        {
            title: 'Оцениваем ребёнка комплексно',
            description:
                'Смотрим не&nbsp;только на&nbsp;отдельный зуб, но&nbsp;и&nbsp;на&nbsp;состояние полости рта в&nbsp;целом.',
            poster: {
                webp: {
                    src: '/mock/pediatric-dental-consultation/first-visit/third-card.webp',
                },
            },
        },
        {
            title: 'Формируем план заранее',
            description:
                'Родители понимают, какое лечение или профилактика необходимы и&nbsp;в&nbsp;какой последовательности.',
            poster: {
                webp: {
                    src: '/mock/pediatric-dental-consultation/first-visit/fourth-card.webp',
                },
            },
        },
    ],
};

export const CERTIFICATES_SECTION: CertificatesSectionProps = {
    sectionHeader: {
        title: 'Бонусная система',
        card: {
            title: 'Ваше лечение возвращается подарками!',
            button: {
                title: 'Ознакомиться с акциями',
                href: SITE_NAVIGATION.akcii,
            },
        },
    },
    certificateCards: [
        { webp: { src: '/system/certificates/1-green.webp' } },
        {
            webp: {
                src: '/system/certificates/2-white.webp',
            },
        },
        {
            webp: {
                src: '/system/certificates/3-green.webp',
            },
        },
    ],
};
