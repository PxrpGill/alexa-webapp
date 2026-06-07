import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";

export const QUADRO_SECTION_MOCK: QuadroSectionProps = {
	sectionHeader: {
		title: "Полной диагностики за&nbsp;1&nbsp;прием",
		description: "Ваш путь к&nbsp;безупречной улыбке начинается&nbsp;с",
		card: {
			title: "Ваша здоровая улыбка начинается здесь! ",
			buttonText: "Записаться на прием",
		},
		poster: {
			original: {
				src: "/mock/quadro/quadro-desktop.jpg",
			},
		},
	},
	cards: [
		"Получить точные сведения о&nbsp;состоянии ваших зубов",
		"Выбрать наиболее эффективный и&nbsp;безопасный метод лечения",
		"Сэкономить время и&nbsp;деньги в&nbsp;будущем",
		"Избежать осложнений и&nbsp;ненужных процедур",
	],
};
