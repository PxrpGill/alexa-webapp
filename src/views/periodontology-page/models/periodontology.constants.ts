import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { DiagnosticProcessSectionProps } from "@/widgets/diagnostic-process-section/types/diagnostic-process-section.types";
import type { EarlyPeriodontalTreatmentSectionProps } from "@/widgets/early-periodontal-treatment-section/types/early-periodontal-treatment-section.types";
import type { MockTabsSectionProps } from "@/widgets/mock-tabs-section/types/mock-tabs-section.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";
import type { TreatmentDelayConsequencesProps } from "@/widgets/treatment-delay-consequences/types/treatment-delay-consequences.types";
import type { WhatServiceIncludesProps } from "@/widgets/what-service-includes/types/what-service-includes.types";
import type { WhyChooseUsProps } from "@/widgets/why-choose-us/types/why-choose-us.types";

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
			webp: {
				src: "/mock/pariodontology/quadro.webp",
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
	lastCard: {
		poster: {
			original: {
				src: "/mock/sticky-title/title-sticky.jpg",
			},
		},
		buttonText: "Записаться на прием",
	},
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

export const TREATMENT_DELAY_CONSEQUENCES_MOCK: TreatmentDelayConsequencesProps =
	{
		sectionHeader: {
			title: "Почему важно не&nbsp;откладывать лечение",
			description:
				"Заболевания десен развиваются постепенно и&nbsp;часто без выраженной боли",
		},
		iconCards: {
			cards: [
				{
					icon: "/mock/pariodontology/treatment-delay-consequences/1-icon.svg",
					title: "Пародонтит",
					description:
						"Воспаление распространяется глубже, затрагивает связки и&nbsp;костную ткань.",
				},
				{
					icon: "/mock/pariodontology/treatment-delay-consequences/2-icon.svg",
					title: "Гингивит",
					description:
						"Воспаление и&nbsp;кровоточивость десны. На&nbsp;этом этапе изменения обратимы.",
				},
				{
					icon: "/mock/pariodontology/treatment-delay-consequences/3-icon.svg",
					title: "Потеря костной ткани",
					description: "Зуб теряет опору. Появляется подвижность.",
				},
				{
					icon: "/mock/pariodontology/treatment-delay-consequences/4-icon.svg",
					title: "Потеря зуба",
					description: "Финальный этап запущенного процесса.",
				},
			],
		},
		textCards: {
			cards: [
				{
					title: "Особенность в&nbsp;том, что этот путь может занимать годы.",
					description:
						"Этот процесс может длиться годами и&nbsp;часто проходит без боли",
				},
			],
		},
	};

export const EARLY_PERIODONTAL_TREATMENT_MOCK: EarlyPeriodontalTreatmentSectionProps =
	{
		sectionHeader: {
			title: "Раннее лечение всегда проще и&nbsp;безопаснее",
			description:
				"Раннее лечение гингивита значительно проще и&nbsp;доступнее, чем восстановление утраченной кости или установка импланта.",
			legend:
				"Пародонтология&nbsp;&mdash; это не&nbsp;косметическая процедура, а&nbsp;способ сохранить собственные зубы и&nbsp;избежать сложного протезирования в&nbsp;будущем.",
		},
		card: {
			description:
				"Понять стадию процесса можно только при профессиональном осмотре и&nbsp;точной диагностике.",
			underDescription:
				"Своевременная оценка состояния десен позволяет остановить заболевание до&nbsp;серьёзных последствий.",
			textButton: "Записаться на прием",
		},
	};

export const WHAT_SERVICE_INCLUDES: WhatServiceIncludesProps = {
	title: "Что включает услуга",
	cards: [
		{
			title: "Избавление от&nbsp;боли и&nbsp;дискомфорта.",
		},
		{
			title: "Сохранение зубов на&nbsp;долгие годы.",
		},
	],
};

export const WHY_CHOOSE_US: WhyChooseUsProps = {
	sectionHeader: {
		title: "Почему выбирают лечение десен именно в&nbsp;нашей клинике",
		description:
			"Останавливаем пародонтит на&nbsp;любой стадии и&nbsp;сохраняем ваши зубы &mdash; с&nbsp;точной диагностикой, бережными протоколами и&nbsp;врачами с&nbsp;многолетним опытом.",
	},
	cards: [
		{
			icon: "/mock/why-choose-us/1-icon.svg",
			title: "Безболезненное лечение",
			description:
				"Современная анестезия и&nbsp;щадящие протоколы&nbsp;&mdash; комфортно даже для чувствительных дёсен.",
		},
		{
			icon: "/mock/why-choose-us/2-icon.svg",
			title: "Диагностика Florida Probe",
			description:
				"Точная компьютерная оценка состояния дёсен и&nbsp;карманов&nbsp;&mdash; бесплатно на&nbsp;первом приёме.",
		},
		{
			icon: "/mock/why-choose-us/3-icon.svg",
			title: "Сохранение зубов",
			description:
				"Останавливаем воспаление и&nbsp;подвижность&nbsp;&mdash; сохраняем зубы на&nbsp;долгие годы без удаления.",
		},
	],
	mainSection: {
		title: "Причины выбрать именно нас",
		list: [
			"Бесплатная диагностика дёсен на&nbsp;первом приёме",
			"Индивидуальный план лечения под ваш случай",
			"Гарантия и&nbsp;наблюдение после курса лечения",
		],
		poster: {
			webp: {
				src: "/mock/why-choose-us/main.webp",
			},
		},
		button: {
			title: "Записаться на приём",
			href: "",
		},
	},
};

export const DIAGNOSTICS_SECTION_MOCK: DiagnosticProcessSectionProps = {
	sectionHeader: {
		title: "Ваша улыбка в&nbsp;руках профессионалов!",
		description: "Мы&nbsp;реализуем целостный осмотр для своих пациентов:",
	},
	cards: [
		{
			title: "Визуальный и&nbsp;инструментальный осмотр:",
			description: "Точная оценка состояния ваших зубов и&nbsp;полости рта.",
			poster: {
				webp: {
					src: "/mock/diagnostics/1-desktop.webp",
				},
			},
		},
		{
			title: "Сбор полного анамнеза:",
			description:
				"Мы&nbsp;узнаем о&nbsp;вашем здоровье, чтобы построить индивидуальный план лечения.",
			poster: {
				webp: {
					src: "/mock/diagnostics/2-desktop.webp",
				},
			},
		},
		{
			title: "Рентген и&nbsp;компьютерная томография:",
			description:
				"Современные методы диагностики для уверенности в&nbsp;точности диагноза.",
			poster: {
				webp: {
					src: "/mock/diagnostics/3-desktop.webp",
				},
			},
		},
		{
			title: "Визуальный и&nbsp;инструментальный осмотр:",
			description: "Точная оценка состояния ваших зубов и&nbsp;полости рта.",
			poster: {
				webp: {
					src: "/mock/diagnostics/4-desktop.webp",
				},
			},
		},
	],
};

export const FORM_DATA: AppointmentSchedulingProps = {
	title: "Запись на&nbsp;приём",
	description:
		"Оставьте свои контактные данные и&nbsp;мы&nbsp;свяжемся с&nbsp;вами в&nbsp;ближайшее время",
	poster: {
		webp: {
			src: "/system/form.webp",
		},
	},
};

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
	title: "Врачи, оказывающие услугу",
	button: {
		title: "Смотреть всех специалистов",
		href: SITE_NAVIGATION.vrachi,
	},
	employees: [
		{
			poster: {
				webp: {
					src: "/mock/employees/employee-13.webp",
				},
			},
			fullname: "Корнилов Герман Валерьевич",
			position: "Врач-стоматолог-пародонтолог",
		},
		{
			poster: {
				webp: {
					src: "/mock/employees/employee-8.webp",
				},
			},
			fullname: "Шахназарян Эрик Каренович",
			position: "Врач-стоматолог-хирург",
		},
	],
};

export const COST_OF_SERVICES: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		{
			title: "Консультация стоматолога-пародонтолога",
			button: {
				title: "Получить консультацию",
				href: "",
			},
			price: 1_350,
		},
		{
			title: "Шинирование стекловолоконной лентой в&nbsp;области 1&nbsp;зуба",
			button: {
				title: "Получить консультацию",
				href: "",
			},
			price: 3_800,
		},
		{
			title:
				"Тотальная неинвазивная пародонтальная терапия пародонтологическим центром &laquo;Vector Paro Pro&raquo;&nbsp;&mdash; 1&nbsp;челюсть",
			button: {
				title: "Получить консультацию",
				href: "",
			},
			price: 8_100,
		},
		{
			title:
				"Тотальная неинвазивная пародонтальная терапия пародонтологическим центром &laquo;Vector Paro Pro&raquo;&nbsp;&mdash; 2&nbsp;челюсти",
			button: {
				title: "Получить консультацию",
				href: "",
			},
			price: 15_300,
		},
		{
			title:
				"Неинвазивная пародонтальная терапия пародонтологическим центром &laquo;Vector Paro Pro&raquo;&nbsp;&mdash; 1&nbsp;сегмент",
			button: {
				title: "Получить консультацию",
				href: "",
			},
			price: 4_500,
		},
		{
			title: "Шинирование стекловолоконной лентой в&nbsp;области 4-6 зубов",
			price: 14_850,
			button: {
				title: "Получить консультацию",
				href: "",
			},
		},
		{
			title: "Наложение пленки Диплен-дента",
			price: 1_600,
			button: {
				title: "Получить консультацию",
				href: "",
			},
		},
		{
			title: "Введение лекарственного препарата в&nbsp;1&nbsp;челюсть",
			price: 350,
			button: {
				title: "Получить консультацию",
				href: "",
			},
		},
		{
			title: "Пародонтолигическая санация&nbsp;&mdash; первичная процедура",
			price: 7_200,
			button: {
				title: "Получить консультацию",
				href: "",
			},
		},
		{
			title: "Пародонтологическая санация&nbsp;&mdash; вторичная процедура",
			price: 5_400,
			button: {
				title: "Получить консультацию",
				href: "",
			},
		},
		{
			title: "Пародонтологическая санация&nbsp;&mdash; 1-3 зуба",
			price: 5_400,
			button: {
				title: "Получить консультацию",
				href: "",
			},
		},
		{
			title: "Пародонтологическая диагностика Florida Probe",
			price: 1_900,
			button: {
				title: "Получить консультацию",
				href: "",
			},
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
		title: "Для самых<br /> маленьких",
		description:
			"Красивые кабинеты, оборудованные по&nbsp;самым современным медицинским стандартам, игровая зона с&nbsp;игрушками, книгами и&nbsp;раскрасками, сундучок с&nbsp;чудесными подарками&nbsp;&mdash; мы&nbsp;приложили все усилия, чтобы нашим маленьким пациентам и&nbsp;их&nbsp;родителям было уютно, комфортно и&nbsp;спокойно.",
	},
	posters: [
		{
			webp: {
				src: "/mock/home/second-slider/2-1.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-2.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-3.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-4.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-5.webp",
			},
		},
	],
};

export const THIRD_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Команда профессионалов:",
		description:
			"12&nbsp;докторов с&nbsp;многолетним опытом нашей клиники в&nbsp;ответе за&nbsp;здоровье ваших зубов.",
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
