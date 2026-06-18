import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { StillQuestionProps } from "@/widgets/still-questions/types/still-questions.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";

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
