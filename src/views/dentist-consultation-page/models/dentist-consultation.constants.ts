import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import { APPOINTMENT_ID } from "@/shared/config/global-constants.constats";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { DiagnosticProcessSectionProps } from "@/widgets/diagnostic-process-section/types/diagnostic-process-section.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import type { WhatServiceIncludesProps } from "@/widgets/what-service-includes/types/what-service-includes.types";
import type { WhyChooseUsProps } from "@/widgets/why-choose-us/types/why-choose-us.types";

export const QUADRO_SECTION_MOCK: QuadroSectionProps = {
	sectionHeader: {
		title: "Полной диагностики за&nbsp;1&nbsp;прием",
		description: "Ваш путь к&nbsp;безупречной улыбке начинается&nbsp;с",
		card: {
			title: "Ваша здоровая улыбка начинается здесь! ",
			button: {
				title: "Записаться на прием",
				href: APPOINTMENT_ID.id,
			},
		},
		poster: {
			original: {
				src: "/mock/quadro/quadro-desktop.jpg",
			},
		},
	},
};

export const TITLE_STICKY_SECTION: TitleStickySectionProps = {
	title: "Показания к&nbsp;диагностике в&nbsp;клинике &laquo;Алекса&raquo;",
	cards: [
		{
			title:
				"Хотите получить полную картину состояния ваших зубов и&nbsp;полости рта.",
		},
		{
			title:
				"Планируете провести комплексное лечение зубов (имплантация, протезирование, ортодонтия).",
		},
		{
			title:
				"Имеете хронические заболевания, которые могут повлиять на&nbsp;состояние ваших зубов.",
		},
		{ title: "Недавно пережили травму челюсти или зубов." },
		{
			title: "Ищете надежного и&nbsp;опытного стоматолога для всей семьи.",
		},
		{
			title:
				"Заметили изменения во&nbsp;внешнем виде зубов (цвет, форма, положение).",
		},
		{
			title:
				"Хотите провести профилактический осмотр и&nbsp;получить рекомендации по&nbsp;уходу за&nbsp;зубами.",
		},
		{
			title:
				"Хотите убедиться в&nbsp;безопасности и&nbsp;эффективности планируемого лечения.",
		},
		{ title: "Испытываете дискомфорт или боль в&nbsp;зубах." },
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

export const BRICKWORK_SECTION: BrickworkSectionProps = {
	sectionHeader: {
		title: "Ваша улыбка в&nbsp;руках профессионалов!",
		description: "Мы&nbsp;реализуем целостный осмотр для своих пациентов:",
	},
	cards: [
		{
			icon: "/icons/eye.svg",
			title: "Визуальный и&nbsp;инструментальный осмотр:",
			description: "Точная оценка состояния ваших зубов и&nbsp;полости рта.",
		},
		{
			icon: "/icons/dms.svg",
			title: "Сбор полного анамнеза:",
			description:
				"Мы&nbsp;узнаем о&nbsp;вашем здоровье, чтобы построить индивидуальный план лечения.",
		},
		{
			icon: "/icons/graphic.svg",
			title: "Рентген и&nbsp;компьютерная томография:",
			description:
				"Современные методы диагностики для уверенности в&nbsp;точности диагноза.",
		},
		{
			icon: "/icons/child.svg",
			title: "Индивидуальный план лечения:",
			description:
				"Мы&nbsp;вместе с&nbsp;вами выберем наиболее подходящий вариант лечения.",
		},
		{
			icon: "/icons/doctor.svg",
			title: "Консультация с&nbsp;узкими специалистами:",
			description:
				"Если необходимо, мы&nbsp;проведем консилиум с&nbsp;врачами других специальностей (хирурги, ортопеды, ортодонты) для оптимального решения ваших проблем.",
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
					src: "/mock/employees/employee-1.webp",
				},
			},
			fullname: "Давыдова Александра Викторовна",
			position: "Главный врач, врач-стоматолог-терапевт, эндодонтист",
		},
		{
			poster: {
				webp: {
					src: "/mock/employees/employee-5.webp",
				},
			},
			fullname: "Корамагомедов Рамазан Корамагомедович",
			position:
				"Врач-стоматолог-терапевт, эндодонтист, стоматолог&#8209;ортопед",
		},
		{
			poster: {
				webp: {
					src: "/mock/employees/employee-12.webp",
				},
			},
			fullname: "Маркарян Кнарик Робертовна",
			position: "Врач-стоматолог-терапевт",
		},
	],
};

export const WHAT_SERVICE_INCLUDES: WhatServiceIncludesProps = {
	title: "Что включает услуга",
	cards: [
		{
			title: "Осмотр и&nbsp;оценка состояния зубов",
		},
		{
			title: "Сбор жалоб и&nbsp;обсуждение вашей ситуации",
		},
		{
			title: "Диагностика и&nbsp;определение возможных проблем",
		},
		{
			title: "Составление плана дальнейшего лечения",
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

export const WHY_CHOOSE_US: WhyChooseUsProps = {
	sectionHeader: {
		title: "Почему первую консультацию проходят именно у&nbsp;нас",
		description:
			"Первый прием&nbsp;&mdash; это возможность получить полную картину состояния полости рта, понять причины проблемы и&nbsp;получить понятный план лечения без навязанных процедур.",
	},
	cards: [
		{
			icon: "/mock/why-choose-us/1-icon.svg",
			title: "Полная диагностика",
			description:
				"Проводим осмотр, анализируем снимки и&nbsp;оцениваем состояние зубов, десен и&nbsp;прикуса.",
		},
		{
			icon: "/mock/why-choose-us/2-icon.svg",
			title: "Персональный план лечения",
			description:
				"Объясняем все этапы лечения простым языком и&nbsp;предлагаем оптимальные варианты.",
		},
		{
			icon: "/mock/why-choose-us/3-icon.svg",
			title: "Честный подход",
			description:
				"Назначаем необходимые процедуры и&nbsp;отвечаем на&nbsp;все вопросы пациента.",
		},
	],
	mainSection: {
		title: "Причины выбрать именно нас",
		list: [
			"Комплексная диагностика за&nbsp;один прием",
			"Понятный поэтапный план лечения",
			"Возможность консультации узких специалистов",
			"Современное диагностическое оборудование",
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
