import type { BrickworkSectionProps } from '@/widgets/brickwork-section/types/brickwork-section.types';
import type { InstallmentPlanSectionProps } from '@/widgets/installment-plan-section/types/installment-plan-section.types';
import type { QuadroSectionProps } from '@/widgets/quadro-section/types/quadro-section.types';
import type { StagesSectionProps } from '@/widgets/stages-section/types/stages-section.types';
import type { TitleStickySectionProps } from '@/widgets/tilte-sticky-section/types/title-sticky-section.types';

export const QUADRO_SECTION_MOCK: QuadroSectionProps = {
    sectionHeader: {
        title: 'Лечение &laquo;во&nbsp;сне&raquo; просыпайтесь с&nbsp;идеальной улыбкой',
        card: {
            title: 'Ваша здоровая улыбка начинается здесь!',
            buttonText: 'Записаться на прием',
        },
        poster: {
            original: {
                src: '/mock/treatment-in-dream/treatment-in-dream-hero.jpg',
            },
        },
    },
    cards: [
        {
            title: 'Обеспечиваем непревзойденный комфорт и&nbsp;безопасность для каждого пациента.',
        },
        {
            title: 'Наши методы позволяют избавиться от&nbsp;страха и&nbsp;тревог, гарантируя высококачественное и&nbsp;эффективное лечение в&nbsp;атмосфере полного спокойствия.',
        },
    ],
};

export const TITLE_STICKY_SECTION_MOCK: TitleStickySectionProps = {
    title: 'Sevorane&nbsp;&mdash; лечение зубов без боли и&nbsp;страха',
    cards: [
        {
            title: 'Безопасность и&nbsp;мягкое воздействие:',
            description:
                'Этот наркоз, основанный на&nbsp;севофлуране, не&nbsp;имеет запаха и&nbsp;цвета, а&nbsp;также не&nbsp;вызывает раздражения дыхательных путей.',
        },
        {
            title: 'Стабильность и&nbsp;контроль:',
            description:
                '&laquo;Севоран&raquo; обеспечивает стабильный уровень глубины наркоза, что позволяет врачам контролировать состояние ребенка на&nbsp;протяжении всей процедуры.',
        },
        {
            title: 'Минимальное влияние на&nbsp;организм:',
            description:
                '&laquo;Севоран&raquo; имеет минимальное влияние на&nbsp;сердечно-сосудистую систему и&nbsp;не&nbsp;вступает в&nbsp;химические реакции с&nbsp;организмом.',
        },
        {
            title: 'Отсутствие последствий:',
            description:
                '&laquo;Севоран&raquo; имеет низкую частоту негативных эффектов и&nbsp;подходит даже для самых чувствительных пациентов. Однако перед процедурой вас обязательно проконсультирует врач-специалист.',
        },
        {
            title: 'Современное оборудование:',
            description:
                'Наша клиника оснащена наркозным аппаратом Datex-Ohmeda 9100c NXT, который гарантирует полный контроль всех жизненно важных функций во&nbsp;время процедуры, обеспечивая максимальную безопасность и&nbsp;комфорт для вашего ребёнка.',
        },
        {
            description:
                'Пациентам с&nbsp;генетической предрасположенностью к&nbsp;гипертермии в&nbsp;нашей клинике применяют препарат &laquo;Дантролен&raquo;, который предотвращает тяжелое состояние пациента. Также важно помнить, что процедура проводится натощак, чтобы избежать возможных осложнений.&quot;',
        },
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

export const INSTALLMENT_PLAN_SECTION_MOCK: InstallmentPlanSectionProps = {
    descriptionBlock: {
        title: 'Рассрочка на&nbsp;лечение во&nbsp;сне&nbsp;&mdash; удобные условия для вашего комфорта!',
        content:
            '<p>В&nbsp;нашей стоматологии теперь доступна рассрочка на&nbsp;лечение во&nbsp;сне:</p><br /><p><b>Первоначальный взнос:</b> всего&nbsp;50%</p><p><b>Срок рассрочки:</b> 6&nbsp;месяцев.</p><p><b>Дальнейшая оплата:</b> равными частями без переплат.</p>',
        buttonText: 'Оставить заявку',
    },
    postersBlock: {
        poster: {
            webp: {
                src: '/mock/treatment-in-dream/installment-desktop.webp',
            },
        },
    },
};

export const BRICK_WORK_SECTION_MOCK: BrickworkSectionProps = {
    sectionHeader: {
        title: 'Седация',
        description: 'Идеальный вариант для первых посещений стоматолога',
    },
    cards: [
        {
            title: 'Как работает седация?',
            description:
                '<p><b>Расслабление и&nbsp;эйфория:</b></p><p>Закись азота, или &laquo;веселящий газ&raquo;, поступает через специальную маску и&nbsp;вызывает чувство расслабленности и&nbsp;легкой эйфории. Пациент не&nbsp;испытывает страха и&nbsp;беспокойства, оставаясь в&nbsp;сознании.</p><br /><p><b>Быстрое усвоение и&nbsp;выведение:</b></p><p>Закись азота легко усваивается организмом и&nbsp;быстро выводится после процедуры без каких-либо негативных последствий.</p>',
        },
        {
            title: 'Преимущества седации:',
            description:
                '<p><b>Быстрое восстановление:</b></p><p>Пациент быстро приходит в&nbsp;сознание и&nbsp;возвращается к&nbsp;своей обычной жизни.</p><br /><p><b>Повышенная устойчивость к&nbsp;болевым ощущениям:</b></p><p>Закись азота снижает чувствительность к&nbsp;боли.</p>',
        },
    ],
};

export const STAGES_SECTION: StagesSectionProps = {
    titleBlock: {
        title: 'Седация проходит в&nbsp;3&nbsp;этапа',
    },
    cards: {
        cards: [
            {
                poster: {
                    original: {
                        src: '/mock/treatment-in-dream/stage-1.jpg',
                    },
                },
                description:
                    'Пациенты могут наслаждаться просмотром мультиков/фильмов, общением с&nbsp;доктором, комфортно располагаясь в&nbsp;специальном кресле и&nbsp;примеряя кислородную маску.',
            },
            {
                poster: {
                    webp: {
                        src: '/mock/treatment-in-dream/stage-2.webp',
                    },
                },
                description:
                    'Через специальную маску поступает смесь кислорода с&nbsp;добавлением закиси азота. Для каждого пациента индивидуально подбирается оптимальная концентрация. Уже спустя некоторое время возникает успокаивающее воздействие.',
            },
            {
                poster: {
                    webp: {
                        src: '/mock/treatment-in-dream/stage-3.webp',
                    },
                },
                description:
                    'Пациент остается в&nbsp;сознании, продолжает общаться с&nbsp;доктором и&nbsp;следовать необходимым инструкциям. После того как он&nbsp;успокаивается и&nbsp;перестает испытывать страх, требуется введение местного обезболивания и&nbsp;начало лечения.',
            },
        ],
    },
};
