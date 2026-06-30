import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";

export const MOCK_QUADRO_SECTION: QuadroSectionProps = {
	sectionHeader: {
		description:
			"Откройте для себя преимущества профессиональной гигиены в&nbsp;клинике &laquo;Алекса&raquo;",
		title: "Здоровые зубы&nbsp;&mdash; залог уверенности",
		card: {
			title: "-1.500&nbsp;₽ на&nbsp;гигиену всех видов",
			buttonText: "Записаться на прием",
		},
		poster: {
			original: {
				src: "/mock/hygiene/hygiene.jpg",
			},
		},
	},
	cards: [
		{ title: "️Сделать вашу улыбку более сияющей и&nbsp;привлекательной." },
		{
			title:
				"Удалить налет и&nbsp;зубной камень, которые могут вызвать кариес и&nbsp;другие заболевания.",
		},
		{ title: "Обеспечить правильный уход за&nbsp;имплантатами." },
		{ title: "Получить рекомендации по&nbsp;правильной гигиене полости рта." },
		{
			title:
				"Улучшить состояние десен и&nbsp;предотвратить развитие гингивита и&nbsp;пародонтита.",
		},
		{
			title:
				"Улучшить внешний вид зубов перед отбеливанием или другими эстетическими процедурами.",
		},
	],
};

export const TITLE_STICKY_SECTION: TitleStickySectionProps = {
	title:
		"Показания к&nbsp;гигиене и&nbsp;профилактике в&nbsp;клинике &laquo;Алекса&raquo;",
	cards: [
		{
			title:
				"Хотите удалить мягкие и&nbsp;твердые зубные отложения (налет, зубной камень).",
		},
		{
			title:
				"Хотите предотвратить развитие кариеса, гингивита и&nbsp;пародонтита.",
		},
		{
			title:
				"Планируете провести отбеливание зубов или другие эстетические процедуры.",
		},
		{
			title:
				"Хотите получить рекомендации по&nbsp;правильной гигиене полости рта.",
		},
		{
			title:
				"Имеете имплантаты и&nbsp;нуждаетесь в&nbsp;специальном уходе за&nbsp;ними.",
		},
		{
			title: "Чувствуете дискомфорт или боль в&nbsp;десневой ткани.",
		},
		{
			title:
				"Хотите провести профилактический осмотр и&nbsp;убедиться в&nbsp;здоровье своих зубов.",
		},
		{
			title: "Заметили кровь при чистке зубов.",
		},
		{
			title: "Хотите улучшить внешний вид своей улыбки.",
		},
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
			icon: "/mock/hygiene/brick-work-icons/1-icon.svg",
			title: "Удаление мягких зубных отложений с&nbsp;помощью AIR FLOW:",
			description:
				"Приятная процедура с&nbsp;использованием специального раствора и&nbsp;порошкоструйного наконечника PROPHYflex&nbsp;4.",
		},
		{
			icon: "/mock/hygiene/brick-work-icons/2-icon.svg",
			title: "Удаление твердых зубных отложений (зубного камня):",
			description:
				"С&nbsp;помощью ультразвукового скалера NSK Varios VA970&nbsp;LUX. Быстрый и&nbsp;эффективный метод с&nbsp;минимальным дискомфортом.",
		},
		{
			icon: "/mock/hygiene/brick-work-icons/3-icon.svg",
			title: "Пародонтологическое лечение",
			description:
				"С&nbsp;помощью парадонтологического центра Vector Paro PRO: Щадящее и&nbsp;безопасное лечение даже в&nbsp;сложных случаях. Точная направленность ультразвуковых колебаний и&nbsp;высокая чувствительность наконечника гарантируют отсутствие боли и&nbsp;травм.",
		},
		{
			icon: "/mock/hygiene/brick-work-icons/4-icon.svg",
			title: "Домашнее отбеливание зубов",
			description:
				"Отбеливание зубов по&nbsp;технологии Philips Zoom WhiteSpeed: Безопасное и&nbsp;эффективное отбеливание зубов с&nbsp;видимым результатом после первого сеанса. Ваши зубы станут светлее более чем на&nbsp;10&nbsp;тонов!",
		},
	],
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
				src: "/mock/adult-orthopedics/second-slider/2-slide.webp",
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
			"Наши врачи обладают опытом и знаниями в области детской стоматологии.",
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

export const FOURTH_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	title: "До&nbsp;и&nbsp;после: реальные примеры наших пациентов",
	textBlock: {
		title: "Профессиональная гигиена меняет улыбку",
		description:
			"Мы&nbsp;бережно убираем зубной камень, налёт и&nbsp;тусклость и&nbsp;раскрываем естественную красоту ваших зубов.",
	},
	posters: [
		{
			webp: {
				src: "/mock/hygiene/before-after/1-before-after.webp",
			},
		},
		{
			webp: {
				src: "/mock/hygiene/before-after/2-before-after.webp",
			},
		},
		{
			webp: {
				src: "/mock/hygiene/before-after/3-before-after.webp",
			},
		},
		{
			original: {
				src: "/mock/hygiene/before-after/4-before-after.png",
			},
		},
		{
			original: {
				src: "/mock/hygiene/before-after/5-before-after.png",
			},
		},
		{
			original: {
				src: "/mock/hygiene/before-after/6-before-after.webp",
			},
		},
	],
};
