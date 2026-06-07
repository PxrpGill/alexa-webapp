import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";

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

export const TITLE_STICKY_SECTION: TitleStickySectionProps = {
	title: "Показания к&nbsp;диагностике в&nbsp;клинике &laquo;Алекса&raquo;",
	cards: [
		"Хотите получить полную картину состояния ваших зубов и&nbsp;полости рта.",
		"Планируете провести комплексное лечение зубов (имплантация, протезирование, ортодонтия).",
		"Имеете хронические заболевания, которые могут повлиять на&nbsp;состояние ваших зубов.",
		"Недавно пережили травму челюсти или зубов.",
		"Ищете надежного и&nbsp;опытного стоматолога для всей семьи.",
		"Заметили изменения во&nbsp;внешнем виде зубов (цвет, форма, положение).",
		"Хотите провести профилактический осмотр и&nbsp;получить рекомендации по&nbsp;уходу за&nbsp;зубами.",
		"Хотите убедиться в&nbsp;безопасности и&nbsp;эффективности планируемого лечения.",
		"Испытываете дискомфорт или боль в&nbsp;зубах.",
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
