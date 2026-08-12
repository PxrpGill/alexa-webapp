import { APPOINTMENT_ID } from "@/shared/config/global-constants.constats";
import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";

export const MOCK_QUADRO_SECTION: QuadroSectionProps = {
	sectionHeader: {
		description:
			"Безопасные и&nbsp;комфортные хирургические процедуры для детей",
		title: "Детская хирургия полости рта",
		card: {
			title:
				"Запишитесь на&nbsp;прием и&nbsp;подарите своему ребенку здоровую и&nbsp;счастливую улыбку!",
			button: { title: "Записаться на прием", href: APPOINTMENT_ID.id },
		},
		poster: {
			original: {
				src: "/mock/pediatric-surgery/1-desktop.jpg",
			},
		},
	},
	cards: [
		{
			title: "Удалить проблемные молочные зубы, неподдающиеся лечению",
		},
		{
			title:
				"️Пластика уздечки языка и&nbsp;губ для исправления дефектов речи, трудностей с&nbsp;питанием и&nbsp;улучшения внешнего вида",
		},
	],
};

export const BRICKWORK_SECTION_MOCK: BrickworkSectionProps = {
	sectionHeader: {
		title: "Улыбка ваших детей в&nbsp;руках профессионалов!",
		description: "Мы&nbsp;предлагаем:",
	},
	cards: [
		{
			icon: "/mock/pediatric-surgery/1-icon.svg",
			title: "Удаление зубов:",
			description:
				"<p>Мы&nbsp;деликатно удаляем разрушенные молочные зубы и&nbsp;&laquo;лишние&raquo; зубы, чтобы освободить место для здоровых постоянных.</p><br /><p>&laquo;Внекомплектные&raquo; и&nbsp;&laquo;сверхкомплектные&raquo; зубы: Мы&nbsp;удаляем &laquo;лишние&raquo; зубы, которые мешают правильному росту и&nbsp;развитию зубного ряда.</p><br /><p>В&nbsp;случае необходимости мы&nbsp;проводят удаление постоянных зубов с&nbsp;минимальным дискомфортом для ребенка.</p>",
		},
		{
			icon: "/mock/pediatric-surgery/2-icon.svg",
			title: "Пластика уздечки языка и&nbsp;губ:",
			description:
				"<p>Мы&nbsp;поможем исправить дефекты речи и&nbsp;трудности с&nbsp;питанием у&nbsp;детей с&nbsp;помощью пластики уздечки языка и&nbsp;губ.</p><br /><p>Мы&nbsp;проводим пластику уздечки языка уже детям грудного возраста, чтобы не&nbsp;допустить проблем с&nbsp;сосанием.</p><br /><p>Пластика уздечки губ помогает исправить дефекты речи и&nbsp;улучшить внешний вид улыбки.</p>",
		},
		{
			icon: "/mock/pediatric-surgery/3-icon.svg",
			title: "Вестибулопластика:",
			description:
				"<p>Мы&nbsp;проводим вестибулопластику для углубления преддверия полости рта, что помогает решать логопедические проблемы, подготовиться к&nbsp;ортодонтическому лечению, предотвратить воспаление десен и&nbsp;исправить косметические дефекты.</p>",
		},
		{
			title: "Скидка&nbsp;10%",
			description:
				"Программа лояльности для детей из&nbsp;многодетных семей и&nbsp;детей с&nbsp;особенностями",
			buttonText: "Записаться на прием",
			cardTheme: "green",
		},
	],
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
			original: {
				src: "/mock/pediatric-dental-consultation/2-1-slide.jpg",
			},
		},
		{
			original: {
				src: "/mock/pediatric-dental-consultation/2-2-slide.jpg",
			},
		},
		{
			original: {
				src: "/mock/pediatric-dental-consultation/2-3-slide.jpg",
			},
		},
	],
};

export const THIRD_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Мы&nbsp;используем современные методы анестезии и&nbsp;седации",
		description:
			"(общий наркоз с&nbsp;газом &laquo;Севоран&raquo;, внутривенная седация с&nbsp;эмульсией &laquo;Пропофол&raquo; или седацией закисью азота) под контролем опытных врачей для комфортного и&nbsp;безопасного лечения.",
	},
	posters: [
		{
			original: {
				src: "/mock/pediatric-surgery/3-1-slider.jpg",
			},
		},
		{
			original: {
				src: "/mock/pediatric-surgery/3-2-slider.jpg",
			},
		},
	],
};
