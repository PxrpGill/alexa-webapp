import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { StillQuestionProps } from "@/widgets/still-questions/types/still-questions.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";

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
