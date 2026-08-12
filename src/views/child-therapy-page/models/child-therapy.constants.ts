import { APPOINTMENT_ID } from "@/shared/config/global-constants.constats";
import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";

export const QUADRO_MOCK_SECTION: QuadroSectionProps = {
	sectionHeader: {
		title: "Детская терапия",
		description: "Эффективное лечение зубов для детей без боли и&nbsp;страха",
		card: {
			title:
				"Запишитесь на&nbsp;прием и&nbsp;подарите своему ребенку здоровую и&nbsp;счастливую улыбку!",
			button: { title: "Записаться на прием", href: APPOINTMENT_ID.id },
		},
		poster: {
			original: {
				src: "/mock/child-therapy/1-desktop.jpg",
			},
		},
	},
	cards: [
		{
			title:
				"Предотвратить развитие серьезных проблем с&nbsp;зубами в&nbsp;будущем",
		},
		{
			title:
				"Вылечить кариес, пульпит, периодонтит и&nbsp;другие заболевания зубов",
		},
		{
			title: "Сделать улыбку вашего ребенка здоровой и&nbsp;красивой",
		},
		{
			title: "Предотвращение распространения инфекции по&nbsp;всему организму",
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
			icon: "/mock/child-therapy/1-icon.svg",
			title: "Фотографии и&nbsp;видео каждого этапа лечения:",
			description:
				"Вы&nbsp;можете увидеть все подробности процесса и&nbsp;убедиться в&nbsp;качестве нашей работы.",
		},
		{
			icon: "/mock/child-therapy/2-icon.svg",
			title: "Детские матрасы и&nbsp;игрушки:",
			description:
				"Создают атмосферу игры и&nbsp;расслабления для маленьких пациентов.",
		},
		{
			icon: "/mock/child-therapy/3-icon.svg",
			title: "Операционный микроскоп Leica M320:",
			description:
				"Обеспечивает превосходное увеличение и&nbsp;освещение для безупречного качества лечения.",
		},
		{
			icon: "/mock/child-therapy/4-icon.svg",
			title:
				'Специальные кресла KaVo ESTETICA<sup class="reg">&reg;</sup> E30&nbsp;S:',
			description:
				"С&nbsp;ортопедическими матрасами и&nbsp;подголовниками&nbsp;&mdash; комфорт на&nbsp;все время лечения.",
		},
		{
			icon: "/mock/child-therapy/5-icon.svg",
			title: "Общий наркоз или седация:",
			description:
				"При необходимости мы&nbsp;предлагаем безопасные и&nbsp;эффективные методы седации под контролем опытного врача-анестезиолога.",
		},
		{
			icon: "/mock/child-therapy/6-icon.svg",
			title: "Современные методы анестезии:",
			description:
				"Аппликационная и&nbsp;инфильтрационная анестезия делают процедуры практически безболезненными.",
		},
		{
			icon: "/mock/child-therapy/7-icon.svg",
			title: "Коффердам:",
			description:
				"Специальные латексные пластины, которые изолируют зуб от&nbsp;слюны и&nbsp;крови для более качественного лечения.",
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
		title: "Индивидуальный подход:",
		description:
			"Мы&nbsp;учитываем все особенности вашего ребенка и&nbsp;подбираем оптимальный план лечения.",
	},
	posters: [
		{
			original: {
				src: "/mock/pediatric-dental-consultation/4-1-slide.jpg",
			},
		},
		{
			original: {
				src: "/mock/pediatric-dental-consultation/4-2-slide.jpg",
			},
		},
		{
			original: {
				src: "/mock/pediatric-dental-consultation/4-3-slide.jpg",
			},
		},
		{
			original: {
				src: "/mock/pediatric-dental-consultation/4-4-slide.jpg",
			},
		},
	],
};
