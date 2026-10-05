import type { AppointmentSchedulingProps } from '@/features/appointment-scheduling-section/types/appointment-scheduling.types';
import {
    APPOINTMENT_ID,
    COSTS_OF_SERVICES_BUTTON,
    GLOBAL_EMPLOYEES,
} from '@/shared/config/global-constants.constants';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import type { ChildWhatIncludesServicesProps } from '@/widgets/child-what-includes-services/types/child-what-includes-services.types';
import type { CostOfServicesProps } from '@/widgets/cost-of-services/types/cost-of-services.types';
import type { FirstVisitSectionProps } from '@/widgets/first-visit-section/types/first-visit-section.types';
import type { HeroProps } from '@/widgets/hero/types/hero.types';
import type { OurPeopleSectionProps } from '@/widgets/our-people-section/types/our-people-section.types';
import type { RecommendsForChildrenProps } from '@/widgets/recommends-for-children/types/recommends-for-children.types';

export const HERO_DATA: HeroProps = {
    title: 'Лечим детские зубы бережно&nbsp;&mdash; без боли и&nbsp;страха',
    description:
        'Останавливаем кариес, восстанавливаем молочные и&nbsp;постоянные зубы и&nbsp;помогаем ребёнку спокойно пройти лечение.',
    button: {
        title: 'Записать ребёнка на приём',
        href: APPOINTMENT_ID.id,
    },
    poster: {
        webp: {
            src: '/mock/child-therapy/1-desktop.webp',
        },
        original: {
            src: '/mock/child-therapy/1-desktop.jpg',
        },
    },
};

export const CHILD_WHAT_INCLUDES_SERVICES: ChildWhatIncludesServicesProps = {
    sectionHeader: {
        title: 'Что включает детская терапия',
        description:
            'Детская терапия&nbsp;&mdash; это лечение кариеса и&nbsp;его осложнений у&nbsp;молочных и&nbsp;постоянных зубов. Врач подбирает метод так, чтобы сохранить зуб до&nbsp;естественной смены и&nbsp;не&nbsp;навредить зачатку постоянного.',
    },
    cards: [
        {
            title: 'Диагностика',
            description:
                'Осматриваем полость рта, при необходимости делаем снимок и&nbsp;определяем, насколько глубоко зашёл процесс.',
            poster: {
                webp: {
                    src: '/mock/pediatric-surgery/what-includes-services/first.webp',
                },
            },
        },
        {
            title: 'Подготовка и&nbsp;анестезия',
            description:
                'Показываем инструменты, объясняем каждый шаг и&nbsp;делаем аппликационную, а&nbsp;затем инфильтрационную анестезию&nbsp;&mdash; укол ребёнок почти не&nbsp;чувствует.',
            cardType: 'vertical-alexik',
            poster: {
                original: {
                    src: '/mock/pediatric-surgery/what-includes-services/happy-alexik.png',
                },
            },
        },
        {
            title: 'Лечение кариеса',
            description:
                'Убираем поражённые ткани и&nbsp;восстанавливаем форму зуба пломбой или коронкой, чтобы он&nbsp;полноценно жевал до&nbsp;смены.',
            poster: {
                webp: {
                    src: '/mock/pediatric-surgery/what-includes-services/third.webp',
                },
            },
        },
        {
            title: 'Лечение пульпита и&nbsp;каналов',
            description:
                'Если воспаление дошло до&nbsp;нерва, лечим пульпит или периодонтит&nbsp;&mdash; работаем в&nbsp;коффердаме и&nbsp;под микроскопом.',
            poster: {
                webp: {
                    src: '/mock/pediatric-surgery/what-includes-services/fourth.webp',
                },
            },
        },
        {
            title: 'Профилактика и&nbsp;контроль',
            description:
                'Герметизируем фиссуры, укрепляем эмаль и&nbsp;договариваемся о&nbsp;контрольном осмотре, чтобы новый кариес не&nbsp;появился.',
            cardType: 'horizontal-alexik',
            poster: {
                original: {
                    src: '/mock/pediatric-surgery/what-includes-services/alexik-with-heart.png',
                },
            },
        },
    ],
};

export const RECOMMENDS_FOR_CHILDREN_DATA: RecommendsForChildrenProps = {
    sectionHeader: {
        title: 'Когда ребёнка пора показать стоматологу&#8209;терапевту?',
        description:
            'Детский кариес развивается быстрее, чем у&nbsp;взрослых, и&nbsp;долго не&nbsp;болит. Чем раньше мы&nbsp;его заметим, тем проще и&nbsp;дешевле лечение.',
        mockup: '/system/alexik-wash.png',
    },
    cards: [
        {
            title: 'Пятна на&nbsp;зубах',
            description:
                'Появились белые, жёлтые или тёмные пятна&nbsp;&mdash; это первые признаки кариеса, который ещё можно остановить.',
        },
        {
            title: 'Ребёнок жалуется на&nbsp;боль',
            description:
                'Зуб ноет сам по&nbsp;себе или ночью&nbsp;&mdash; скорее всего, воспаление дошло до&nbsp;нерва и&nbsp;нужен приём вне очереди.',
        },
        {
            title: 'Реакция на&nbsp;холодное и&nbsp;сладкое',
            description:
                'Ребёнок отказывается от&nbsp;мороженого или жуёт только одной стороной.',
        },
        {
            title: 'Скол или травма зуба',
            description:
                'Зуб откололся после падения или удара&nbsp;&mdash; важно проверить, не&nbsp;задет&nbsp;ли нерв.',
        },
        {
            title: 'Дырка или остаток зуба',
            description:
                'В&nbsp;зубе видно углубление, застревает еда или от&nbsp;зуба осталась только часть.',
        },
        {
            title: 'Отёк или шишка на&nbsp;десне',
            description:
                'Десна припухла, покраснела или рядом с&nbsp;зубом появился бугорок&nbsp;&mdash; это признак гнойного процесса.',
        },
    ],
};

export const FIRST_VISIT_SECTION_DATA: FirstVisitSectionProps = {
    sectionHeader: {
        title: 'Лечение, после которого ребёнок не&nbsp;боится врача',
        mockup: '/mock/pediatric-dental-consultation/first-visit/alexik-with-stick.webp',
    },
    cards: [
        {
            title: 'Без боли',
            description:
                'Современная анестезия и&nbsp;&mdash; по&nbsp;показаниям&nbsp;&mdash; седация или лечение во&nbsp;сне под контролем анестезиолога.',
            poster: {
                webp: {
                    src: '/mock/pediatric-dental-consultation/first-visit/first-card.webp',
                },
            },
        },
        {
            title: 'В&nbsp;темпе ребёнка',
            description:
                'Не&nbsp;торопим и&nbsp;не&nbsp;удерживаем: если ребёнок не&nbsp;готов, разбиваем лечение на&nbsp;несколько коротких визитов.',
            poster: {
                webp: {
                    src: '/mock/pediatric-dental-consultation/first-visit/second-card.webp',
                },
            },
        },
        {
            title: 'Точно и&nbsp;чисто',
            description:
                'Работаем с&nbsp;коффердамом и&nbsp;микроскопом Leica M320&nbsp;&mdash; зуб изолирован от&nbsp;слюны, а&nbsp;пломба держится дольше.',
            poster: {
                webp: {
                    src: '/mock/pediatric-dental-consultation/first-visit/third-card.webp',
                },
            },
        },
        {
            title: 'Всё понятно родителям',
            description:
                'Показываем фото и&nbsp;видео каждого этапа, объясняем, что сделали и&nbsp;как ухаживать за&nbsp;зубом дома.',
            poster: {
                webp: {
                    src: '/mock/pediatric-dental-consultation/first-visit/fourth-card.webp',
                },
            },
        },
    ],
};

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
    title: 'Врачи, оказывающие услугу',
    button: {
        title: 'Смотреть всех специалистов',
        href: SITE_NAVIGATION.vrachi,
    },
    employees: [GLOBAL_EMPLOYEES.nikitin, GLOBAL_EMPLOYEES.zabaluev],
};

export const COST_OF_SERVICES: CostOfServicesProps = {
    title: 'Стоимость услуг:',
    cards: [
        {
            title: 'Лечение кариеса молочного зуба (2&nbsp;и&nbsp;более поверхностей)',
            description:
                '<p>Убираем поражённые ткани и&nbsp;восстанавливаем зуб пломбой, чтобы он&nbsp;дожил до&nbsp;естественной смены.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 6_300,
        },
        {
            title: 'Восстановление молочного зуба стеклоиономерным цементом',
            description:
                '<p>Материал постепенно отдаёт фтор и&nbsp;укрепляет эмаль вокруг пломбы&nbsp;&mdash; подходит для самых маленьких пациентов.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 5_200,
        },
        {
            title: 'Лечение пульпита/периодонтита молочного зуба',
            description:
                '<p>Лечим воспаление, когда кариес дошёл до&nbsp;нерва или вышел за&nbsp;пределы корня, и&nbsp;сохраняем зуб.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 7_400,
        },
        {
            title: 'Биологическое лечение пульпита',
            description:
                '<p>Методика для глубокого кариеса: сохраняем живой нерв, если воспаление ещё не&nbsp;стало необратимым.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 7_400,
        },
        {
            title: 'Лечение поверхностного кариеса постоянного зуба',
            description:
                '<p>Ранняя стадия на&nbsp;постоянном зубе&nbsp;&mdash; лечение занимает один визит и&nbsp;минимум вмешательства.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 8_500,
        },
        {
            title: 'Лечение кариеса постоянного зуба',
            description:
                '<p>Восстанавливаем форму и&nbsp;жевательную функцию постоянного зуба композитной реставрацией.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 10_700,
        },
        {
            title: 'Эндодонтическое лечение (1&#8209;2&nbsp;канала)',
            description:
                '<p>Лечение каналов постоянного зуба под микроскопом и&nbsp;в&nbsp;коффердаме.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 9_900,
        },
        {
            title: 'Эндодонтическое лечение (3&nbsp;и&nbsp;более каналов)',
            description:
                '<p>Многоканальные жевательные зубы: проходим и&nbsp;пломбируем каждый канал по&nbsp;всей длине.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 15_000,
        },
        {
            title: 'Постэндодонтическая реставрация',
            description:
                '<p>Восстановление зуба после лечения каналов&nbsp;&mdash; возвращаем форму и&nbsp;защищаем от&nbsp;перелома.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 7_900,
        },
        {
            title: 'Восстановление зуба металлической коронкой',
            description:
                '<p>Готовая детская коронка на&nbsp;сильно разрушенный молочный зуб&nbsp;&mdash; устанавливается за&nbsp;один визит.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 5_200,
        },
        {
            title: 'Восстановление зуба композитной коронкой',
            description:
                '<p>Эстетичное решение для передних зубов: цвет коронки подбираем под&nbsp;собственные зубы ребёнка.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 7_400,
        },
        {
            title: 'Герметизация фиссур',
            description:
                '<p>Запечатываем естественные углубления жевательных зубов, где чаще всего начинается кариес.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 4_600,
        },
        {
            title: 'Реминерализирующая терапия',
            description:
                '<p>Насыщаем эмаль кальцием и&nbsp;фтором, чтобы остановить кариес в&nbsp;стадии пятна&nbsp;&mdash; без бора.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 3_000,
        },
        {
            title: 'Снятие острой боли',
            description:
                '<p>Приём вне очереди, когда ребёнка беспокоит боль: находим причину и&nbsp;помогаем снять неприятные ощущения.</p>',
            button: COSTS_OF_SERVICES_BUTTON,
            price: 3_500,
        },
    ],
};

export const FORM_DATA: AppointmentSchedulingProps = {
    title: 'Запись на&nbsp;приём',
    description:
        'Оставьте свои контактные данные и&nbsp;мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время',
    poster: {
        webp: {
            src: '/system/form.webp',
        },
    },
};
