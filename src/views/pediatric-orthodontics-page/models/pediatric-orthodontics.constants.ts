import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import type { PageContentCategoryType } from "@/features/page-content-filter/types/page-content-filter.types";
import {
	APPOINTMENT_ID,
	COSTS_OF_SERVICES_BUTTON,
	GLOBAL_EMPLOYEES,
} from "@/shared/config/global-constants.constants";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { ChildWhatIncludesServicesProps } from "@/widgets/child-what-includes-services/types/child-what-includes-services.types";
import type {
	CostOfServicesCardProps,
	CostOfServicesProps,
} from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { CtaHelpSectionProps } from "@/widgets/cta-help-section/types/cta-help-section.types";
import type { HealthForFamilyProps } from "@/widgets/health-for-family/types/health-for-family.types";
import type { HeroProps } from "@/widgets/hero/types/hero.types";
import type { OrthoHowItWorksProps } from "@/widgets/ortho-how-it-works/models/ortho-how-it-works.types";
import type { OrthoPriceCardsSectionProps } from "@/widgets/ortho-price-cards/types/ortho-price-cards.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";

export const HERO_MOCK: HeroProps = {
	title: "Ровная улыбка&nbsp;&mdash;<br /> с&nbsp;заботой о&nbsp;ребёнке",
	description:
		"Помогаем детям и&nbsp;подросткам сформировать правильный прикус и&nbsp;красивую улыбку. Бережно, понятно и&nbsp;без страха&nbsp;&mdash; с&nbsp;индивидуальным планом лечения для каждого ребёнка.",
	poster: {
		webp: {
			src: "/mock/pediatric-orthodontics/hero-desktop.webp",
		},
	},
	button: {
		title: "Записать ребёнка на приём",
		href: APPOINTMENT_ID.id,
	},
};

export const CHILD_WHAT_INCLUDES_SERVICES: ChildWhatIncludesServicesProps = {
	sectionHeader: {
		title: "С&nbsp;какими проблемами помогает детский ортодонт",
		description:
			"Большинство нарушений проще исправить, пока челюсти ребёнка растут&nbsp;&mdash; ортодонт подбирает решение по&nbsp;возрасту.",
	},
	cards: [
		{
			title: "Скученность",
			description:
				"Зубам не&nbsp;хватает места&nbsp;&mdash; они стоят тесно и&nbsp;заходят друг за&nbsp;друга. Создаём место, пока челюсть растёт.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/first.webp",
				},
			},
		},
		{
			title: "Щели между зубами",
			description:
				"Находим причину промежутков и&nbsp;аккуратно сближаем зубы.",
			cardType: "vertical-alexik",
			poster: {
				original: {
					src: "/mock/pediatric-surgery/what-includes-services/happy-alexik.png",
				},
			},
		},
		{
			title: "Неправильный прикус",
			description:
				"Челюсти смыкаются неверно, из-за этого страдают жевание, дыхание и&nbsp;речь. Направляем рост челюстей и&nbsp;приводим прикус к&nbsp;правильному смыканию.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/third.webp",
				},
			},
		},
		{
			title: "Асимметрия",
			description:
				"Зубные ряды и&nbsp;черты лица развиваются неравномерно. Выравниваем нагрузку между сторонами, чтобы рост шёл симметрично.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/fourth.webp",
				},
			},
		},
		{
			title: "Задержка прорезывания",
			description:
				"Зуб не&nbsp;выходит в&nbsp;срок или растёт не&nbsp;на&nbsp;своём месте. По&nbsp;снимку определяем причину и&nbsp;помогаем зубу занять правильное положение.",
			cardType: "horizontal-alexik",
			poster: {
				original: {
					src: "/mock/pediatric-surgery/what-includes-services/alexik-with-heart.png",
				},
			},
		},
	],
};

export const HEALTH_FOR_FAMILY_MOCK: HealthForFamilyProps = {
	tabsBlock: {
		title: "Выберите подходящее решение для выравнивания зубов",
		description:
			"В&nbsp;нашей клинике доступны современные ортодонтические системы, которые помогут вам достичь идеальной улыбки с&nbsp;комфортом и&nbsp;эффективностью",
		tabs: [
			{
				title: "Брекеты Damon&nbsp;Q",
				slug: "braces-damon-q",
			},
			{
				title: "Элайнеры EUROKAPPA",
				slug: "eurokappa-eliners",
			},
			{
				title: "Элайнеры Spark",
				slug: "spark-eliners",
			},
		],
	},
	tabsContent: {
		"braces-damon-q": {
			type: "sliderAdvantages",
			slider: {
				textBlock: {
					title: "Брекеты Damon&nbsp;Q",
					description:
						"Современная самолигирующая система от&nbsp;американской компании Ormco, предназначенная для эффективной и&nbsp;комфортной коррекции прикуса у&nbsp;пациентов всех возрастов.​",
				},
				posters: [
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/1-1-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/1-2-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/1-3-slider.webp",
						},
					},
				],
			},
			advantagesSection: {
				title: "Преимущества",
				cards: [
					"Сокращение времени лечения на&nbsp;20&ndash;30% по&nbsp;сравнению с&nbsp;традиционными системами.",
					"Самолигирующий механизм SpinTek для свободного скольжения дуги и&nbsp;равномерного распределения нагрузки.",
					"Быстрая замена дуг и&nbsp;позиционирования брекетов.​",
					"Упрощённая гигиена полости рта благодаря отсутствию лигатур.",
					"Минимальный дискомфорт и&nbsp;быстрое привыкание.​",
					"Компактный размер и&nbsp;эстетичный внешний вид.",
				],
			},
			priceCards: {
				cards: [
					{
						title: "Керамические брекеты Damon&nbsp;Q",
						content:
							"<ul><li>Надежное и&nbsp;эффективное решение для коррекции прикуса.​</li><li>Прочные и&nbsp;долговечные, подходят для различных клинических случаев.​</li></ul><p><b>Цена</b>: от&nbsp;150&nbsp;000 ₽</p>",
						button: { title: "Консультация", isOpenConsultationModal: true },
					},
					{
						title: "Металлические брекеты Damon&nbsp;Q",
						content:
							"<ul><li>Обеспечивают комфорт и&nbsp;незаметность при ношении.​​​</li><li>Эстетичный вариант с&nbsp;прозрачными или зубовидными брекетами.​​</li></ul><p><b>Цена</b>: от&nbsp;180&nbsp;000 ₽</p>",
						button: { title: "Консультация", isOpenConsultationModal: true },
					},
				],
			},
			stepper: {
				title: "Пройдите 7&nbsp;шагов к&nbsp;идеальной улыбке",
				steps: [
					"Консультация ортодонта",
					"Диагностика",
					"Обсуждение плана лечения",
					"Чистка и&nbsp;лечение зубов (при необходимости)",
					"Повторное сканирование или снятие слепков",
					"Обсуждение 3D&nbsp;плана при лечении на&nbsp;элайнерах",
					"Фиксация элайнеров/брекет-системы и&nbsp;начало лечения",
				],
			},
		},
		"eurokappa-eliners": {
			type: "sliderAdvantages",
			slider: {
				textBlock: {
					title: "Элайнеры EUROKAPPA",
					description:
						"Прозрачные съёмные ортодонтические каппы, разработанные с&nbsp;использованием 3D-моделирования для точного и&nbsp;предсказуемого выравнивания зубов.​",
				},
				textBlockPosition: "right",
				posters: [
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/2-1-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/2-2-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/2-3-slider.webp",
						},
					},
				],
			},
			advantagesSection: {
				title: "Преимущества",
				cards: [
					"Предварительное 3D-планирование позволяет увидеть результат до&nbsp;начала лечения.",
					"Съёмные конструкции позволяют сохранять привычный образ жизни.​",
					"Гипоаллергенный материал безопасен для здоровья.​​",
					"Подходят для большинства случаев коррекции прикуса.​",
					"Незаметны при ношении, быстрое привыкание.​",
					"Быстрое изготовление и&nbsp;доставка.",
				],
			},
			stepper: {
				title: "Пройдите 7&nbsp;шагов к&nbsp;идеальной улыбке",
				steps: [
					"Консультация ортодонта",
					"Диагностика",
					"Обсуждение плана лечения",
					"Чистка и&nbsp;лечение зубов (при необходимости)",
					"Повторное сканирование или снятие слепков",
					"Обсуждение 3D&nbsp;плана при лечении на&nbsp;элайнерах",
					"Фиксация элайнеров/брекет-системы и&nbsp;начало лечения",
				],
				priceCards: [
					{
						title: "Элайнеры EUROKAPPA",
						content:
							"<ul><li>Индивидуально изготовленные каппы для комфортного и&nbsp;эффективного выравнивания зубов.​</li><li>Подходят для взрослых и&nbsp;подростков.​</li></ul><p><b>Цена:</b>от&nbsp;170&nbsp;000 ₽</p>",
						button: { title: "Консультация", isOpenConsultationModal: true },
					},
				],
			},
		},
		"spark-eliners": {
			type: "sliderAdvantages",
			slider: {
				textBlock: {
					title: "Элайнеры Spark",
					description:
						"Прозрачные съёмные ортодонтические каппы, изготовленные из&nbsp;инновационного материала TruGEN&trade;. Почти невидимые элайнеры более прозрачны, комфортны и&nbsp;меньше окрашиваются, обеспечивают максимально эффективное и&nbsp;точное перемещения зубов.",
				},
				posters: [
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/3-1-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/3-2-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/3-3-slider.webp",
						},
					},
				],
			},
			advantagesSection: {
				title: "Преимущества",
				cards: [
					"Предварительное 3D-планирование позволяет увидеть результат до&nbsp;начала лечения.",
					"Съёмные конструкции позволяют сохранять привычный образ жизни.​",
					"Гипоаллергенный материал безопасен для здоровья.​​",
					"Подходят для большинства случаев коррекции прикуса.​",
					"Незаметны при ношении, быстрое привыкание.​",
					"Быстрое изготовление и&nbsp;доставка.",
				],
			},
			stepper: {
				title: "Пройдите 7&nbsp;шагов к&nbsp;идеальной улыбке",
				steps: [
					"Консультация ортодонта",
					"Диагностика",
					"Обсуждение плана лечения",
					"Чистка и&nbsp;лечение зубов (при необходимости)",
					"Повторное сканирование или снятие слепков",
					"Обсуждение 3D&nbsp;плана при лечении на&nbsp;элайнерах",
					"Фиксация элайнеров/брекет-системы и&nbsp;начало лечения",
				],
				priceCards: [
					{
						title: "Элайнеры Spark",
						content:
							"<ul><li>Индивидуально изготовленные каппы для комфортного и&nbsp;эффективного выравнивания зубов.​​</li><li>Подходят для взрослых и&nbsp;подростков.​</li></ul><p><b>Цена:</b>от&nbsp;175&nbsp;000 ₽</p>",
						button: { title: "Консультация", isOpenConsultationModal: true },
					},
				],
			},
		},
	},
};

export const PAGE_FILTERS_DICT = {
	brackets: {
		title: "Брекеты",
		slug: "brackets",
	},
	eliners: {
		title: "Элайнеры",
		slug: "eliners",
	},
};

export const PAGE_FILTERS: Array<PageContentCategoryType> = [
	...Object.values(PAGE_FILTERS_DICT),
];

export const FORM_DATA: AppointmentSchedulingProps = {
	title: "Запись на&nbsp;приём",
	description:
		"Оставьте свои контактные данные и&nbsp;мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время",
	poster: {
		webp: {
			src: "/system/form.webp",
		},
	},
};

const ORTHO_COMMON_SERVICES: Array<CostOfServicesCardProps> = [
	{
		title: "Приём (осмотр, консультация) врача-ортодонта",
		description:
			"<p>Осмотр ребёнка, оценка прикуса и&nbsp;этапа смены зубов, ответы на&nbsp;вопросы родителей и&nbsp;подбор подходящего метода лечения.</p>",
		button: COSTS_OF_SERVICES_BUTTON,
		price: 1_500,
	},
	{
		title:
			"Диагностика и&nbsp;составление плана лечения (антропометрические исследования)",
		description:
			"<p>Оттиски или цифровое сканирование, диагностические модели и&nbsp;медицинское фотографирование&nbsp;&mdash; на&nbsp;их&nbsp;основе ортодонт составляет план лечения с&nbsp;точной стоимостью.</p>",
		button: COSTS_OF_SERVICES_BUTTON,
		price: 6_850,
	},
];

const ORTHO_COMMON_APPOINTMENTS: Array<CostOfServicesCardProps> = [
	{
		title: "Повторный приём врача-ортодонта",
		description:
			"<p>Контрольный осмотр в&nbsp;процессе наблюдения: оцениваем динамику роста челюстей, положение зубов и&nbsp;необходимость начинать лечение.</p>",
		button: COSTS_OF_SERVICES_BUTTON,
		price: 1_500,
	},
	{
		title:
			"Первичный приём ребёнка, находящегося на&nbsp;ортодонтическом лечении в&nbsp;другой клинике",
		description:
			"<p>Разбираем текущий план лечения и&nbsp;состояние аппаратуры, говорим о&nbsp;возможности продолжить лечение у&nbsp;нас.</p>",
		button: COSTS_OF_SERVICES_BUTTON,
		price: 2_500,
	},
];

const ORTHO_COMMON_RETENTION: Array<CostOfServicesCardProps> = [
	{
		title: "Установка несъёмного ретейнера (1&nbsp;зубной ряд)",
		description:
			"<p>Тонкая проволочная дуга с&nbsp;внутренней стороны зубов&nbsp;&mdash; удерживает результат лечения и&nbsp;незаметна для окружающих.</p>",
		button: COSTS_OF_SERVICES_BUTTON,
		price: 6_300,
	},
	{
		title: "Изготовление и&nbsp;установка съёмной ретенционной каппы",
		description:
			"<p>Прозрачная каппа для ношения после лечения: закрепляет новое положение зубов и&nbsp;не&nbsp;даёт им&nbsp;вернуться назад.</p>",
		button: COSTS_OF_SERVICES_BUTTON,
		price: 7_500,
	},
	{
		title:
			"Снятие ортодонтического аппарата&nbsp;&mdash; брекет-системы или элайнеров (1&nbsp;зубной ряд)",
		description:
			"<p>Аккуратное снятие конструкции и&nbsp;очищение эмали от&nbsp;остатков фиксирующего материала после завершения лечения.</p>",
		button: COSTS_OF_SERVICES_BUTTON,
		price: 6_300,
	},
];

export const COST_OF_SERVICES_BRACKETS: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		...ORTHO_COMMON_SERVICES,
		{
			title:
				"Самолигирующая металлическая брекет-система, 1&nbsp;зубной ряд&nbsp;&mdash; лабораторный этап",
			description:
				"<p>Подготовка системы к&nbsp;установке: расчёт положения замков по&nbsp;моделям и&nbsp;изготовление индивидуального шаблона фиксации.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 31_500,
		},
		{
			title:
				"Самолигирующая металлическая брекет-система, 1&nbsp;зубной ряд&nbsp;&mdash; клинический этап",
			description:
				"<p>Фиксация брекетов на&nbsp;зубах и&nbsp;установка первой дуги, урок гигиены и&nbsp;рекомендации по&nbsp;питанию для ребёнка.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 31_500,
		},
		{
			title:
				"Самолигирующая эстетическая брекет-система, 1&nbsp;зубной ряд&nbsp;&mdash; лабораторный этап",
			description:
				"<p>Та&nbsp;же подготовка для керамической системы: замки подбираются под цвет эмали и&nbsp;почти не&nbsp;видны на&nbsp;зубах.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 42_000,
		},
		{
			title:
				"Самолигирующая эстетическая брекет-система, 1&nbsp;зубной ряд&nbsp;&mdash; клинический этап",
			description:
				"<p>Фиксация керамических брекетов и&nbsp;дуги&nbsp;&mdash; вариант для подростков, которым важна незаметность лечения.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 42_000,
		},
		{
			title:
				"Брекет-система 2&times;4, 1&nbsp;зубной ряд&nbsp;&mdash; лабораторный этап",
			description:
				"<p>Детская частичная система на&nbsp;четыре передних зуба и&nbsp;два моляра: подготовка конструкции для раннего лечения в&nbsp;сменном прикусе.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 21_000,
		},
		{
			title:
				"Брекет-система 2&times;4, 1&nbsp;зубной ряд&nbsp;&mdash; клинический этап",
			description:
				"<p>Установка системы 2&times;4&nbsp;&mdash; помогает выровнять передние зубы и&nbsp;создать место для постоянных ещё до&nbsp;полной смены зубов.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 21_000,
		},
		{
			title:
				"Частичная самолигирующая брекет-система в&nbsp;пределах одного зубного ряда&nbsp;&mdash; лабораторный этап",
			description:
				"<p>Подготовка системы для локальной задачи: выровнять группу зубов или создать место перед основным этапом лечения.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 15_750,
		},
		{
			title:
				"Частичная самолигирующая брекет-система в&nbsp;пределах одного зубного ряда&nbsp;&mdash; клинический этап",
			description:
				"<p>Фиксация частичной системы: короче по&nbsp;срокам и&nbsp;доступнее по&nbsp;стоимости, чем лечение на&nbsp;полном зубном ряду.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 15_750,
		},
		{
			title: "Курс лечения самолигирующей брекет-системой, 1&nbsp;зубной ряд",
			description:
				"<p>Полный курс ведения лечения на&nbsp;брекетах: плановые визиты, смена дуг и&nbsp;активации до&nbsp;достижения результата.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 73_500,
			priceType: "from",
		},
		{
			title:
				"Курс лечения частичной самолигирующей брекет-системой в&nbsp;пределах одного зубного ряда",
			description:
				"<p>Ведение лечения на&nbsp;частичной системе или системе 2&times;4&nbsp;&mdash; для ограниченной ортодонтической задачи.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 52_500,
			priceType: "from",
		},
		{
			title: "Активация брекет-системы, 1&nbsp;челюсть",
			description:
				"<p>Плановый визит раз в&nbsp;4&ndash;8 недель: врач меняет или подтягивает дугу, чтобы зубы продолжали двигаться.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 3_700,
		},
		{
			title: "Активация брекет-системы, 2&nbsp;челюсти",
			description:
				"<p>Тот&nbsp;же плановый визит при лечении на&nbsp;обеих челюстях&nbsp;&mdash; выгоднее, чем две активации по&nbsp;отдельности.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 6_800,
		},
		{
			title: "Активация брекет-системы 2&times;4",
			description:
				"<p>Контрольный визит для детской частичной системы: оцениваем движение зубов и&nbsp;активируем конструкцию.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_700,
		},
		{
			title: "Внеплановое посещение в&nbsp;процессе лечения",
			description:
				"<p>Приём вне графика&nbsp;&mdash; если отклеился брекет, беспокоит дуга или ребёнок испытывает дискомфорт.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 2_600,
		},
		{
			title: "Замена вестибулярного металлического брекета (1&nbsp;шт.)",
			description:
				"<p>Повторная фиксация замка при поломке или потере&nbsp;&mdash; лечение продолжается без потери времени.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 2_100,
		},
		{
			title: "Дуга для брекет-системы (1&nbsp;шт.)",
			description:
				"<p>Ортодонтическая дуга&nbsp;&mdash; основной рабочий элемент системы, который и&nbsp;перемещает зубы.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_600,
		},
		...ORTHO_COMMON_RETENTION,
		...ORTHO_COMMON_APPOINTMENTS,
	],
};

export const COST_OF_SERVICES_ELINERS: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		...ORTHO_COMMON_SERVICES,
		{
			title: "3D-моделирование ортодонтического лечения на&nbsp;элайнерах",
			description:
				"<p>Цифровой план лечения: показываем, как будут двигаться зубы и&nbsp;каким станет результат, ещё до&nbsp;изготовления кап.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 21_000,
		},
		{
			title: "Элайнеры EUROKAPPA Junior First (12&nbsp;пар)",
			description:
				"<p>Стартовый детский курс отечественной системы: раннее выравнивание зубов и&nbsp;коррекция небольших нарушений в&nbsp;сменном прикусе.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 99_000,
		},
		{
			title: "Элайнеры EUROKAPPA Junior Next",
			description:
				"<p>Продолжение детского курса&nbsp;&mdash; больше пар кап для задач средней сложности и&nbsp;более длительного лечения.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 169_000,
		},
		{
			title: "Элайнеры EUROKAPPA Junior Full",
			description:
				"<p>Полный детский курс без ограничения по&nbsp;количеству кап&nbsp;&mdash; для комплексного лечения прикуса у&nbsp;ребёнка.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 259_000,
		},
		{
			title: "Элайнеры Angel Aligner KID&nbsp;I",
			description:
				"<p>Детская линейка Angel Aligner для раннего лечения: мягкое воздействие на&nbsp;растущие челюсти и&nbsp;коррекция вредных привычек.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 195_000,
		},
		{
			title: "Элайнеры Angel Aligner KID&nbsp;II",
			description:
				"<p>Расширенный детский курс Angel Aligner&nbsp;&mdash; для более выраженных нарушений прикуса в&nbsp;период смены зубов.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 215_000,
		},
		{
			title: "Элайнеры EUROKAPPA Light (12&nbsp;пар)",
			description:
				"<p>Подростковый и&nbsp;взрослый курс для лёгких случаев: скученность передних зубов и&nbsp;небольшие промежутки.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 194_000,
		},
		{
			title: "Элайнеры Angel Aligner Select&nbsp;10",
			description:
				"<p>Курс на&nbsp;10&nbsp;пар кап для подростков: прозрачный материал, точная посадка и&nbsp;визуализация результата до&nbsp;начала лечения.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 210_000,
		},
		{
			title:
				"Плановый визит в&nbsp;процессе лечения на&nbsp;элайнерах EUROKAPPA",
			description:
				"<p>Контроль лечения: проверяем посадку кап, прогресс по&nbsp;плану и&nbsp;выдаём следующие пары.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 21_000,
			priceType: "from",
		},
		{
			title:
				"Дополнительная ревизия EUROKAPPA JUNIOR (в&nbsp;течение 3&nbsp;мес.)",
			description:
				"<p>Доработка плана и&nbsp;изготовление дополнительных кап, если зубы сместились не&nbsp;так, как было запланировано.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 17_200,
		},
		{
			title:
				"Дополнительная ревизия EUROKAPPA JUNIOR (в&nbsp;течение 6&nbsp;мес.)",
			description:
				"<p>Расширенная ревизия для более длительного курса&nbsp;&mdash; включает повторное цифровое планирование.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 34_350,
		},
		{
			title: "Печать дополнительной каппы EUROKAPPA (1&nbsp;зубной ряд)",
			description:
				"<p>Изготовление замены, если каппа потерялась или сломалась&nbsp;&mdash; лечение продолжается без паузы.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 7_350,
		},
		{
			title: "Ретенционная каппа EUROKAPPA (1&nbsp;зубной ряд)",
			description:
				"<p>Каппа для удержания результата после курса элайнеров: изготавливается по&nbsp;финальному положению зубов.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 6_300,
		},
		...ORTHO_COMMON_RETENTION,
		...ORTHO_COMMON_APPOINTMENTS,
	],
};

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
	title: "Врачи, оказывающие услугу",
	button: {
		title: "Смотреть всех специалистов",
		href: SITE_NAVIGATION.vrachi,
	},
	employees: [GLOBAL_EMPLOYEES.kravchenko, GLOBAL_EMPLOYEES.tarasova],
};

export const BRACKETS_HOW_IT_WORKS: OrthoHowItWorksProps = {
	sectionTitle: "Брекет-системы",
	leftLabel: "Как это работает",
	rightLabel: "Что исправляют",
	description:
		"Брекет-система&nbsp;&mdash; несъёмная конструкция из&nbsp;замков (брекетов), которые фиксируются на&nbsp;зубах, и&nbsp;дуги, соединяющей&nbsp;их. Дуга постепенно перемещает зубы в&nbsp;правильное положение. Брекеты работают круглосуточно и&nbsp;не&nbsp;зависят от&nbsp;дисциплины пациента, поэтому хорошо подходят детям и&nbsp;подросткам.",
	chips: [
		"Скученность зубов",
		"Промежутки между зубами",
		"Глубокий и&nbsp;открытый прикус",
		"Перекрёстный прикус",
		"Дистальный и&nbsp;мезиальный прикус",
		"Смещение средней линии",
		"Сложные клинические случаи",
	],
};

export const ELINERS_HOW_IT_WORKS: OrthoHowItWorksProps = {
	sectionTitle: "Элайнеры",
	leftLabel: "Как это работает",
	rightLabel: "Что исправляют",
	description:
		"Элайнеры&nbsp;&mdash; прозрачные съёмные капы, изготовленные индивидуально по&nbsp;цифровому плану лечения. Каждая новая пара немного смещает зубы, шаг за&nbsp;шагом приближая к&nbsp;результату. Капы практически незаметны, их&nbsp;снимают во&nbsp;время еды и&nbsp;чистки зубов. Для успешного лечения их&nbsp;носят 20&ndash;22 часа в&nbsp;сутки.",
	chips: [
		"Скученность зубов",
		"Промежутки между зубами",
		"Нарушения прикуса лёгкой степени",
		"Нарушения прикуса средней степени",
		"Сложные случаи (Angel Aligner)",
	],
};

export const CTA_HELP_SECTION: CtaHelpSectionProps = {
	title: "Не&nbsp;знаете, что выбрать?",
	description:
		"Ортодонт проведёт осмотр и&nbsp;диагностику, расскажет о&nbsp;подходящих вариантах и&nbsp;составит план лечения с&nbsp;точной стоимостью.",
	button: {
		title: "Записать ребёнка на приём",
		isOpenConsultationModal: true,
	},
};

export const ORTHO_BRACKETS_CARDS: OrthoPriceCardsSectionProps = {
	cards: [
		{
			title: "Металлические брекеты",
			indications: [
				{
					label: "Возраст",
					description: "С&nbsp;11&ndash;12&nbsp;лет, подростки и&nbsp;взрослые",
				},
				{
					label: "Показания",
					description: "Нарушения любой степени сложности",
				},
				{
					label: "Стоимость",
					description:
						"За&nbsp;1&nbsp;зубной ряд&nbsp;&mdash; лабораторный и&nbsp;клинический этапы установки",
				},
			],
			price: 63_000,
			advantages: [
				"Высокая прочность и&nbsp;надёжность",
				"Эффективны в&nbsp;сложных случаях",
				"Небольшой размер замков",
				"Наиболее доступная стоимость",
				"Предсказуемый результат",
			],
			peculiarities: [
				"Заметны на&nbsp;зубах&nbsp;&mdash; можно выбрать цветные лигатуры, это нравится многим детям",
				"Требуют тщательной гигиены и&nbsp;соблюдения рекомендаций по&nbsp;питанию",
				"Контрольные визиты к&nbsp;ортодонту раз в&nbsp;4&ndash;8 недель",
			],
			button: {
				title: "Записаться на консультацию",
				isOpenConsultationModal: true,
			},
			poster: {
				webp: {
					src: "/mock/pediatric-orthodontics/metal-brackets.webp",
				},
			},
		},
		{
			title: "Керамические брекеты",
			indications: [
				{
					label: "Возраст",
					description: "Подростки и&nbsp;взрослые, для кого важна эстетика",
				},
				{
					label: "Показания",
					description: "Лёгкая, средняя и&nbsp;высокая сложность",
				},
				{
					label: "Стоимость",
					description:
						"За&nbsp;1&nbsp;зубной ряд&nbsp;&mdash; лабораторный и&nbsp;клинический этапы установки",
				},
			],
			price: 84_000,
			advantages: [
				"Малозаметны&nbsp;&mdash; подбираются под цвет эмали",
				"Не&nbsp;окрашиваются при правильном уходе",
				"Гипоаллергенный материал",
				"Наиболее доступная стоимость",
				"Эффективность как у&nbsp;металлических систем",
			],
			peculiarities: [
				"Стоимость выше, чем у&nbsp;металлических систем",
				"Требуют аккуратного обращения и&nbsp;отказа от&nbsp;твёрдой пищи",
				"Важно соблюдать гигиену и&nbsp;ограничивать красящие продукты",
			],
			button: {
				title: "Записаться на консультацию",
				isOpenConsultationModal: true,
			},
			poster: {
				webp: { src: "/mock/pediatric-orthodontics/keramik-brackets-new.webp" },
			},
		},
	],
};

export const ORTHO_ELINERS_CARDS: OrthoPriceCardsSectionProps = {
	cards: [
		{
			title: "EUROKAPPA",
			poster: {
				webp: {
					src: "/mock/pediatric-orthodontics/eliners.webp",
				},
			},
			indications: [
				{
					label: "Показания",
					description:
						"Скученность зубов, промежутки между зубами, нарушения прикуса лёгкой и&nbsp;средней степени",
				},
				{
					label: "Стоимость",
					description:
						"За&nbsp;курс кап: Junior First&nbsp;&mdash; от&nbsp;99&nbsp;000&nbsp;₽, Junior Full&nbsp;&mdash; 259&nbsp;000&nbsp;₽",
				},
			],
			chips: ["Россия", "Дети · подростки · взрослые"],
			price: 99_000,
			advantages: [
				"Доступная стоимость при высоком качестве",
				"Незаметны на&nbsp;зубах",
				"Не&nbsp;мешают учёбе, спорту и&nbsp;общению",
			],
			peculiarities: [
				"Отечественная система элайнеров",
				"Быстрое изготовление&nbsp;&mdash; обычно 7&ndash;14 дней",
				"Цифровое планирование лечения",
				"Оптимальное сочетание цены и&nbsp;качества",
			],
			button: {
				title: "Записаться на консультацию",
				isOpenConsultationModal: true,
			},
		},
		{
			title: "Angel Aligner",
			poster: {
				webp: {
					src: "/mock/pediatric-orthodontics/eliners.webp",
				},
			},
			indications: [
				{
					label: "Показания",
					description:
						"Скученность зубов, промежутки между зубами, нарушения прикуса лёгкой, средней и&nbsp;высокой сложности",
				},
				{
					label: "Стоимость",
					description:
						"За&nbsp;курс кап: KID&nbsp;I&nbsp;&mdash; от&nbsp;195&nbsp;000&nbsp;₽, Select&nbsp;10&nbsp;&mdash; 210&nbsp;000&nbsp;₽",
				},
			],
			chips: ["Китай", "Дети · подростки · взрослые"],
			price: 195_000,
			advantages: [
				"Подходит для широкого спектра клинических случаев",
				"Высокая прозрачность и&nbsp;эстетика",
				"Комфорт при ношении",
				"Можно заранее увидеть результат лечения",
			],
			peculiarities: [
				"Одна из&nbsp;крупнейших систем элайнеров в&nbsp;мире",
				"Современный многослойный материал с&nbsp;высокой прозрачностью",
				"Гладкая поверхность и&nbsp;точная посадка",
				"Быстрое изготовление&nbsp;&mdash; обычно 7&ndash;14 дней",
				"Для простых и&nbsp;сложных клинических случаев",
				"Цифровой план лечения с&nbsp;визуализацией результата до&nbsp;начала терапии",
			],
			button: {
				title: "Записаться на консультацию",
				isOpenConsultationModal: true,
			},
		},
	],
};
