import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import { APPOINTMENT_ID } from "@/shared/config/global-constants.constats";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { DiagnosticProcessSectionProps } from "@/widgets/diagnostic-process-section/types/diagnostic-process-section.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";
import type { WhatServiceIncludesProps } from "@/widgets/what-service-includes/types/what-service-includes.types";

export const QUADRO_SECTION_MOCK: QuadroSectionProps = {
	sectionHeader: {
		title: "Лечение височно-нижнечелюстных нарушений",
		description: "Восстановим работу сустава без ненужных вмешательств",
		card: {
			title: "Точная диагностика и&nbsp;контроль результата",
			description:
				"<p>Вы&nbsp;получите:</p><ul><li>понятную диагностику</li><li>прозрачный план лечения</li><li>сопровождение врача на&nbsp;каждом этапе</li><ul>",
			button: {
				title: "Записаться на прием",
				href: APPOINTMENT_ID.id,
			},
		},
		poster: {
			webp: {
				src: "/mock/gnathologia/quadro.webp",
			},
		},
	},
};

export const TITLE_STICKY_SECTION_MOCK: TitleStickySectionProps = {
	title: "Показания к&nbsp;гнатологии в&nbsp;клинике &laquo;Алекса&raquo;",
	cards: [
		{
			title: "Сначала это почти не&nbsp;мешает:",
			description:
				"<ul><li>щёлкает, когда широко открываете рот</li><li>появляется лёгкий дискомфорт при жевании</li><li>иногда &laquo;тянет&raquo; или &laquo;устает&raquo; челюсть</li></ul>",
		},
		{
			title: "Вы&nbsp;привыкаете и&nbsp;начинаете подстраиваться:",
			description:
				"<ul><li>открываете рот не&nbsp;до&nbsp;конца</li><li>жуёте на&nbsp;одной стороне</li><li>стараетесь лишний раз не&nbsp;нагружать</li></ul>",
		},
		{
			title: "И&nbsp;со&nbsp;временем это превращается&nbsp;в:",
			description:
				"<ul><li>постоянную боль</li><li>ограниченные движения</li><li>постоянный дискомфорт</li></ul>",
		},
		{
			title: "Сначала это почти не&nbsp;мешает:",
			description:
				"<p>Но&nbsp;проблема при этом никуда не&nbsp;уходит&nbsp;&mdash; она постепенно усугубляется.</p><br /><p>Чем раньше разобраться, что происходит с&nbsp;суставом, тем проще и&nbsp;спокойнее это исправить.</p>",
			theme: "green",
			buttonText: "Записаться на прием",
		},
	],
	lastCard: {
		poster: {
			original: {
				src: "/mock/sticky-title/title-sticky.jpg",
			},
		},
		buttonText: "Записаться на прием",
	},
};

export const WHAT_INCLUDES: WhatServiceIncludesProps = {
	title: "Что включает услуга",
	cards: [
		{ title: "Первичная консультация" },
		{ title: "Осмотр прикуса, зубов и&nbsp;работы челюсти" },
	],
};

export const DIAGNOSTICS_SECTION_MOCK: DiagnosticProcessSectionProps = {
	sectionHeader: {
		title: "Ваша улыбка в&nbsp;руках профессионалов!",
		description: "Мы&nbsp;реализуем целостный осмотр для своих пациентов:",
	},
	cards: [
		{
			title: "Визуальный и&nbsp;инструментальный осмотр:",
			description: "Точная оценка состояния ваших зубов и&nbsp;полости рта.",
			poster: {
				webp: {
					src: "/mock/diagnostics/1-desktop.webp",
				},
			},
		},
		{
			title: "Сбор полного анамнеза:",
			description:
				"Мы&nbsp;узнаем о&nbsp;вашем здоровье, чтобы построить индивидуальный план лечения.",
			poster: {
				webp: {
					src: "/mock/diagnostics/2-desktop.webp",
				},
			},
		},
		{
			title: "Рентген и&nbsp;компьютерная томография:",
			description:
				"Современные методы диагностики для уверенности в&nbsp;точности диагноза.",
			poster: {
				webp: {
					src: "/mock/diagnostics/3-desktop.webp",
				},
			},
		},
		{
			title: "Визуальный и&nbsp;инструментальный осмотр:",
			description: "Точная оценка состояния ваших зубов и&nbsp;полости рта.",
			poster: {
				webp: {
					src: "/mock/diagnostics/4-desktop.webp",
				},
			},
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
					src: "/mock/employees/employee-9.webp",
				},
			},
			fullname: "Кравченко Павел Сергеевич",
			position: "Врач-ортодонт, гнатолог",
		},
	],
};

export const COST_OF_SERVICES: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		{
			title: "Консультация",
			description:
				"Профессиональная консультация стоматолога с&nbsp;осмотром, диагностикой и&nbsp;составлением индивидуального плана лечения.",
			button: {
				title: "Получить консультацию",
				href: "",
			},
			price: 1500,
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
				src: "/mock/adult-orthopedics/second-slider/2-slide.webp",
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
			"Наши врачи обладают опытом и знаниями в области детской стоматологии.",
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
