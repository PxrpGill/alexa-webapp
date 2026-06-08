import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";

export const QUADRO_MOCK: QuadroSectionProps = {
	sectionHeader: {
		title: "Цифровая ортопедия",
		description: "с&nbsp;интраоральным сканером Detsply Sirona PrimeScan",
		card: {
			title: "Ваша здоровая улыбка начинается здесь!",
			buttonText: "Записаться на прием",
		},
		poster: {
			original: {
				src: "/mock/adult-orthopedics/1-desktop.jpg",
			},
		},
	},
	cards: [
		"Устранить недостатки зубов и&nbsp;улучшить внешний вид улыбки.",
		"Восстановить целостность зубного ряда и&nbsp;вернуть полноценную функцию зубам.",
	],
};

export const TITLE_STICKY_SECTION_MOCK: TitleStickySectionProps = {
	title: "Показания к&nbsp;ортопедии в&nbsp;клинике &laquo;Алекса&raquo;",
	cards: [
		"Имеете отсутствующие зубы или зубы с&nbsp;значительным разрушением коронковой части.",
		"Заметили изменения в&nbsp;прикусе или нарушения функции зубочелюстного аппарата.",
		"Желаете получить прочные и&nbsp;надежные ортопедические конструкции.",
		"Планируете провести имплантацию зубов и&nbsp;нуждаетесь в&nbsp;протезировании.",
		"Испытываете неудобство при жевании из-за отсутствующих зубов.",
		"Хотите восстановить эстетику улыбки и&nbsp;устранить недостатки зубов",
		"Хотите улучшить дикцию и&nbsp;восстановить функцию речи.",
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

export const BRICKWORK_SECTION_MOCK: BrickworkSectionProps = {
	sectionHeader: {
		title: "Ваша улыбка в&nbsp;руках профессионалов!",
		description: "Мы&nbsp;предлагаем:",
	},
	cards: [
		{
			icon: "/mock/adult-therapy/1-icon.svg",
			title: "Вкладки:",
			description:
				"Прочные и&nbsp;эстетичные вкладки из&nbsp;прессованной керамики заменят пломбу и&nbsp;восстановят форму и&nbsp;функцию зуба.",
		},
		{
			icon: "/mock/adult-therapy/2-icon.svg",
			title: "Виниры:",
			description:
				"Тонкие керамические накладки на&nbsp;передние зубы, которые помогут устранить недостатки эмали и&nbsp;сделать улыбку более яркой и&nbsp;привлекательной.",
		},
		{
			icon: "/mock/adult-therapy/3-icon.svg",
			title: "Коронки, коронки на&nbsp;имплантах:",
			description:
				"Прочные и&nbsp;эстетичные коронки из&nbsp;различных материалов (оксид циркония и&nbsp;E-max) восстановят форму и&nbsp;функцию поврежденного зуба.",
		},
		{
			icon: "/mock/adult-therapy/4-icon.svg",
			title: "Съемные протезы:",
			description:
				"Подходят при полной или частичной адентии, как вариант, временных протезов на&nbsp;этапе ортопедического лечения.",
		},
		{
			icon: "/mock/adult-therapy/5-icon.svg",
			title:
				"Цифровое протезирование с&nbsp;использованием интраорального сканера Medit i500:",
			description:
				"Сканирование зубов проводится быстро и&nbsp;комфортно, без использования слепочных масс. Вы&nbsp;сможете увидеть 3D&nbsp;модель ваших будущих ортопедических конструкций. Нет погрешностей при сканировании в&nbsp;отличие от&nbsp;слепков.",
		},
	],
};
