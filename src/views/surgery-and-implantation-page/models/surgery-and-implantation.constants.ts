import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { DiagnosticProcessSectionProps } from "@/widgets/diagnostic-process-section/types/diagnostic-process-section.types";
import type { ImplantTableProps } from "@/widgets/implant-table/types/implant-table.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { StillQuestionProps } from "@/widgets/still-questions/types/still-questions.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";
import type { WhatServiceIncludesProps } from "@/widgets/what-service-includes/types/what-service-includes.types";
import type { WhyChooseUsProps } from "@/widgets/why-choose-us/types/why-choose-us.types";

export const HERO_MOCK: QuadroSectionProps = {
	sectionHeader: {
		title: "Имплантация зубов спокойно, точно, без боли",
		underDescription:
			"Удаление, восстановление и&nbsp;установка имплантов&nbsp;&mdash; всё в&nbsp;одной клинике, под контролем опытных хирургов с&nbsp;пожизненной гарантией на&nbsp;импланты!<br /> Работаем только с&nbsp;проверенными системами и&nbsp;остаёмся на&nbsp;связи&nbsp;&mdash; до&nbsp;и&nbsp;после лечения.",
		poster: {
			webp: {
				src: "/mock/surgery-and-implantation/surgery-and-implantation-hero.webp",
			},
		},
		card: {
			title: "Позаботимся о&nbsp;вашей улыбке!",
			description:
				"Имплантация Straumann Group MEDENTIKA у&nbsp;хирурга Шахназаряна Э.&nbsp;К. &mdash;&nbsp;34&nbsp;000&nbsp;₽",
			buttonText: "Записаться на прием",
		},
	},
};

export const TITLE_STICKY_SECTION_MOCK: TitleStickySectionProps = {
	title: "Как проходит имплантация: поэтапно и&nbsp;с&nbsp;заботой",
	lastCard: {
		poster: {
			webp: {
				src: "/mock/surgery-and-implantation/what-includes.webp",
			},
		},
	},
	cards: [
		{
			title: "Шаг 1&nbsp;&mdash; Подготовка и&nbsp;диагностика",
			description:
				"Первичный приём, панорамный снимок, КТ. Мы&nbsp;оцениваем общее состояние полости рта и&nbsp;планируем лечение&nbsp;&mdash; важно убедиться, что нет воспалений и&nbsp;противопоказаний.",
		},
		{
			title: "Шаг 2&nbsp;&mdash; Костная пластика (если нужно)",
			description:
				"Если объем костной ткани недостаточный, проводится наращивание (остеопластика). Это необходимо для надёжной фиксации импланта и&nbsp;долгого срока службы.",
		},
		{
			title: "Шаг 3&nbsp;&mdash; Установка импланта",
			description:
				"Сам этап вживления&nbsp;&mdash; хирург устанавливает имплант в&nbsp;кость. После этого начинается процесс приживления&nbsp;&mdash; он&nbsp;длится от&nbsp;2&nbsp;до&nbsp;6&nbsp;месяцев в&nbsp;зависимости от&nbsp;особенностей организма.",
		},
		{
			title: "Шаг 4&nbsp;&mdash; Установка формирователя десны",
			description:
				"Когда имплант прижился, устанавливается формирователь десны&nbsp;&mdash; он&nbsp;помогает создать естественный контур для будущей коронки. Иногда также проводится пластика мягких тканей.",
		},
		{
			title: "Шаг 5&nbsp;&mdash; Протезирование",
			description:
				"Финальный этап&nbsp;&mdash; установка коронки. Сначала&nbsp;&mdash; временная, затем постоянная. Результат&nbsp;&mdash; полностью восстановленный, эстетичный и&nbsp;функциональный зуб.",
		},
	],
};

export const BRICKWORK_SECTION_MOCK: BrickworkSectionProps = {
	sectionHeader: {
		title: "Ваша улыбка в&nbsp;руках профессионалов!",
		description: "Мы предлагаем:",
	},
	cards: [
		{
			icon: "/mock/surgery-and-implantation/1-icon.svg",
			title: "Хирургические операции по&nbsp;удалению зубов:",
			description:
				"Мы&nbsp;проводим удаление зубов мудрости, удаление зубов с&nbsp;помощью ультразвуковой хирургической системы NSK серии VarioSurg3.",
		},
		{
			icon: "/mock/surgery-and-implantation/2-icon.svg",
			title: "Имплантация зубов:",
			description:
				"Наши хирурги проводят имплантацию по&nbsp;протоколам all-on-4 и&nbsp;all-on-6, а&nbsp;также делают индивидуальные шаблоны для точной и&nbsp;правильной установки имплантов.",
		},
		{
			icon: "/mock/surgery-and-implantation/3-icon.svg",
			title: "Анестезия:",
			description:
				"Мы&nbsp;используем аппликационную и&nbsp;инфильтрационную анестезию, чтобы сделать процесс лечения полностью безболезненным. Для пациентов с&nbsp;низким болевым пороком, боязнью стоматологических манипуляций или аллергией на&nbsp;местные анестетики мы&nbsp;предлагаем лечение под общим наркозом или седацией.",
		},
		{
			icon: "/mock/surgery-and-implantation/4-icon.svg",
			title: "Сохранение зубов и&nbsp;оздоровление полости рта:",
			description:
				"Наши хирурги проводят операции по&nbsp;пластике уздечки и&nbsp;десны, микрохирургии, подсадке десны, закрытию рецессии десны.",
		},
	],
};

export const STILL_QUESTION_MOCK: StillQuestionProps = {
	title: "Запишитесь на&nbsp;консультацию и&nbsp;получите:",
	description:
		"<ul><li>Персональный план восстановления зубов</li><li>Подбор оптимальной системы имплантов под ваш случай и&nbsp;бюджет</li><li>Снимок (при необходимости) и&nbsp;осмотр специалиста</li><li>Ответы на&nbsp;все вопросы про этапы, сроки и&nbsp;стоимость лечения</li></ul>",
	buttonText: "Получить консультацию",
	poster: {
		webp: {
			src: "/mock/surgery-and-implantation/still-question-deskto.webp",
		},
	},
};

export const FIRST_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	title: "Наши преимущества",
	textBlock: {
		title: "Современное оборудование",
		description:
			"Компьютерная томограмма и&nbsp;рентген, терапия, лечение зубов с&nbsp;микроскопом, гигиена, удаление зубов, имплантация и&nbsp;протезирование, исправление прикуса с&nbsp;применением самого современного оборудования, инновационных материалов и&nbsp;самых передовых протоколов лечения&nbsp;&mdash; залог здоровья наших пациентов!",
	},
	posters: [
		{
			webp: {
				src: "/mock/home/first-slider/first-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/first-slider/second-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/first-slider/third-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/first-slider/fourth-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/first-slider/fifth-desktop.webp",
			},
		},
	],
};

export const SECOND_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Комфортная атмосфера:",
		description:
			"Мы&nbsp;делаем все возможное, чтобы ваше посещение было приятным и&nbsp;безопасным.",
	},
	posters: [
		{
			webp: {
				src: "/mock/adult-orthopedics/second-slider/1-slide.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-4.webp",
			},
		},
		{
			webp: {
				src: "/mock/adult-orthopedics/second-slider/3-slide.webp",
			},
		},
	],
};

export const THIRD_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Профессионализм:",
		description:
			"Наши врачи обладают опытом и&nbsp;знаниями в&nbsp;области детской стоматологии.",
	},
	posters: [
		{
			webp: {
				src: "/mock/home/third-slider/3-1.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/third-slider/3-2.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/third-slider/3-3.webp",
			},
		},
	],
};

export const FOURTH_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Индивидуальный подход к&nbsp;каждому пациенту:",
		description: "Мы&nbsp;учитываем все ваши потребности и&nbsp;особенности.",
	},
	posters: [
		{
			webp: {
				src: "/mock/adult-orthopedics/fourth-slider/1-slide.webp",
			},
		},
		{
			webp: {
				src: "/mock/adult-orthopedics/fourth-slider/2-slide.webp",
			},
		},
		{
			webp: {
				src: "/mock/adult-orthopedics/fourth-slider/3-slide.webp",
			},
		},
	],
};

export const IMPLANT_FIRST_SLIDER: TitleDescriptionSliderProps = {
	title: "С&nbsp;какими имплантами мы&nbsp;работаем",
	description:
		"Выбираем систему под вашу задачу и&nbsp;бюджет.<br /> Установим имплант, который приживется и&nbsp;прослужит вам всю жизнь.",
	textBlock: {
		title: "AnyOne (Dentium)",
		description:
			"<p>Надежный бюджетный выбор</p><br /><ul><li>Южная Корея</li><li>Подходит для стандартных клинических случаев</li><li>Отличная приживаемость</li></ul>",
		withButton: true,
	},
	posters: [
		{
			webp: {
				src: "/mock/surgery-and-implantation/1-implant.webp",
			},
		},
	],
};

export const IMPLANT_SECOND_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Straumann Group Medentika",
		description:
			"<p>Оптимальный баланс цены и&nbsp;качества</p><br /><ul><li>Германия</li><li>Универсальное решение для большинства пациентов</li><li>Высокая точность и&nbsp;долговечность</li></ul>",
		withButton: true,
	},
	posters: [
		{
			webp: {
				src: "/mock/surgery-and-implantation/2-implant.webp",
			},
		},
	],
};

export const IMPLANT_THIRD_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Straumann (SLActive)",
		description:
			"<p>Премиальный имплант&nbsp;&mdash; максимум комфорта и&nbsp;надёжности</p><br /><ul><li>Швейцария</li><li>Ультрабыстрая приживаемость даже при сложных условиях</li><li>Пожизненная гарантия на&nbsp;имплантат</li><li>Подходит для сложных случаев и&nbsp;повышенных эстетических требований</li></ul>",
		withButton: true,
	},
	posters: [
		{
			webp: {
				src: "/mock/surgery-and-implantation/3-implant.webp",
			},
		},
	],
};

export const WHAT_SERVICE_INCLUDES: WhatServiceIncludesProps = {
	title: "Что включает услуга",
	cards: [
		{
			title: "Диагностика и&nbsp;планирование",
		},
		{
			title: "Период приживления и&nbsp;наблюдение",
		},
		{
			title: "Установка импланта",
		},
		{
			title: "Установка постоянной коронки",
		},
	],
};

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
	title: "Врачи, оказывающие услугу",
	button: {
		title: "Смотреть всех специалистов",
		href: SITE_NAVIGATION.vrachi,
	},
	employees: [
		{
			poster: {
				webp: {
					src: "/mock/employees/employee-2.webp",
				},
			},
			fullname: "Каплин Ефим Валерьевич",
			position: "Врач-стоматолог-хирург, ортопед, имплантолог",
		},
		{
			poster: {
				webp: {
					src: "/mock/employees/employee-8.webp",
				},
			},
			fullname: "Шахназарян Эрик Каренович",
			position: "Врач-стоматолог-хирург",
		},
	],
};

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
			title: "AnyOne (Dentium)",
			description:
				"<ul><li>Надёжный бюджетный выбор</li><li>Южная Корея</li><li>Подходит для стандартных клинических случаев</li><li>Отличная приживаемость</li></ul>",
			button: {
				title: "Получить консультацию",
				href: "",
			},
			price: 1500,
		},
		{
			title: "Straumann Group Medentika",
			description:
				"<ul><li>Оптимальный баланс цены и&nbsp;качества</li><li>Германия</li><li>Универсальное решение для большинства пациентов</li><li>Высокая точность и&nbsp;долговечность</li></ul>",
			button: {
				title: "Получить консультацию",
				href: "",
			},
			price: 1500,
		},
		{
			title: "Straumann (SLActive)",
			description:
				"<ul><li>Премиальный имплант&nbsp;&mdash; максимум комфорта и&nbsp;надёжности</li><li>Швейцария</li><li>Ультрабыстрая приживаемость даже при сложных условиях</li><li>Пожизненная гарантия на&nbsp;имплантат</li><li>Подходит для сложных случаев и&nbsp;повышенных эстетических требований</li></ul>",
			button: {
				title: "Получить консультацию",
				href: "",
			},
			price: 1500,
		},
	],
};

export const DIAGNOSTICS_SECTION_MOCK: DiagnosticProcessSectionProps = {
	sectionHeader: {
		title: "Ваша улыбка в&nbsp;руках профессионалов!",
		description: "Мы&nbsp;предлагаем:",
	},
	cards: [
		{
			title: "Удаление зубов:",
			description:
				"Атравматичное удаление с&nbsp;помощью ультразвуковой хирургической системы NSK VarioSurg3.",
			poster: {
				webp: {
					src: "/mock/diagnostics/1-desktop.webp",
				},
			},
		},
		{
			title: "Имплантация зубов:",
			description:
				"Работаем по&nbsp;протоколам all-on-4 и&nbsp;all-on-6, применяя индивидуальные шаблоны для точной установки имплантов.",
			poster: {
				webp: {
					src: "/mock/diagnostics/2-desktop.webp",
				},
			},
		},
		{
			title: "Анестезия:",
			description:
				"Абсолютно безболезненное лечение: местная анестезия, а&nbsp;при страхе или аллергии&nbsp;— безопасный наркоз и&nbsp;седация.",
			poster: {
				webp: {
					src: "/mock/diagnostics/3-desktop.webp",
				},
			},
		},
		{
			title: "Сохранение зубов и&nbsp;десен:",
			description:
				"Зубосохраняющие операции, микрохирургия, пластика уздечки, подсадка десны и&nbsp;закрытие рецессий.",
			poster: {
				webp: {
					src: "/mock/diagnostics/4-desktop.webp",
				},
			},
		},
	],
};

export const WHY_CHOOSE_US: WhyChooseUsProps = {
	sectionHeader: {
		title: "Почему выбирают имплантацию именно в&nbsp;нашей клинике",
		description:
			"Восстанавливаем утраченные зубы с&nbsp;помощью современных имплантационных систем и&nbsp;цифрового планирования. Наша цель&nbsp;&mdash; вернуть не&nbsp;только красивую улыбку, но&nbsp;и&nbsp;полноценную функцию жевания.",
	},
	cards: [
		{
			icon: "/mock/why-choose-us/1-icon.svg",
			title: "Цифровое планирование",
			description:
				"Перед лечением тщательно рассчитываем положение будущего имплантата для максимальной точности.",
		},
		{
			icon: "/mock/why-choose-us/2-icon.svg",
			title: "Современные имплантационные системы",
			description:
				"Используем проверенные решения с&nbsp;высокой прогнозируемостью приживления.",
		},
		{
			icon: "/mock/why-choose-us/3-icon.svg",
			title: "Комплексное лечение",
			description:
				"От&nbsp;диагностики и&nbsp;установки импланта до&nbsp;постоянной коронки&nbsp;&mdash; все этапы проходят в&nbsp;одной клинике.",
		},
	],
	mainSection: {
		title: "Причины выбрать именно нас",
		list: [
			"Имплантологи с&nbsp;большим практическим опытом",
			"Компьютерная диагностика перед лечением",
			"Современные протоколы имплантации",
			"Полное сопровождение до&nbsp;окончательного результата",
		],
		poster: {
			webp: {
				src: "/mock/why-choose-us/main.webp",
			},
		},
		button: {
			title: "Записаться на приём",
			href: "",
		},
	},
};

export const IMPLANT_TABLE: ImplantTableProps = {
	sectionHeader: {
		title: "Какой имплант выбрать? Сравниваем для вас",
		description:
			"Все системы&nbsp;&mdash; надёжные. Но&nbsp;каждая подходит под разные задачи. Показали ключевые отличия, чтобы вам было проще принять решение вместе с&nbsp;врачом",
	},
	implants: [
		{
			name: "Straumann Group Medentika",
			manufacturer: "Германия",
			guarantee: "Бессрочная гарантия клиники",
			rateOfEngraftment: "6-8 недель",
			immediateImplantation:
				"Если причинный зуб без признаков воспаления в&nbsp;костной ткани",
			boneGrafting: "В&nbsp;большинстве случаев",
			aesthetics: "Расширенные ортопедические конструкции",
			optionFullProstheticRestoration:
				"Подходит и&nbsp;для частичной, и&nbsp;для полной реабилитации",
			uniqueFeatures:
				"<ul><li>Это как &laquo;Золотая середина&raquo; в&nbsp;мире имплантов.</li><li>Хорошо приживаются.</li><li>Подходят почти всем.</li><li>Устанавливаются быстро и&nbsp;удобно</li></ul>",
		},
		{
			name: "Straumann (SLActive)",
			manufacturer: "Швейцария",
			guarantee: "Пожизненная гарантия от&nbsp;производителя Straumann",
			rateOfEngraftment:
				"3&ndash;4&nbsp;недели. Самый быстрый процесс интеграции (когда имплант прирастает)",
			immediateImplantation:
				"Даже в&nbsp;сложных клинических случаях по&nbsp;показаниям есть возможность одномоментной имплантации",
			boneGrafting:
				"Дизайн и&nbsp;размерный ряд способствует установить имплант без подсадки кости даже в&nbsp;сложных клинических случаях",
			aesthetics: "Индивидуальные абатменты и&nbsp;высшая эстетика",
			optionFullProstheticRestoration:
				"Эта система &#8470;&nbsp;1&nbsp;в мире для полной реабилитации даже в&nbsp;сложных случаях",
			uniqueFeatures:
				"<ul><li>Приживаются в&nbsp;2&ndash;3 раза быстрее</li><li>Очень прочные&nbsp;&mdash; подходят даже при узкой челюсти</li><li>Особая поверхность помогает импланту &laquo;врастать&raquo; в&nbsp;кость даже у&nbsp;курильщиков, диабетиков и&nbsp;пожилых людей</li><li>Подходят для немедленной нагрузки&nbsp;&mdash; можно вставить имплант и&nbsp;коронку почти сразу</li></ul>",
		},
	],
};
