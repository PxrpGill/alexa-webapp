import type { CtaSectionProps } from "@/widgets/cta-section/types/cta-section.types";
import type { DescriptionSectionProps } from "@/widgets/description-section/types/description-section.types";
import type { HealthForFamilyProps } from "@/widgets/health-for-family/types/health-for-family.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";

export const CTA_MOCK: CtaSectionProps = {
	poster: {
		webp: {
			src: "/mock/home/cta/desktop.webp",
		},
	},
	title: "Кураторы рядом на&nbsp;каждом этапе лечения",
	content:
		"<p>Мы&nbsp;понимаем, что лечение это всегда волнение и&nbsp;множество вопросов</p><p>Поэтому вас сопровождает персональный куратор: подскажет вам, напомнит о&nbsp;приёме, поможет с&nbsp;организацией и&nbsp;всегда будет на&nbsp;связи</p>",
	description: {
		text: "Мы&nbsp;рядом, чтобы лечение проходило спокойно, понятно и&nbsp;без лишнего стресса",
		icon: "/icons/mini-logo.svg",
	},
};

export const DESCRIPTION_SECTION: DescriptionSectionProps = {
	title: "Улыбка. Забота. Комфорт.<br /> Все&nbsp;&mdash; в&nbsp;одном месте",
	description: "Более 9000 человек стали нашими постоянными пациентами",
};

export const FIRST_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
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
		title: "Для самых<br /> маленьких",
		description:
			"Красивые кабинеты, оборудованные по&nbsp;самым современным медицинским стандартам, игровая зона с&nbsp;игрушками, книгами и&nbsp;раскрасками, сундучок с&nbsp;чудесными подарками&nbsp;&mdash; мы&nbsp;приложили все усилия, чтобы нашим маленьким пациентам и&nbsp;их&nbsp;родителям было уютно, комфортно и&nbsp;спокойно.",
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

export const THIRD_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Команда профессионалов:",
		description:
			"12&nbsp;докторов с&nbsp;многолетним опытом нашей клиники в&nbsp;ответе за&nbsp;здоровье ваших зубов.",
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

export const HEALTH_FOR_FAMILY: HealthForFamilyProps = {
	tabsBlock: {
		title: "Здоровье для всей семьи!",
		tabs: [
			{ title: "Стоматология для взрослых", slug: "stomatologiya-dlya-semi" },
			{ title: "Стоматология для детей", slug: "stomatologiya-dlya-detey" },
		],
	},
};
