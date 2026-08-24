import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import {
	APPOINTMENT_ID,
	COSTS_OF_SERVICES_BUTTON,
} from "@/shared/config/global-constants.constants";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { CertificatesSectionProps } from "@/widgets/certificates-section/types/certificates-section.types";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { DiagnosticProcessSectionProps } from "@/widgets/diagnostic-process-section/types/diagnostic-process-section.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";
import type { WhatServiceIncludesProps } from "@/widgets/what-service-includes/types/what-service-includes.types";

export const QUADRO_MOCK: QuadroSectionProps = {
	sectionHeader: {
		title: "Цифровая ортопедия",
		description: "с&nbsp;интраоральным сканером Detsply Sirona PrimeScan",
		card: {
			title: "Ваша здоровая улыбка начинается здесь!",
			button: { title: "Записаться на прием", href: APPOINTMENT_ID.id },
		},
		poster: {
			webp: {
				src: "/mock/adult-orthopedics/quadro.webp",
			},
		},
	},
};

export const FIRST_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	title: "Наши преимущества",
	textBlock: {
		title: "Собственная зуботехническая лаборатория",
		description:
			"Изготавливаем коронки, виниры и&nbsp;другие ортопедические конструкции в&nbsp;собственной лаборатории. Это позволяет сократить сроки лечения, оперативно вносить корректировки и&nbsp;в&nbsp;некоторых случаях установить коронку всего за&nbsp;один визит.",
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

export const WHAT_INCLUDES_SECTION: WhatServiceIncludesProps = {
	title: "Что включает услуга",
	cards: [
		{
			title: "Устранить недостатки зубов и&nbsp;улучшить внешний вид улыбки.",
		},
		{
			title:
				"Восстановить целостность зубного ряда и&nbsp;вернуть полноценную функцию зубам.",
		},
	],
};

export const TITLE_STICKY_SECTION_MOCK: TitleStickySectionProps = {
	title: "Показания к&nbsp;ортопедии в&nbsp;клинике &laquo;Алекса&raquo;",
	cards: [
		{
			title:
				"Имеете отсутствующие зубы или зубы с&nbsp;значительным разрушением коронковой части.",
		},
		{
			title:
				"Заметили изменения в&nbsp;прикусе или нарушения функции зубочелюстного аппарата.",
		},
		{
			title:
				"Желаете получить прочные и&nbsp;надежные ортопедические конструкции.",
		},
		{
			title:
				"Планируете провести имплантацию зубов и&nbsp;нуждаетесь в&nbsp;протезировании.",
		},
		{
			title: "Испытываете неудобство при жевании из-за отсутствующих зубов.",
		},
		{
			title:
				"Хотите восстановить эстетику улыбки и&nbsp;устранить недостатки зубов.",
		},
		{ title: "Хотите улучшить дикцию и&nbsp;восстановить функцию речи." },
	],
	lastCard: {
		poster: {
			webp: {
				src: "/mock/adult-orthopedics/sticky-1.webp",
			},
		},
		button: { title: "Записаться на прием", href: APPOINTMENT_ID.id },
	},
};

export const SECOND_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Персональный куратор",
		description:
			"После составления плана лечения за&nbsp;вами закрепляется куратор, который сопровождает вас на&nbsp;всех этапах: помогает подобрать удобное время приема, отвечает на&nbsp;вопросы и&nbsp;всегда остается на&nbsp;связи до&nbsp;завершения лечения.",
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
		title: "Индивидуальное планирование лечения",
		description:
			"Перед началом лечения врач проводит комплексную диагностику и&nbsp;подбирает оптимальный вариант восстановления зубов с&nbsp;учетом клинической ситуации, эстетических пожеланий и&nbsp;бюджета пациента.",
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
		title: "Комплексный подход",
		description:
			"При необходимости к&nbsp;лечению подключаются специалисты разных направлений&nbsp;&mdash; терапевт, хирург, имплантолог и&nbsp;ортодонт. Это позволяет составить единый план лечения и&nbsp;добиться долговечного результата.",
	},
	posters: [
		{
			webp: {
				src: "/mock/adult-orthopedics/fourth-slider/1-slide.webp",
			},
		},
		{
			webp: {
				src: "/mock/adult-orthopedics/fourth-slider/2-slide.webp",
			},
		},
		{
			webp: {
				src: "/mock/adult-orthopedics/fourth-slider/3-slide.webp",
			},
		},
	],
};

export const FIFTH_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Цифровое сканирование без слепков",
		description:
			"Вместо традиционных слепков используем современный внутриротовой сканер Dentsply Sirona. Он&nbsp;создает высокоточную 3D-модель зубов за&nbsp;несколько минут, делая диагностику комфортнее и&nbsp;повышая точность будущих реставраций.",
	},
	posters: [
		{
			webp: {
				src: "/mock/adult-orthopedics/fourth-slider/1-slide.webp",
			},
		},
		{
			webp: {
				src: "/mock/adult-orthopedics/fourth-slider/2-slide.webp",
			},
		},
		{
			webp: {
				src: "/mock/adult-orthopedics/fourth-slider/3-slide.webp",
			},
		},
	],
};

export const DIAGNOSTICS_SECTION_MOCK: DiagnosticProcessSectionProps = {
	sectionHeader: {
		title: "Ваша улыбка в&nbsp;руках профессионалов!",
		description: "Мы&nbsp;реализуем целостный осмотр для своих пациентов:",
	},
	cards: [
		{
			title: "1. Консультация и&nbsp;диагностика",
			description:
				"Врач проводит осмотр, выполняет фотопротокол, при необходимости назначает КЛКТ и&nbsp;3D-сканирование зубов, после чего составляет индивидуальный план лечения.",
			poster: {
				webp: {
					src: "/mock/adult-orthopedics/diagnostics/4-desktop.webp",
				},
			},
		},
		{
			title: "2. Подготовка к&nbsp;протезированию",
			description:
				"При необходимости проводится лечение зубов и&nbsp;дёсен, профессиональная гигиена, удаление зубов или установка имплантатов, если они предусмотрены планом лечения.",
			poster: {
				webp: {
					src: "/mock/adult-orthopedics/diagnostics/5-desktop.webp",
				},
			},
		},
		{
			title: "3. Подготовка и&nbsp;изготовление конструкции",
			description:
				"Врач подготавливает зубы и&nbsp;выполняет цифровое сканирование. По&nbsp;полученным данным изготавливаются коронки, виниры, мосты и&nbsp;другие ортопедические конструкции.",
			poster: {
				webp: {
					src: "/mock/adult-orthopedics/diagnostics/1-desktop.webp",
				},
			},
		},
		{
			title: "4. Фиксация и&nbsp;контроль результата",
			description:
				"Готовая конструкция примеряется, корректируется и&nbsp;фиксируется. Врач проверяет прикус и&nbsp;комфорт, а&nbsp;также даёт рекомендации по&nbsp;уходу.",
			poster: {
				webp: {
					src: "/mock/adult-orthopedics/diagnostics/2-desktop.webp",
				},
			},
		},
		// {
		// 	title: "Цифровое протезирование сканером Medit i500:",
		// 	description:
		// 		"Быстрое и&nbsp;точное 3D-сканирование зубов без дискомфортных слепков.",
		// 	poster: {
		// 		webp: {
		// 			src: "/mock/adult-orthopedics/diagnostics/3-desktop.webp",
		// 		},
		// 	},
		// },
	],
};

export const OUR_PEOPLE: OurPeopleSectionProps = {
	title: "Врачи, оказывающие услугу",
	button: {
		title: "Смотреть всех специалистов",
		href: SITE_NAVIGATION.vrachi,
	},
	employees: [
		{
			poster: {
				webp: {
					src: "/mock/employees/employee-2.webp",
				},
			},
			fullname: "Каплин Ефим Валерьевич",
			position: "Врач-стоматолог-хирург, ортопед, имплантолог",
		},
		{
			poster: {
				webp: {
					src: "/mock/employees/employee-5.webp",
				},
			},
			fullname: "Корамагомедов Рамазан Корамагомедович",
			position: "Врач-стоматолог-терапевт, эндодонтист, стоматолог-ортопед",
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

export const COST_OF_SERVICES: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		{
			title: "Коронка цельнокерамическая 3D&nbsp;Medit 500 стандарт",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 27_850,
			priceType: "from",
		},
		{
			title: "Временная коронка",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 2_650,
			priceType: "from",
		},
		{
			title: "Винир E-Max Стандарт цельнокерамический",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 33_100,
			priceType: "from",
		},
		{
			title:
				"Цельнокерамическая коронка на&nbsp;импланте на&nbsp;титановом абатменте стандартное исполнение",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 38_850,
			priceType: "from",
		},
		{
			title:
				"Реставрация цельнокерамическая (вкладка/накладка) 3D&nbsp;Medit 500",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 30_450,
			priceType: "from",
		},
	],
};

export const CERTIFICATES_SECTION: CertificatesSectionProps = {
	sectionHeader: {
		title: "Бонусная система",
		card: {
			title: "Ваше лечение возвращается подарками!",
			button: {
				title: "Ознакомиться с акциями",
				href: SITE_NAVIGATION.akcii,
			},
		},
	},
	certificateCards: [
		{ webp: { src: "/system/certificates/1-green.webp" } },
		{
			webp: {
				src: "/system/certificates/2-white.webp",
			},
		},
		{
			webp: {
				src: "/system/certificates/3-green.webp",
			},
		},
	],
};
