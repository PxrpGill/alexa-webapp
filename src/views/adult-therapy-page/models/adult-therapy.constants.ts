import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import {
	APPOINTMENT_ID,
	COSTS_OF_SERVICES_BUTTON,
	GLOBAL_EMPLOYEES,
} from "@/shared/config/global-constants.constants";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { DiagnosticProcessSectionProps } from "@/widgets/diagnostic-process-section/types/diagnostic-process-section.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";
import type { WhatServiceIncludesProps } from "@/widgets/what-service-includes/types/what-service-includes.types";
import type { WhyChooseUsProps } from "@/widgets/why-choose-us/types/why-choose-us.types";

export const MOCK_QUADRO_SECTION: QuadroSectionProps = {
	sectionHeader: {
		title: "Передовые решения в&nbsp;стоматологии",
		description: "Здоровье ваших зубов&nbsp;&mdash; наша миссия",
		card: {
			title: "Ваша здоровая улыбка начинается здесь!",
			button: { title: "Записаться на прием", href: APPOINTMENT_ID.id },
		},
		poster: {
			original: {
				src: "/mock/adult-therapy/quadro.jpg",
			},
		},
	},
};

export const TITLE_STICKY_SECTION_MOCK: TitleStickySectionProps = {
	title: "Показания к&nbsp;терапии в&nbsp;клинике &laquo;Алекса&raquo;",
	cards: [
		{
			title:
				"Хотите восстановить форму и&nbsp;функцию поврежденных зубов с&nbsp;помощью пломбирования или реставрации.",
		},
		{
			title:
				"Боитесь стоматологических процедур и&nbsp;желаете провести лечение под общим наркозом или седацией.",
		},
		{
			title:
				"Заметили потемнение эмали, дырку в&nbsp;зубе или чувствительность к&nbsp;холодному/горячему.",
		},
		{ title: "Страдаете от&nbsp;боли в&nbsp;зубах, пульпит, периодонтит." },
	],
	lastCard: {
		poster: {
			original: {
				src: "/mock/sticky-title/title-sticky.jpg",
			},
		},
		button: { title: "Записаться на прием", href: APPOINTMENT_ID.id },
	},
};

export const BRICKWORK_SECTION_MOCK: BrickworkSectionProps = {
	sectionHeader: {
		title: "Ваша улыбка в&nbsp;руках профессионалов!",
		description: "Мы&nbsp;предлагаем:",
	},
	cards: [
		{
			icon: "/mock/adult-therapy/1-icon.svg",
			title: "Протезирование вкладками:",
			description:
				"Мы&nbsp;предлагаем различные варианты протезирования вкладками, чтобы восстановить форму и&nbsp;функцию ваших зубов.",
		},
		{
			icon: "/mock/adult-therapy/2-icon.svg",
			title: "Коффердам:",
			description:
				"Мы&nbsp;используем специальные латексные листы, которые предотвращают попадание слюны и&nbsp;других жидкостей в&nbsp;полость рта и&nbsp;обеспечивают высокое качество лечения.",
		},
		{
			icon: "/mock/adult-therapy/3-icon.svg",
			title: "Лечение кариеса, пульпита и&nbsp;периодонтита:",
			description:
				"Наши врачи проведут комплексное лечение с&nbsp;использованием современных материалов и&nbsp;технологий.",
		},
		{
			icon: "/mock/adult-therapy/4-icon.svg",
			title: "Лечение корневых каналов:",
			description:
				"Мы&nbsp;используем самые современные методы лечения корневых каналов, чтобы сохранить ваши зубы на&nbsp;долгие годы.",
		},
		{
			icon: "/mock/adult-therapy/5-icon.svg",
			title: "Пломбирование и&nbsp;реставрация:",
			description:
				"Мы&nbsp;используем высококачественные пломбировочные материалы, которые отличаются прочностью и&nbsp;эстетичностью",
		},
		{
			icon: "/mock/adult-therapy/6-icon.svg",
			title:
				'Специальные кресла KaVo ESTETICA<sup class="reg">&reg;</sup> E30&nbsp;S:',
			description:
				"Наши установки обеспечивают комфорт и&nbsp;точность в&nbsp;процессе лечения.",
		},
		{
			icon: "/mock/adult-therapy/7-icon.svg",
			title: "Современные методы анестезии:",
			description:
				"Мы&nbsp;используем аппликационную и&nbsp;инфильтрационную анестезию, чтобы сделать процесс лечения полностью безболезненным.",
		},
		{
			icon: "/mock/adult-therapy/8-icon.svg",
			title: "Общий наркоз или седация:",
			description:
				"Для пациентов с&nbsp;низким болевым пороком, боязнью стоматологических манипуляций или аллергией на&nbsp;местные анестетики мы&nbsp;предлагаем лечение под общим наркозом или седацией.",
		},
		{
			icon: "/mock/adult-therapy/9-icon.svg",
			title: "Терапия только на&nbsp;микроскопе:",
			description:
				"С&nbsp;использованием стоматологического операционного микроскопа Leica M320 (комплектация Hi-End), который соединил в&nbsp;себе оптику превосходного качества с&nbsp;новым светодиодным освещением и&nbsp;технологией HD-документации.",
		},
	],
};

export const WHAT_INCLUDES: WhatServiceIncludesProps = {
	title: "Что включает услуга",
	cards: [
		{
			title: "Избавление от&nbsp;боли и&nbsp;дискомфорта.",
		},
		{
			title: "Сохранение зубов на&nbsp;долгие годы.",
		},
	],
};

export const DIAGNOSTICS_SECTION_MOCK: DiagnosticProcessSectionProps = {
	sectionHeader: {
		title: "Ваша улыбка в&nbsp;руках профессионалов!",
		description: "Мы&nbsp;реализуем целостный осмотр для своих пациентов:",
	},
	cards: [
		{
			title: "01. Осмотр и&nbsp;консультация",
			description:
				"Врач выслушивает ваши жалобы, проводит осмотр полости рта и&nbsp;отвечает на&nbsp;все интересующие вопросы.",
			poster: {
				webp: {
					src: "/mock/diagnostics/1-desktop.webp",
				},
			},
		},
		{
			title: "02. Комплексная диагностика",
			description:
				"При необходимости выполняются фотопротокол, прицельные и&nbsp;панорамные снимки или&nbsp;КТ для полной диагностики и&nbsp;точного планирования лечения.",
			poster: {
				webp: {
					src: "/mock/diagnostics/2-desktop.webp",
				},
			},
		},
		{
			title: "03. Составление плана лечения",
			description:
				"По&nbsp;результатам диагностики врач подробно объясняет ситуацию, предлагает оптимальные варианты лечения, озвучивает сроки и&nbsp;стоимость каждого этапа.",
			poster: {
				webp: {
					src: "/mock/diagnostics/3-desktop.webp",
				},
			},
		},
		{
			title: "04. Начало лечения",
			description:
				"При отсутствии противопоказаний лечение можно начать сразу после консультации или выбрать удобную дату для следующего визита.",
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
		title: "Почему выбирают лечение зубов именно в&nbsp;нашей клинике",
		description:
			"Лечим кариес, пульпит и&nbsp;периодонтит максимально бережно, сохраняя собственные зубы. Используем современную диагностику, лечение под микроскопом и&nbsp;материалы, которые служат долгие годы.",
	},
	cards: [
		{
			icon: "/mock/why-choose-us/1-icon.svg",
			title: "Лечение под микроскопом",
			description:
				"Высокая точность позволяет сохранить больше здоровых тканей зуба и&nbsp;качественно обработать даже самые сложные корневые каналы.",
		},
		{
			icon: "/mock/why-choose-us/2-icon.svg",
			title: "Безболезненное лечение",
			description:
				"Современная анестезия и&nbsp;деликатный подход делают лечение комфортным даже для пациентов с&nbsp;повышенной чувствительностью.",
		},
		{
			icon: "/mock/why-choose-us/3-icon.svg",
			title: "Максимальное сохранение зубов",
			description:
				"Наша задача&nbsp;&mdash; сохранить ваш собственный зуб, если это возможно, и&nbsp;избежать удаления.",
		},
	],
	mainSection: {
		title: "Причины выбрать именно нас",
		list: [
			"Врачи-терапевты с&nbsp;многолетним опытом",
			"Лечение под микроскопом для высокой точности",
			"Современные материалы с&nbsp;естественной эстетикой",
			"Контроль результата и&nbsp;рекомендации после лечения",
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

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
	title: "Врачи, оказывающие услугу",
	button: {
		title: "Смотреть всех специалистов",
		href: SITE_NAVIGATION.vrachi,
	},
	employees: [
		GLOBAL_EMPLOYEES.markaryan,
		GLOBAL_EMPLOYEES.koramagomedov,
		GLOBAL_EMPLOYEES.davidova,
	],
};

export const COST_OF_SERVICES: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		{
			title: "Лечение кариеса 1&nbsp;поверхность",
			description:
				"Анестезия коффердам, светоотверждаемый пломбировочный материал, шлифовка и&nbsp;полировка пломбы.",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 8_300,
		},
		{
			title: "Лечение кариеса 2&nbsp;поверхности и&nbsp;более",
			description:
				"Анестезия, коффердам, светоотверждаемый пломбировочный материал, шлифовка и&nbsp;полировка пломбы.",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 10_500,
		},
		{
			title: "Художественная реставрация зуба",
			description:
				"Анестезия,коффердам, светоотверждаемый пломбировочный материал, шлифовка и&nbsp;полировка пломбы.",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 16_400,
		},
		{
			title:
				"Эндодонтическое лечение корневых каналов (1&nbsp;или 2&nbsp;канала)",
			description:
				"Анестезия, коффердам, механическая и&nbsp;медикаментозная обработка и&nbsp;пломбировка корневых каналов, пломба.",
			price: 9_700,
			button: COSTS_OF_SERVICES_BUTTON,
		},
		{
			title: "Эндодонтическое лечение корневых каналов (3&nbsp;канала)",
			description:
				"Анестезия, коффердам, механическая и&nbsp;медикаментозная обработка и&nbsp;пломбировка корневых каналов, пломба.",
			price: 14_800,
			button: COSTS_OF_SERVICES_BUTTON,
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

export const FIRST_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	title: "Наши преимущества",
	textBlock: {
		title: "Лечение под микроскопом",
		description:
			"Высокая точность позволяет сохранить больше здоровых тканей зуба и&nbsp;качественно обработать даже самые сложные корневые каналы.",
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
		title: "Безболезненное лечение",
		description:
			"Современная анестезия и&nbsp;деликатный подход делают лечение комфортным даже для пациентов с&nbsp;повышенной чувствительностью.",
	},
	posters: [
		{
			webp: {
				src: "/mock/home/second-slider/2-1.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-2.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-3.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-4.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-5.webp",
			},
		},
	],
};

export const THIRD_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Максимальное сохранение зубов",
		description:
			"Наша задача&nbsp;&mdash; сохранить ваш собственный зуб, если это возможно, и&nbsp;избежать удаления.",
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
