import type { CompanyStatsSectionProps } from "@/widgets/company-stats-section/types/company-stats-section.types";
import type { DescriptionSectionProps } from "@/widgets/description-section/types/description-section.types";
import type { StillQuestionProps } from "@/widgets/still-questions/types/still-questions.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";

export const MOCK_DESCRIPTION_SECTION: DescriptionSectionProps = {
	title: "Высочайшее качество лечения&nbsp;&mdash; наш приоритет!",
	description:
		"Более 2&nbsp;тысяч пациентов стали нашими постоянными клиентами",
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
		title: "Команда профессионалов:",
		description:
			"12&nbsp;докторов с&nbsp;многолетним опытом нашей клиники в&nbsp;ответе за&nbsp;здоровье ваших зубов.",
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

export const COMPANY_STATS_MOCK: CompanyStatsSectionProps = {
	sectionHeader: {
		title: "Более 2 тысяч пациентов стали нашими постоянными клиентами",
	},
	cards: [
		{
			icon: "/mock/about-us/1-icon.svg",
			title: "2&nbsp;филиала",
			description: "Стараемся быть ближе к&nbsp;нашим пациентам",
		},
		{
			icon: "/mock/about-us/2-icon.svg",
			title: "12&nbsp;врачей",
			description: "Врачи общей практики и&nbsp;узкие специалисты",
		},
		{
			icon: "/mock/about-us/3-icon.svg",
			title: "14&nbsp;лет",
			description: "Заботимся о&nbsp;здоровье взрослых и&nbsp;детей",
		},
	],
};

export const STILL_QUESTIONS_MOCK: StillQuestionProps = {
	title: "Оставьте заявку сейчас!",
	description:
		"<p>Мы&nbsp;проконсультируем вас насчет всех нюансов лечения в&nbsp;нашей клинике.</p>",
	buttonText: "Оставить заявку",
	poster: {
		webp: {
			src: "/mock/home/third-slider/3-3.webp",
		},
	},
};
