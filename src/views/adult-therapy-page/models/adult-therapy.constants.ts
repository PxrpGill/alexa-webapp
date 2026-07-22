import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { DiagnosticProcessSectionProps } from "@/widgets/diagnostic-process-section/types/diagnostic-process-section.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import type { WhatServiceIncludesProps } from "@/widgets/what-service-includes/types/what-service-includes.types";
import type { WhyChooseUsProps } from "@/widgets/why-choose-us/types/why-choose-us.types";

export const MOCK_QUADRO_SECTION: QuadroSectionProps = {
	sectionHeader: {
		title: "Передовые решения в&nbsp;стоматологии",
		description: "Здоровье ваших зубов&nbsp;&mdash; наша миссия",
		card: {
			title: "Ваша здоровая улыбка начинается здесь!",
			buttonText: "Записаться на прием",
		},
		poster: {
			original: {
				src: "/mock/adult-therapy/quadro.jpg",
			},
		},
	},
};

export const TITLE_STICKY_SECTION_MOCK: TitleStickySectionProps = {
	title: "Показания к&nbsp;терапии в&nbsp;клинике &laquo;Алекса&raquo;",
	cards: [
		{
			title:
				"Хотите восстановить форму и&nbsp;функцию поврежденных зубов с&nbsp;помощью пломбирования или реставрации.",
		},
		{
			title:
				"Боитесь стоматологических процедур и&nbsp;желаете провести лечение под общим наркозом или седацией.",
		},
		{
			title:
				"Заметили потемнение эмали, дырку в&nbsp;зубе или чувствительность к&nbsp;холодному/горячему.",
		},
		{ title: "Страдаете от&nbsp;боли в&nbsp;зубах, пульпит, периодонтит." },
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
			title: "Протезирование вкладками:",
			description:
				"Мы&nbsp;предлагаем различные варианты протезирования вкладками, чтобы восстановить форму и&nbsp;функцию ваших зубов.",
		},
		{
			icon: "/mock/adult-therapy/2-icon.svg",
			title: "Коффердам:",
			description:
				"Мы&nbsp;используем специальные латексные листы, которые предотвращают попадание слюны и&nbsp;других жидкостей в&nbsp;полость рта и&nbsp;обеспечивают высокое качество лечения.",
		},
		{
			icon: "/mock/adult-therapy/3-icon.svg",
			title: "Лечение кариеса, пульпита и&nbsp;периодонтита:",
			description:
				"Наши врачи проведут комплексное лечение с&nbsp;использованием современных материалов и&nbsp;технологий.",
		},
		{
			icon: "/mock/adult-therapy/4-icon.svg",
			title: "Лечение корневых каналов:",
			description:
				"Мы&nbsp;используем самые современные методы лечения корневых каналов, чтобы сохранить ваши зубы на&nbsp;долгие годы.",
		},
		{
			icon: "/mock/adult-therapy/5-icon.svg",
			title: "Пломбирование и&nbsp;реставрация:",
			description:
				"Мы&nbsp;используем высококачественные пломбировочные материалы, которые отличаются прочностью и&nbsp;эстетичностью",
		},
		{
			icon: "/mock/adult-therapy/6-icon.svg",
			title:
				'Специальные кресла KaVo ESTETICA<sup class="reg">&reg;</sup> E30&nbsp;S:',
			description:
				"Наши установки обеспечивают комфорт и&nbsp;точность в&nbsp;процессе лечения.",
		},
		{
			icon: "/mock/adult-therapy/7-icon.svg",
			title: "Современные методы анестезии:",
			description:
				"Мы&nbsp;используем аппликационную и&nbsp;инфильтрационную анестезию, чтобы сделать процесс лечения полностью безболезненным.",
		},
		{
			icon: "/mock/adult-therapy/8-icon.svg",
			title: "Общий наркоз или седация:",
			description:
				"Для пациентов с&nbsp;низким болевым пороком, боязнью стоматологических манипуляций или аллергией на&nbsp;местные анестетики мы&nbsp;предлагаем лечение под общим наркозом или седацией.",
		},
		{
			icon: "/mock/adult-therapy/9-icon.svg",
			title: "Терапия только на&nbsp;микроскопе:",
			description:
				"С&nbsp;использованием стоматологического операционного микроскопа Leica M320 (комплектация Hi-End), который соединил в&nbsp;себе оптику превосходного качества с&nbsp;новым светодиодным освещением и&nbsp;технологией HD-документации.",
		},
	],
};

export const WHAT_INCLUDES: WhatServiceIncludesProps = {
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

export const WHY_CHOOSE_US: WhyChooseUsProps = {
	sectionHeader: {
		title: "Почему выбирают лечение зубов именно в&nbsp;нашей клинике",
		description:
			"Лечим кариес, пульпит и&nbsp;периодонтит максимально бережно, сохраняя собственные зубы. Используем современную диагностику, лечение под микроскопом и&nbsp;материалы, которые служат долгие годы.",
	},
	cards: [
		{
			icon: "/mock/why-choose-us/1-icon.svg",
			title: "Лечение под микроскопом",
			description:
				"Высокая точность позволяет сохранить больше здоровых тканей зуба и&nbsp;качественно обработать даже самые сложные корневые каналы.",
		},
		{
			icon: "/mock/why-choose-us/2-icon.svg",
			title: "Безболезненное лечение",
			description:
				"Современная анестезия и&nbsp;деликатный подход делают лечение комфортным даже для пациентов с&nbsp;повышенной чувствительностью.",
		},
		{
			icon: "/mock/why-choose-us/3-icon.svg",
			title: "Максимальное сохранение зубов",
			description:
				"Наша задача&nbsp;&mdash; сохранить ваш собственный зуб, если это возможно, и&nbsp;избежать удаления.",
		},
	],
	mainSection: {
		title: "Причины выбрать именно нас",
		list: [
			"Врачи-терапевты с&nbsp;многолетним опытом",
			"Лечение под микроскопом для высокой точности",
			"Современные материалы с&nbsp;естественной эстетикой",
			"Контроль результата и&nbsp;рекомендации после лечения",
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
					src: "/mock/employees/employee-12.webp",
				},
			},
			fullname: "Маркарян Кнарик Робертовна",
			position: "Врач-стоматолог-терапевт",
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
		{
			poster: {
				webp: {
					src: "/mock/employees/employee-1.webp",
				},
			},
			fullname: "Давыдова Александра Викторовна",
			position: "Главный врач, врач-стоматолог-терапевт, эндодонтист",
		},
	],
};

export const COST_OF_SERVICES: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		{
			title: "Консультация",
			description:
				"Профессиональная консультация стоматолога с&nbsp;осмотром, диагностикой и&nbsp;составлением индивидуального плана лечения.",
			button: {
				title: "Получить консультацию",
				href: "",
			},
			price: 1500,
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
