import type { AppointmentSchedulingProps } from '@/features/appointment-scheduling-section/types/appointment-scheduling.types';
import { SITE_NAVIGATION } from '@/shared/config/site-navigation';
import type { DiagnosticProcessSectionProps } from '@/widgets/diagnostic-process-section/types/diagnostic-process-section.types';
import type { HealthForFamilyProps } from '@/widgets/health-for-family/types/health-for-family.types';
import type { SlideVariantProps } from '@/widgets/hero-slider-section/types/hero-slider-section.types';
import type { OurPeopleSectionProps } from '@/widgets/our-people-section/types/our-people-section.types';
import type { TableImageSectionProps } from '@/widgets/table-image-section/types/table-image-section.types';
import type { TitleDescriptionSliderProps } from '@/widgets/title-description-slider/types/title-description-slider.types';

import type { InfoTabsProps } from '../types/info-tabs.types';

export const FIRST_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
    title: 'Наши преимущества',
    textBlock: {
        title: 'Новые технологии',
        description:
            'Для составления плана лечения мы&nbsp;проводим полноценную диагностику: анализируем профессиональные фотографии зубов и&nbsp;лица, сканы зубных рядов и&nbsp;данные компьютерной томографии. Мы&nbsp;активно работаем высокоточными элайнерами Eurokappa и&nbsp;самыми современными самолигирующими брекетами Damon, благодаря чему уменьшаются сроки лечения.',
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
        title: 'Общая стоимость лечения известна заранее',
        description:
            'Наш прайс построен по&nbsp;западной системе: пациент информирован об&nbsp;общей стоимости лечения, включающей в&nbsp;себя все манипуляции ортодонта от&nbsp;установки до&nbsp;снятия брекетов. Никаких скрытых платежей. Стоимость фиксируется до&nbsp;начала лечения и&nbsp;не&nbsp;меняется в&nbsp;его процессе.',
    },
    posters: [
        {
            webp: {
                src: '/mock/adult-orthopedics/second-slider/1-slide.webp',
            },
        },
        {
            webp: {
                src: '/mock/home/second-slider/2-4.webp',
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
        title: 'Лечить детей&nbsp;&mdash; наше призвание',
        description:
            'Наша клиника оснащена всем необходимым оборудованием и&nbsp;квалифицированными сотрудниками для лечения детей во&nbsp;сне и&nbsp;под седацией. Наши детские врачи могут найти общий язык даже с&nbsp;самым капризным малышом. При необходимости мы&nbsp;устанавливаем во&nbsp;сне и&nbsp;ортодонтические аппараты нашим маленьким пациента.',
    },
    posters: [
        {
            webp: {
                src: '/mock/home/second-slider/2-3.webp',
            },
        },
        {
            webp: {
                src: '/mock/home/second-slider/2-2.webp',
            },
        },
        {
            webp: {
                src: '/mock/home/second-slider/2-4.webp',
            },
        },
    ],
};

export const FOURTH_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
    textBlock: {
        title: 'Комплексный подход',
        description:
            'У&nbsp;нас работают врачи всех стоматологических специальностей, между которыми налажено взаимодействие. Все клинические случаи обсуждаются на&nbsp;консилиуме. Для каждого пациента выстраивается полноценный маршрут прохождения специалистов, который координирует администратор.',
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

export const HERO_SECTION: SlideVariantProps = {
    title: 'алекса',
    subtitle: 'Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону',
    legend: '<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей.',
    poster: {
        webp: {
            src: '/mock/adult-orthodontics/hero.webp',
        },
    },
    card: {
        title: 'Разные системы&nbsp;&mdash; один точный результат',
        content:
            '<p>Брекеты или элайнеры&nbsp;&mdash; выбираем путь, который будет эффективнее в&nbsp;вашем случае</p>',
        buttonText: 'Записаться на прием',
    },
};

export const HEALTH_FOR_FAMILY_MOCK: HealthForFamilyProps = {
    tabsBlock: {
        title: 'Выберите подходящее решение для выравнивания зубов',
        description:
            'В&nbsp;нашей клинике доступны современные ортодонтические системы, которые помогут вам достичь идеальной улыбки с&nbsp;комфортом и&nbsp;эффективностью',
        tabs: [
            {
                title: 'Брекеты Damon&nbsp;Q',
                slug: 'braces-damon-q',
            },
            {
                title: 'Элайнеры EUROKAPPA',
                slug: 'eurokappa-eliners',
            },
            {
                title: 'Элайнеры Spark',
                slug: 'spark-eliners',
            },
        ],
    },
    tabsContent: {
        'braces-damon-q': {
            type: 'sliderAdvantages',
            slider: {
                textBlock: {
                    title: 'Брекеты Damon&nbsp;Q',
                    description:
                        'Современная самолигирующая система от&nbsp;американской компании Ormco, предназначенная для эффективной и&nbsp;комфортной коррекции прикуса у&nbsp;пациентов всех возрастов.​',
                },
                posters: [
                    {
                        webp: {
                            src: '/mock/adult-orthopedics/tabs-section/1-1-slider.webp',
                        },
                    },
                    {
                        webp: {
                            src: '/mock/adult-orthopedics/tabs-section/1-2-slider.webp',
                        },
                    },
                    {
                        webp: {
                            src: '/mock/adult-orthopedics/tabs-section/1-3-slider.webp',
                        },
                    },
                ],
            },
            advantagesSection: {
                title: 'Преимущества',
                cards: [
                    'Сокращение времени лечения на&nbsp;20&ndash;30% по&nbsp;сравнению с&nbsp;традиционными системами.',
                    'Самолигирующий механизм SpinTek для свободного скольжения дуги и&nbsp;равномерного распределения нагрузки.',
                    'Быстрая замена дуг и&nbsp;позиционирования брекетов.​',
                    'Упрощённая гигиена полости рта благодаря отсутствию лигатур.',
                    'Минимальный дискомфорт и&nbsp;быстрое привыкание.​',
                    'Компактный размер и&nbsp;эстетичный внешний вид.',
                ],
            },
            priceCards: {
                cards: [
                    {
                        title: 'Керамические брекеты Damon&nbsp;Q',
                        content:
                            '<ul><li>Надежное и&nbsp;эффективное решение для коррекции прикуса.​</li><li>Прочные и&nbsp;долговечные, подходят для различных клинических случаев.​</li></ul><p><b>Цена</b>: от&nbsp;150&nbsp;000 ₽</p>',
                        buttonText: 'Консультация',
                    },
                    {
                        title: 'Металлические брекеты Damon&nbsp;Q',
                        content:
                            '<ul><li>Обеспечивают комфорт и&nbsp;незаметность при ношении.​​​</li><li>Эстетичный вариант с&nbsp;прозрачными или зубовидными брекетами.​​</li></ul><p><b>Цена</b>: от&nbsp;180&nbsp;000 ₽</p>',
                        buttonText: 'Консультация',
                    },
                ],
            },
            stepper: {
                title: 'Пройдите 7&nbsp;шагов к&nbsp;идеальной улыбке',
                steps: [
                    'Консультация ортодонта',
                    'Диагностика',
                    'Обсуждение плана лечения',
                    'Чистка и&nbsp;лечение зубов (при необходимости)',
                    'Повторное сканирование или снятие слепков',
                    'Обсуждение 3D&nbsp;плана при лечении на&nbsp;элайнерах',
                    'Фиксация элайнеров/брекет-системы и&nbsp;начало лечения',
                ],
            },
        },
        'eurokappa-eliners': {
            type: 'sliderAdvantages',
            slider: {
                textBlock: {
                    title: 'Элайнеры EUROKAPPA',
                    description:
                        'Прозрачные съёмные ортодонтические каппы, разработанные с&nbsp;использованием 3D-моделирования для точного и&nbsp;предсказуемого выравнивания зубов.​',
                },
                textBlockPosition: 'right',
                posters: [
                    {
                        webp: {
                            src: '/mock/adult-orthopedics/tabs-section/2-1-slider.webp',
                        },
                    },
                    {
                        webp: {
                            src: '/mock/adult-orthopedics/tabs-section/2-2-slider.webp',
                        },
                    },
                    {
                        webp: {
                            src: '/mock/adult-orthopedics/tabs-section/2-3-slider.webp',
                        },
                    },
                ],
            },
            advantagesSection: {
                title: 'Преимущества',
                cards: [
                    'Предварительное 3D-планирование позволяет увидеть результат до&nbsp;начала лечения.',
                    'Съёмные конструкции позволяют сохранять привычный образ жизни.​',
                    'Гипоаллергенный материал безопасен для здоровья.​​',
                    'Подходят для большинства случаев коррекции прикуса.​',
                    'Незаметны при ношении, быстрое привыкание.​',
                    'Быстрое изготовление и&nbsp;доставка.',
                ],
            },
            stepper: {
                title: 'Пройдите 7&nbsp;шагов к&nbsp;идеальной улыбке',
                steps: [
                    'Консультация ортодонта',
                    'Диагностика',
                    'Обсуждение плана лечения',
                    'Чистка и&nbsp;лечение зубов (при необходимости)',
                    'Повторное сканирование или снятие слепков',
                    'Обсуждение 3D&nbsp;плана при лечении на&nbsp;элайнерах',
                    'Фиксация элайнеров/брекет-системы и&nbsp;начало лечения',
                ],
                priceCards: [
                    {
                        title: 'Элайнеры EUROKAPPA',
                        content:
                            '<ul><li>Индивидуально изготовленные каппы для комфортного и&nbsp;эффективного выравнивания зубов.​</li><li>Подходят для взрослых и&nbsp;подростков.​</li></ul><p><b>Цена:</b>от&nbsp;170&nbsp;000 ₽</p>',
                        buttonText: 'Консультация',
                    },
                ],
            },
        },
        'spark-eliners': {
            type: 'sliderAdvantages',
            slider: {
                textBlock: {
                    title: 'Элайнеры Spark',
                    description:
                        'Прозрачные съёмные ортодонтические каппы, изготовленные из&nbsp;инновационного материала TruGEN&trade;. Почти невидимые элайнеры более прозрачны, комфортны и&nbsp;меньше окрашиваются, обеспечивают максимально эффективное и&nbsp;точное перемещения зубов.',
                },
                posters: [
                    {
                        webp: {
                            src: '/mock/adult-orthopedics/tabs-section/3-1-slider.webp',
                        },
                    },
                    {
                        webp: {
                            src: '/mock/adult-orthopedics/tabs-section/3-2-slider.webp',
                        },
                    },
                    {
                        webp: {
                            src: '/mock/adult-orthopedics/tabs-section/3-3-slider.webp',
                        },
                    },
                ],
            },
            advantagesSection: {
                title: 'Преимущества',
                cards: [
                    'Предварительное 3D-планирование позволяет увидеть результат до&nbsp;начала лечения.',
                    'Съёмные конструкции позволяют сохранять привычный образ жизни.​',
                    'Гипоаллергенный материал безопасен для здоровья.​​',
                    'Подходят для большинства случаев коррекции прикуса.​',
                    'Незаметны при ношении, быстрое привыкание.​',
                    'Быстрое изготовление и&nbsp;доставка.',
                ],
            },
            stepper: {
                title: 'Пройдите 7&nbsp;шагов к&nbsp;идеальной улыбке',
                steps: [
                    'Консультация ортодонта',
                    'Диагностика',
                    'Обсуждение плана лечения',
                    'Чистка и&nbsp;лечение зубов (при необходимости)',
                    'Повторное сканирование или снятие слепков',
                    'Обсуждение 3D&nbsp;плана при лечении на&nbsp;элайнерах',
                    'Фиксация элайнеров/брекет-системы и&nbsp;начало лечения',
                ],
                priceCards: [
                    {
                        title: 'Элайнеры Spark',
                        content:
                            '<ul><li>Индивидуально изготовленные каппы для комфортного и&nbsp;эффективного выравнивания зубов.​​</li><li>Подходят для взрослых и&nbsp;подростков.​</li></ul><p><b>Цена:</b>от&nbsp;175&nbsp;000 ₽</p>',
                        buttonText: 'Консультация',
                    },
                ],
            },
        },
    },
};

export const TABLE_IMAGE_SECTION: TableImageSectionProps = {
    title: 'Какие элайнеры выбрать?<br /> Сравниваем для вас',
    description:
        'Все системы&nbsp;&mdash; надёжные. Но&nbsp;каждая подходит под разные задачи.<br /> Показали ключевые отличия, чтобы вам было проще принять решение вместе с&nbsp;врачом',
    poster: {
        original: {
            src: '/mock/adult-orthodontics/table.svg',
            mobile: '/mock/adult-orthodontics/table-mobile.svg',
        },
    },
};

export const BEFORE_AFTER_SLIDER: TitleDescriptionSliderProps = {
    title: 'До&nbsp;и&nbsp;после: реальные примеры наших пациентов',
    textBlock: {
        title: 'Ваш результат может быть следующим!',
        description:
            'Посмотрите, каких результатов мы&nbsp;достигаем&nbsp;&mdash; аккуратное выравнивание зубов, исправление прикуса и&nbsp;улыбки, которыми хочется делиться.<br /><br />Каждая работа&nbsp;&mdash; это индивидуальный подход, забота врача и&nbsp;внимание к&nbsp;деталям.',
        withButton: true,
    },
    posters: [
        {
            webp: {
                src: '/mock/before-after/1-before-after.webp',
            },
        },
        {
            webp: {
                src: '/mock/before-after/2-before-after.webp',
            },
        },
        {
            webp: {
                src: '/mock/before-after/3-before-after.webp',
            },
        },
        {
            webp: {
                src: '/mock/before-after/4-before-after.webp',
            },
        },
        {
            webp: {
                src: '/mock/before-after/5-before-after.webp',
            },
        },
        {
            webp: {
                src: '/mock/before-after/6-before-after.webp',
            },
        },
        {
            webp: {
                src: '/mock/before-after/7-before-after.webp',
            },
        },
        {
            webp: {
                src: '/mock/before-after/8-before-after.webp',
            },
        },
        {
            webp: {
                src: '/mock/before-after/9-before-after.webp',
            },
        },
        {
            webp: {
                src: '/mock/before-after/10-before-after.webp',
            },
        },
        {
            webp: {
                src: '/mock/before-after/11-before-after.webp',
            },
        },
    ],
};

export const INFO_TABS: InfoTabsProps = {
    tabsBlock: {
        title: 'Выберите подходящее решение для выравнивания зубов',
        description:
            'В&nbsp;нашей клинике доступны современные ортодонтические системы, которые помогут вам достичь идеальной улыбки с&nbsp;комфортом и&nbsp;эффективностью',
        tabs: [
            {
                title: 'Брекеты',
                slug: 'braces',
            },
            {
                title: 'Элайнеры',
                slug: 'eliners',
            },
        ],
    },
    content: {
        braces: {
            whatIncludes: {
                title: 'Что включает услуга',
                cards: [
                    { title: 'Комплексная диагностика' },
                    { title: 'Установка брекет-системы' },
                    { title: 'Подготовка к&nbsp;установке' },
                    {
                        title: 'Контроль и&nbsp;сопровождение лечения',
                    },
                ],
            },
            stickyTitle: {
                title: 'Преимущества брекетов',
                lastCard: {
                    poster: {
                        webp: {
                            src: '/mock/adult-orthodontics/brecets.webp',
                        },
                    },
                },
                cards: [
                    {
                        title: 'Сокращение времени лечения на&nbsp;20&ndash;30% по&nbsp;сравнению с&nbsp;традиционными системами.',
                    },
                    {
                        title: 'Быстрая замена дуг и&nbsp;позиционирования брекетов.',
                    },
                    {
                        title: 'Минимальный дискомфорт и&nbsp;быстрое привыкание.',
                    },
                    {
                        title: 'Самолигирующий механизм SpinTek для свободного скольжения дуги и&nbsp;равномерного распределения нагрузки.',
                    },
                    {
                        title: 'Упрощённая гигиена полости рта благодаря отсутствию лигатур.​',
                    },
                    {
                        title: 'Компактный размер и&nbsp;эстетичный внешний вид.​',
                    },
                ],
            },
            stepsForPerfectSmile: {
                title: 'Пройдите 7&nbsp;шагов к&nbsp;идеальной улыбке',
                steps: [
                    '1. Консультация ортодонта',
                    '2. Диагностика',
                    '3. Обсуждение плана лечения',
                    '4. Чистка и&nbsp;лечение зубов (при необходимости)',
                    '5. Повторное сканирование или снятие слепков',
                    '6. Фиксация элайнеров/брекет-системы и&nbsp;начало лечения',
                ],
            },
            costs: {
                title: 'Стоимость услуг:',
                cards: [
                    {
                        title: 'Ортодонтическая коррекция с&nbsp;применением брекет-системы.&nbsp;2&nbsp;челюсти',
                        price: 126_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Ортодонтическая коррекция с применением брекет-систем',
                        price: 168_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Снятие ортодонтического аппарата брекет-системы (1&nbsp;зубной ряд)',
                        price: 6_300,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Несъемный  ретейнер индивидуального	исполнения',
                        price: 18_900,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                ],
            },
        },
        eliners: {
            whatIncludes: {
                title: 'Что включает услуга',
                cards: [
                    { title: 'Диагностика и&nbsp;цифровое планирование' },
                    { title: 'Выдача и&nbsp;установка первой пары' },
                    { title: 'Изготовление элайнеров' },
                    {
                        title: 'Контроль лечения',
                    },
                ],
            },
            stickyTitle: {
                title: 'Преимущества элайнеров',
                lastCard: {
                    poster: {
                        webp: {
                            src: '/mock/adult-orthodontics/eliners.webp',
                        },
                    },
                },
                cards: [
                    {
                        title: 'Предварительное 3D-планирование позволяет увидеть результат до&nbsp;начала лечения',
                    },
                    {
                        title: 'Съёмные конструкции позволяют сохранять привычный образ жизни',
                    },
                    {
                        title: 'Гипоаллергенный материал безопасен для здоровья​',
                    },
                    {
                        title: 'Подходят для большинства случаев коррекции прикуса',
                    },
                    {
                        title: 'Незаметны при ношении, быстрое привыкание​',
                    },
                    {
                        title: 'Быстрое изготовление и&nbsp;доставка​',
                    },
                ],
            },
            stepsForPerfectSmile: {
                title: 'Пройдите 7&nbsp;шагов к&nbsp;идеальной улыбке',
                steps: [
                    '1. Консультация ортодонта',
                    '2. Диагностика',
                    '3. Обсуждение плана лечения',
                    '4. Чистка и&nbsp;лечение зубов (при необходимости)',
                    '5. Повторное сканирование или снятие слепков',
                    '6. Обсуждение 3D&nbsp;плана при лечении на&nbsp;элайнерах',
                    '7. Фиксация элайнеров/брекет-системы и&nbsp;начало лечения',
                ],
            },
            costs: {
                title: 'Стоимость услуг:',
                cards: [
                    {
                        title: 'Элайнеры EUROKAPPA light (12&nbsp;пар)',
                        price: 194_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Элайнеры EUROKAPPA Complete (22&nbsp;пары)',
                        price: 275_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Элайнеры EUROKAPPA Complete (22&nbsp;пары)',
                        price: 275_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Элайнеры EUROKAPPA Profi',
                        price: 369_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Элайнеры Spark&nbsp;10',
                        price: 225_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Элайнеры Spark&nbsp;20',
                        price: 315_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Элайнеры Spark Advanced',
                        price: 315_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Элайнеры Angel Aligner Select&nbsp;10',
                        price: 210_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Элайнеры Angel Aligner Select&nbsp;20',
                        price: 285_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Элайнеры Angel Aligner Select&nbsp;30',
                        price: 285_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Элайнеры Angel Aligner Select Unlimited',
                        price: 350_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                    {
                        title: 'Элайнеры Angel Aligner Pro Unlimited',
                        price: 395_000,
                        button: {
                            title: 'Получить консультацию',
                            href: '#',
                        },
                    },
                ],
            },
            eliners: {
                sectionHeader: {
                    title: 'Какие элайнеры выбрать? Сравниваем для вас',
                    description:
                        'Все системы&nbsp;&mdash; надёжные. Но&nbsp;каждая подходит под разные задачи. Показали ключевые отличия, чтобы вам было проще принять решение вместе с&nbsp;врачом',
                },
                eliners: [
                    {
                        name: 'Spark',
                        country: 'США',
                        deliveryTime: '~1.5 месяца с&nbsp;момента оплаты',
                        stepsTime: 'Быстрое моделирование лечения',
                        wearingComfort: 'Более удобные, проверенные материалы',
                        specialCases:
                            'Нет детских элайнеров, только взрослые пациенты',
                    },
                    {
                        name: 'Eurokappa',
                        country: 'Россия',
                        deliveryTime: '~1 неделя с&nbsp;момента оплаты',
                        stepsTime: 'Моделирование лечения дольше',
                        wearingComfort: 'Стандартный комфорт',
                        specialCases:
                            'Есть возможность лечить детей в&nbsp;сменном прикусе',
                    },
                    {
                        name: 'Angel Aliner',
                        country: 'Китай',
                        deliveryTime: '~1 неделя с&nbsp;момента оплаты',
                        stepsTime: 'Быстрое моделирование лечения',
                        wearingComfort:
                            'Высокий комфорт благодаря многослойному материалу',
                        specialCases:
                            'Подходит для сложных клинических случаев, включая эстракционные',
                    },
                ],
            },
        },
    },
};

export const DIAGNOSTICS_SECTION_MOCK: DiagnosticProcessSectionProps = {
    sectionHeader: {
        title: 'Ваша улыбка в&nbsp;руках профессионалов!',
        description: 'Мы&nbsp;реализуем целостный осмотр для своих пациентов:',
    },
    cards: [
        {
            title: 'Удаление зубов:',
            description:
                'Бережное удаление на&nbsp;ультразвуковом аппарате NSK VarioSurg3.',
            poster: {
                webp: {
                    src: '/mock/diagnostics/5-desktop.webp',
                },
            },
        },
        {
            title: 'Имплантация зубов:',
            description:
                'Протоколы All-on-4/All-on-6 и&nbsp;установка по&nbsp;точным хирургическим шаблонам.',
            poster: {
                webp: {
                    src: '/mock/diagnostics/1-desktop.webp',
                },
            },
        },
        {
            title: 'Анестезия:',
            description:
                'Безболезненное лечение под&nbsp;местной анестезией, седацией или&nbsp;наркозом.',
            poster: {
                webp: {
                    src: '/mock/diagnostics/6-desktop.webp',
                },
            },
        },
        {
            title: 'Зубосохраняющие операции:',
            description:
                'Пластика десны и&nbsp;уздечки, микрохирургия и&nbsp;закрытие рецессий.',
            poster: {
                webp: {
                    src: '/mock/diagnostics/4-desktop.webp',
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
            src: '/system/form.webp',
        },
    },
};

export const OUR_PEOPLE: OurPeopleSectionProps = {
    title: 'Врачи, оказывающие услугу',
    button: {
        title: 'Смотреть всех специалистов',
        href: SITE_NAVIGATION.vrachi,
    },
    employees: [
        {
            poster: {
                webp: {
                    src: '/mock/employees/employee-9.webp',
                },
            },
            fullname: 'Кравченко Павел Сергеевич',
            position: 'Врач-стоматолог-ортодонт',
        },
    ],
};
