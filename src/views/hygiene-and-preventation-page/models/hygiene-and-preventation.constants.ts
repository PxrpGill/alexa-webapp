import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import {
	APPOINTMENT_ID,
	COSTS_OF_SERVICES_BUTTON,
	GLOBAL_EMPLOYEES,
} from "@/shared/config/global-constants.constants";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { ChildWhatIncludesServicesProps } from "@/widgets/child-what-includes-services/types/child-what-includes-services.types";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { HeroProps } from "@/widgets/hero/types/hero.types";
import type { HowItWorksSliderProps } from "@/widgets/how-it-works-slider/types/how-it-works-slider.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { RecommendsForChildrenProps } from "@/widgets/recommends-for-children/types/recommends-for-children.types";

export const HERO_DATA: HeroProps = {
	title:
		"Помогаем сохранить здоровые зубы и&nbsp;привить ребёнку правильные привычки",
	description:
		"Профессионально очищаем зубы, оцениваем состояние полости рта и&nbsp;рассказываем ребёнку и&nbsp;родителям, как правильно ухаживать за&nbsp;улыбкой дома.",
	button: {
		title: "Записать ребёнка на приём",
		href: APPOINTMENT_ID.id,
	},
	poster: {
		webp: {
			src: "/mock/hygiene-and-preventation/1-desktop.webp",
		},
	},
};

export const CHILD_WHAT_INCLUDES_SERVICES: ChildWhatIncludesServicesProps = {
	sectionHeader: {
		title: "Что входит в&nbsp;детскую гигиену",
		description:
			"Профессиональная гигиена&nbsp;&mdash; это не&nbsp;только очищение зубов. Врач помогает понять, где скапливается налёт, и&nbsp;показывает, как правильно ухаживать за&nbsp;зубами каждый день.",
	},
	cards: [
		{
			title: "Осмотр",
			description:
				"Оцениваем состояние зубов, дёсен и&nbsp;качество домашней гигиены.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/first.webp",
				},
			},
		},
		{
			title: "Очищение",
			description:
				"Удаляем мягкий налёт и&nbsp;отложения с&nbsp;поверхности зубов.",
			cardType: "vertical-alexik",
			poster: {
				original: {
					src: "/mock/pediatric-surgery/what-includes-services/happy-alexik.png",
				},
			},
		},
		{
			title: "Полировка",
			description:
				"Делаем поверхность зубов более гладкой, чтобы налёту было сложнее на&nbsp;ней задерживаться.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/third.webp",
				},
			},
		},
		{
			title: "Обучение уходу",
			description:
				"Показываем ребёнку правильную технику чистки зубов и&nbsp;помогаем подобрать средства для ухода.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/fourth.webp",
				},
			},
		},
		{
			title: "Рекомендации",
			description:
				"Рассказываем родителям, на&nbsp;что обратить внимание дома и&nbsp;как поддерживать результат.",
			cardType: "horizontal-alexik",
			poster: {
				original: {
					src: "/mock/pediatric-surgery/what-includes-services/alexik-with-heart.png",
				},
			},
		},
	],
};

export const RECOMMENDS_FOR_CHILDREN_DATA: RecommendsForChildrenProps = {
	sectionHeader: {
		title: "Когда ребёнку нужна профессиональная гигиена?",
		description:
			"Профессиональная гигиена помогает поддерживать здоровье зубов и&nbsp;дёсен и&nbsp;особенно полезна в&nbsp;периоды, когда ребёнку сложно самостоятельно хорошо очищать зубы.",
		mockup: "/mock/pediatric-surgery/recommend-for-children/alexik-doctor.png",
	},
	cards: [
		{
			title: "Появился налёт",
			description:
				"На&nbsp;зубах заметен мягкий или пигментированный налёт, который не&nbsp;удаётся убрать обычной щёткой.",
		},
		{
			title: "Кровоточат дёсны",
			description:
				"Во&nbsp;время чистки ребёнок замечает кровь или дёсны часто выглядят покрасневшими.",
		},
		{
			title: "Неприятный запах",
			description:
				"Даже после чистки зубов сохраняется неприятный запах изо рта.",
		},
		{
			title: "Ребёнок плохо чистит зубы",
			description:
				"Ребёнку сложно самостоятельно тщательно очистить все поверхности зубов.",
		},
		{
			title: "Появились брекеты",
			description:
				"Ортодонтические конструкции требуют особенно внимательного ухода и&nbsp;регулярной профессиональной гигиены.",
		},
		{
			title: "Для профилактики",
			description:
				"Даже при отсутствии жалоб регулярная гигиена помогает поддерживать здоровье зубов и&nbsp;вовремя замечать изменения.",
		},
	],
};

export const COST_OF_SERVICES: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		{
			title: "Консультация стоматолога-гигиениста",
			description:
				"<p>Осмотр полости рта, оценка качества домашнего ухода и&nbsp;подбор индивидуальных средств гигиены для ребёнка&nbsp;&mdash; без оплаты.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 0,
		},
		{
			title: "Первичный приём педиатра с&nbsp;адаптационным визитом",
			description:
				"<p>Знакомство с&nbsp;клиникой и&nbsp;врачом в&nbsp;спокойном темпе, осмотр полости рта и&nbsp;составление плана профилактики.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_500,
		},
		{
			title: "Повторный приём педиатра",
			description:
				"<p>Контрольный осмотр: оцениваем состояние зубов и&nbsp;дёсен, качество домашней гигиены и&nbsp;результат профилактики.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_500,
		},
		{
			title: "Профессиональная гигиена, 1&nbsp;уровень сложности",
			description:
				"<p>Медобработка, очищение зубов пастой, ультразвук, Airflow, финишная полировка, реминерализующая терапия, стерильный пакет и&nbsp;урок гигиены.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_900,
		},
		{
			title: "Профессиональная гигиена, 2&nbsp;уровень сложности",
			description:
				"<p>Тот&nbsp;же объём процедуры при меньшем количестве налёта и&nbsp;зубных отложений&nbsp;&mdash; для детей с&nbsp;регулярным домашним уходом.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_100,
		},
		{
			title: "Профессиональная гигиена ORTHO",
			description:
				"<p>Чистка для детей с&nbsp;брекетами и&nbsp;другими ортодонтическими конструкциями: аккуратное очищение вокруг элементов системы и&nbsp;укрепление эмали.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_300,
		},
		{
			title: "Герметизация фиссур",
			description:
				"<p>Закрытие природных углублений на&nbsp;жевательных зубах защитным материалом&nbsp;&mdash; там, где кариес появляется чаще всего.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_600,
		},
		{
			title: "Реминерализирующая терапия",
			description:
				"<p>Насыщение эмали кальцием и&nbsp;фтором после профессиональной чистки: снижает чувствительность зубов и&nbsp;укрепляет защиту от&nbsp;кариеса.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 3_000,
		},
		{
			title: "Глубокое фторирование эмали (1&nbsp;челюсть)",
			description:
				"<p>Дополнительная обработка эмали фторсодержащим составом для профилактики кариеса&nbsp;&mdash; по&nbsp;показаниям врача.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_300,
		},
	],
};

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
	title: "Врачи, оказывающие услугу",
	button: {
		title: "Смотреть всех специалистов",
		href: SITE_NAVIGATION.vrachi,
	},
	employees: [GLOBAL_EMPLOYEES.nikitin, GLOBAL_EMPLOYEES.tarasova],
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

export const HOW_IT_WORKS_SLIDER: Omit<HowItWorksSliderProps, "className"> = {
	title: "Как проходит гигиена",
	slides: [
		{
			title: "Знакомимся&nbsp;и осматриваем",
			description:
				"Сначала врач знакомится с&nbsp;ребёнком и&nbsp;осматривает полость рта. Оценивает состояние зубов и&nbsp;дёсен, количество налёта и&nbsp;качество домашней гигиены.",
			poster: {
				webp: {
					src: "/mock/hygiene-and-preventation/slider/1-slide.webp",
				},
			},
		},
		{
			title: "Показываем, где нужен уход",
			description:
				"Врач помогает ребёнку увидеть, какие места сложно очищать обычной щёткой. При необходимости используем специальные средства, чтобы сделать налёт заметнее.",
			poster: {
				webp: {
					src: "/mock/hygiene-and-preventation/slider/2-slide.webp",
				},
			},
		},
		{
			title: "Профессионально очищаем",
			description:
				"Бережно удаляем мягкий налёт и&nbsp;отложения с&nbsp;поверхности зубов. Подбираем способ очищения с&nbsp;учётом возраста ребёнка и&nbsp;состояния его зубов.",
			poster: {
				webp: {
					src: "/mock/hygiene-and-preventation/slider/3-slide.webp",
				},
			},
		},
		{
			title: "Полируем зубы",
			description:
				"После очищения полируем поверхность зубов, чтобы убрать остатки налёта и&nbsp;сделать эмаль гладкой.",
			poster: {
				webp: {
					src: "/mock/hygiene-and-preventation/slider/4-slide.webp",
				},
			},
		},
		{
			title: "Учимся чистить зубы правильно",
			description:
				"Врач показывает ребёнку правильную технику чистки и&nbsp;обращает внимание на&nbsp;места, которые часто остаются без внимания.",
			poster: {
				webp: {
					src: "/mock/hygiene-and-preventation/slider/5-slide.webp",
				},
			},
		},
		{
			title: "Подбираем домашний уход",
			description:
				"В&nbsp;конце врач даёт индивидуальные рекомендации ребёнку и&nbsp;родителям: как ухаживать за&nbsp;зубами дома, какие средства использовать и&nbsp;на&nbsp;что обратить внимание.",
			poster: {
				webp: {
					src: "/mock/hygiene-and-preventation/slider/6-slide.webp",
				},
			},
		},
	],
};
