import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { DescriptionSectionProps } from "@/widgets/description-section/types/description-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";

export const MOCK_QUADRO_SECTION: QuadroSectionProps = {
	sectionHeader: {
		title: "Консультация детского стоматолога",
		description: "Первый шаг к&nbsp;здоровым зубам вашего ребенка",
		card: {
			title:
				"Запишитесь сейчас и&nbsp;обеспечьте своему ребёнку здоровье и&nbsp;комфорт!",
			buttonText: "Записаться на прием",
		},
		poster: {
			webp: {
				src: "/mock/pediatric-dental-consultation/pediatric-quadro.webp",
			},
		},
	},
	cards: [
		{
			title: "Осмотр полости рта:",
			description: "Оценит состояние зубов, десен и&nbsp;прикуса.",
		},
		{
			title: "Рекомендации по&nbsp;гигиене:",
			description:
				"Научит правильно чистить зубы и&nbsp;использовать зубную нить.",
		},
		{
			title: "Выявление причины проблем:",
			description:
				"Определит причины кариеса, воспаления десен и&nbsp;других заболеваний.",
		},
		{
			title: "План лечения:",
			description:
				"Разработает индивидуальный план лечения, учитывая возраст и&nbsp;особенности ребенка.",
		},
	],
};

export const DESCRIPTION_SECTION: DescriptionSectionProps = {
	title:
		"Начните путь к&nbsp;здоровой улыбке вашего <span style='color: var(--color-green-1);'>ребёнка с&nbsp;первой консультации</span>",
	description:
		"Этот визит поможет малышу познакомиться с&nbsp;врачом и&nbsp;почувствовать себя уверенно. Доверие и&nbsp;положительный опыт у&nbsp;стоматолога&nbsp;&mdash; ключ к&nbsp;успешному лечению на&nbsp;долгие годы.",
};

export const BRICKWORK_SECTION_MOCK: BrickworkSectionProps = {
	sectionHeader: {
		title: "Улыбка ваших детей в&nbsp;руках профессионалов!",
		description: "Мы&nbsp;предлагаем:",
	},
	cards: [
		{
			icon: "/mock/pediatric-dental-consultation/1-icon.svg",
			title: "Визуальное и&nbsp;инструментальное обследование:",
			description: "Проводится осмотр полости рта и&nbsp;зубов вашего ребенка.",
		},
		{
			icon: "/mock/pediatric-dental-consultation/2-icon.svg",
			title: "Полный анамнез здоровья:",
			description:
				"На&nbsp;первом приеме детский стоматолог собирает полный анамнез здоровья вашего ребенка, чтобы убедиться в&nbsp;безопасности проведения лечения.",
		},
		{
			icon: "/mock/pediatric-dental-consultation/3-icon.svg",
			title: "Рентгеновское исследование и&nbsp;компьютерная томография:",
			description:
				"В&nbsp;случае необходимости мы&nbsp;проводим рентгеновское исследование или направляем на&nbsp;компьютерную томографию с&nbsp;использованием современного оборудования KaVo OP&nbsp;3D&nbsp;и&nbsp;интраоральных мобильных рентгеновских аппаратов FONA X70&nbsp;с системами компьютерной радиовизиографии Gendex GXS&#8209;700.",
		},
		{
			icon: "/mock/pediatric-dental-consultation/4-icon.svg",
			title: "Консилиум с&nbsp;врачами других пециальностей:",
			description:
				"В&nbsp;случае необходимости мы&nbsp;проводим консилиум с&nbsp;врачами других специальностей, чтобы обеспечить комплексный и&nbsp;эффективный подход к&nbsp;лечению вашего ребенка.",
		},
		{
			icon: "/mock/pediatric-dental-consultation/5-icon.svg",
			title: "Индивидуальный план лечения:",
			description:
				"После диагностики мы&nbsp;составляем индивидуальный план лечения и&nbsp;согласовываем время следующих визитов.",
		},
		{
			title: "Скидка&nbsp;10%",
			description:
				"Программа лояльности для детей из&nbsp;многодетных семей и&nbsp;детей с&nbsp;особенностями",
			cardTheme: "green",
			buttonText: "Записаться на прием",
		},
	],
};
