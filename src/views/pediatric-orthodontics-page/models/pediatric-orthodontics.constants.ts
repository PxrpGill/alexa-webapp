import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import type { PageContentCategoryType } from "@/features/page-content-filter/types/page-content-filter.types";
import {
	APPOINTMENT_ID,
	COSTS_OF_SERVICES_BUTTON,
	GLOBAL_EMPLOYEES,
} from "@/shared/config/global-constants.constants";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { ChildWhatIncludesServicesProps } from "@/widgets/child-what-includes-services/types/child-what-includes-services.types";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
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

export const COST_OF_SERVICES: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		{
			title: "Консультация стоматолога-гигиениста",
			description:
				"<p>Осмотр полости рта, оценка качества домашнего ухода и&nbsp;подбор индивидуальных средств гигиены для ребёнка&nbsp;&mdash; без оплаты.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 0,
		},
		{
			title: "Первичный приём педиатра с&nbsp;адаптационным визитом",
			description:
				"<p>Знакомство с&nbsp;клиникой и&nbsp;врачом в&nbsp;спокойном темпе, осмотр полости рта и&nbsp;составление плана профилактики.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_500,
		},
		{
			title: "Повторный приём педиатра",
			description:
				"<p>Контрольный осмотр: оцениваем состояние зубов и&nbsp;дёсен, качество домашней гигиены и&nbsp;результат профилактики.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_500,
		},
		{
			title: "Профессиональная гигиена, 1&nbsp;уровень сложности",
			description:
				"<p>Медобработка, очищение зубов пастой, ультразвук, Airflow, финишная полировка, реминерализующая терапия, стерильный пакет и&nbsp;урок гигиены.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_900,
		},
		{
			title: "Профессиональная гигиена, 2&nbsp;уровень сложности",
			description:
				"<p>Тот&nbsp;же объём процедуры при меньшем количестве налёта и&nbsp;зубных отложений&nbsp;&mdash; для детей с&nbsp;регулярным домашним уходом.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_100,
		},
		{
			title: "Профессиональная гигиена ORTHO",
			description:
				"<p>Чистка для детей с&nbsp;брекетами и&nbsp;другими ортодонтическими конструкциями: аккуратное очищение вокруг элементов системы и&nbsp;укрепление эмали.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_300,
		},
		{
			title: "Герметизация фиссур",
			description:
				"<p>Закрытие природных углублений на&nbsp;жевательных зубах защитным материалом&nbsp;&mdash; там, где кариес появляется чаще всего.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_600,
		},
		{
			title: "Реминерализирующая терапия",
			description:
				"<p>Насыщение эмали кальцием и&nbsp;фтором после профессиональной чистки: снижает чувствительность зубов и&nbsp;укрепляет защиту от&nbsp;кариеса.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 3_000,
		},
		{
			title: "Глубокое фторирование эмали (1&nbsp;челюсть)",
			description:
				"<p>Дополнительная обработка эмали фторсодержащим составом для профилактики кариеса&nbsp;&mdash; по&nbsp;показаниям врача.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_300,
		},
	],
};

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
	title: "Врачи, оказывающие услугу",
	button: {
		title: "Смотреть всех специалистов",
		href: SITE_NAVIGATION.vrachi,
	},
	employees: [GLOBAL_EMPLOYEES.nikitin, GLOBAL_EMPLOYEES.tarasova],
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
			],
			price: 120_000,
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
			],
			price: 140_000,
			advantages: [
				"Малозаметны&nbsp;&mdash; подбираются под цвет эмал",
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
				webp: { src: "/mock/pediatric-orthodontics/keramik-brackets.webp" },
			},
		},
	],
};

export const ORTHO_ELINERS_CARDS: OrthoPriceCardsSectionProps = {
	cards: [
		{
			title: "EUROKAPPA",
			indications: [
				{
					label: "Показания",
					description:
						"Скученность зубов, промежутки между зубами, нарушения прикуса лёгкой и&nbsp;средней степени",
				},
			],
			chips: ["Россия", "Дети · подростки · взрослые"],
			price: 120_000,
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
			indications: [
				{
					label: "Показания",
					description:
						"Скученность зубов, промежутки между зубами, нарушения прикуса лёгкой, средней и&nbsp;высокой сложности",
				},
			],
			chips: ["Китай", "Дети · подростки · взрослые"],
			price: 120_000,
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
