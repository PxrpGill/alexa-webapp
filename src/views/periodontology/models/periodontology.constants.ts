import type { MockTabsSectionProps } from "@/widgets/mock-tabs-section/types/mock-tabs-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";

export const QUADRO_SECTION_MOCK: QuadroSectionProps = {
	sectionHeader: {
		title: "Сохраняем зубы при пародонтите",
		description: "Здоровье десен&nbsp;&mdash; основа сохранения зубов",
		card: {
			title:
				"Точная диагностика состояния десен с&nbsp;системой Florida Probe&nbsp;&mdash; бесплатно",
			buttonText: "Записаться на прием",
		},
		poster: {
			original: {
				src: "/mock/pariodontology/1-desktop.jpg",
			},
		},
	},
};

export const TITLE_STICKY_SECTION: TitleStickySectionProps = {
	title: "Показания к&nbsp;пародонтологии в&nbsp;клинике &laquo;Алекса&raquo;",
	cards: [
		{ title: "Кровоточивость при чистке зубов" },
		{ title: "Отечность или болезненность десен" },
		{ title: "Неприятный запах изо рта" },
		{
			title:
				"Появление промежутков или &laquo;карманов&raquo; между зубом и&nbsp;десной",
		},
		{
			title: "Подвижность зубов",
		},
		{
			title: "Ощущение, что зубы стали &laquo;длиннее&raquo;",
		},
		{
			title:
				"Даже лёгкая кровоточивость&nbsp;&mdash; это уже признак воспаления",
			theme: "green",
		},
	],
};

export const MOCK_TABS_SECTION: MockTabsSectionProps = {
	sectionHeader: {
		title: "Кто находится в&nbsp;группе повышенного риска",
		description: "Вероятность развития воспаления выше, если есть:",
	},
	mockTabs: {
		tabs: [
			"Курение",
			"Сахарный диабет",
			"Нарушения прикуса",
			"Нерегулярная или недостаточная гигиена",
			"Иммунодефицитные состояния",
			"Наследственная предрасположенность",
			"Ишемическая болезнь сердца",
			"Заболевания щитовидной железы",
		],
	},
	sectionContent: {
		title:
			"Запишитесь на&nbsp;консультацию пародонтолога, чтобы получить профессиональную оценку состояния десен и&nbsp;рекомендации по&nbsp;дальнейшим действиям.",
		description:
			"Если вы&nbsp;узнали хотя&nbsp;бы один из&nbsp;перечисленных признаков, стоит оценить состояние тканей, удерживающих зуб. На&nbsp;ранних этапах изменения легче остановить и&nbsp;стабилизировать.",
		buttonText: "Записаться на прием",
		poster: {
			original: {
				src: "/mock/pariodontology/mock-tabs.jpeg",
			},
		},
	},
};
