import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import {
	APPOINTMENT_ID,
	COSTS_OF_SERVICES_BUTTON,
	GLOBAL_EMPLOYEES,
} from "@/shared/config/global-constants.constants";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { ChildWhatIncludesServicesProps } from "@/widgets/child-what-includes-services/types/child-what-includes-services.types";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { FirstVisitSectionProps } from "@/widgets/first-visit-section/types/first-visit-section.types";
import type { HeroProps } from "@/widgets/hero/types/hero.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { RecommendsForChildrenProps } from "@/widgets/recommends-for-children/types/recommends-for-children.types";

export const HERO_DATA: HeroProps = {
	title:
		"Здоровье зубов начинается с&nbsp;первого знакомства со&nbsp;стоматологом",
	description:
		"Осмотрим зубы ребёнка, ответим на&nbsp;вопросы и&nbsp;составим план дальнейших действий.",
	poster: {
		webp: {
			src: "/mock/pediatric-dental-consultation/pediatric-quadro.webp",
		},
	},
	button: {
		title: "Записать ребёнка на приём",
		href: APPOINTMENT_ID.id,
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
			title: "Знакомство и&nbsp;беседа",
			description:
				"Врач знакомится с&nbsp;ребёнком, узнаёт о&nbsp;жалобах, привычках и&nbsp;особенностях ухода за&nbsp;зубами.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/first.webp",
				},
			},
		},
		{
			title: "Осмотр полости рта",
			description: "Оцениваем состояние зубов, дёсен, прикуса и&nbsp;гигиены.",
			cardType: "vertical-alexik",
			poster: {
				original: {
					src: "/mock/pediatric-surgery/what-includes-services/happy-alexik.png",
				},
			},
		},
		{
			title: "Оценка рисков",
			description:
				"Определяем факторы, которые могут повлиять на здоровье зубов и развитие прикуса.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/third.webp",
				},
			},
		},
		{
			title: "План дальнейших действий",
			description:
				"Если требуется лечение или дополнительная диагностика, врач составляет понятный план следующих шагов.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/fourth.webp",
				},
			},
		},
		{
			title: "Рекомендации",
			description:
				"Рассказываем, как ухаживать за&nbsp;зубами дома, какие средства использовать и&nbsp;на&nbsp;что обратить внимание.",
			cardType: "horizontal-alexik",
			poster: {
				original: {
					src: "/mock/pediatric-surgery/what-includes-services/alexik-with-heart.png",
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

export const COST_OF_SERVICES: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		{
			title: "Первичный приём педиатра с&nbsp;адаптационным визитом",
			description:
				"<p>Знакомство с&nbsp;клиникой и&nbsp;врачом в&nbsp;спокойном темпе, осмотр полости рта, оценка рисков и&nbsp;план дальнейших действий.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_500,
		},
		{
			title: "Повторный приём педиатра",
			description:
				"<p>Контрольный осмотр: оцениваем состояние зубов, дёсен и&nbsp;прикуса, качество домашней гигиены и&nbsp;результат профилактики.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_500,
		},
		{
			title: "Консультация гигиениста",
			description:
				"<p>Оценка качества домашнего ухода и&nbsp;подбор индивидуальных средств гигиены для ребёнка&nbsp;&mdash; без оплаты.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 0,
		},
		{
			title: "Снятие острой боли",
			description:
				"<p>Приём вне очереди, когда ребёнка беспокоит боль: находим причину и&nbsp;помогаем снять неприятные ощущения.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 3_500,
		},
		{
			title: "Дентальный прицельный снимок",
			description:
				"<p>Снимок одного зуба, если во&nbsp;время осмотра нужно уточнить диагноз.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 400,
		},
		{
			title: "Ортопантомограмма (панорамный снимок)",
			description:
				"<p>Обзорный снимок обеих челюстей: показывает зачатки постоянных зубов, их положение и&nbsp;скрытые проблемы.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_100,
		},
		{
			title: "Компьютерная томография зубов (1&nbsp;челюсть)",
			description:
				"<p>Трёхмерная диагностика по&nbsp;показаниям врача&nbsp;&mdash; когда нужно детально рассмотреть строение челюсти.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_600,
		},
	],
};

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
	title: "Врачи, оказывающие услугу",
	button: {
		title: "Смотреть всех специалистов",
		href: SITE_NAVIGATION.vrachi,
	},
	employees: [GLOBAL_EMPLOYEES.nikitin],
};

export const RECOMMENDS_FOR_CHILDREN_DATA: RecommendsForChildrenProps = {
	sectionHeader: {
		title: "Когда стоит показать ребёнка детскому стоматологу?",
		description:
			"Не&nbsp;обязательно ждать, пока появится боль. Регулярные осмотры помогают заметить изменения ещё до&nbsp;появления выраженных симптомов.",
		mockup: "/system/alexik-wash.png",
	},
	cards: [
		{
			title: "Первый визит",
			description:
				"Ребёнок ещё ни&nbsp;разу не&nbsp;был у&nbsp;стоматолога&nbsp;&mdash; самое время познакомиться с&nbsp;врачом в&nbsp;спокойной обстановке.",
		},
		{
			title: "Болит зуб",
			description:
				"Ребёнок жалуется на&nbsp;боль, чувствительность или неприятные ощущения во&nbsp;время еды.",
		},
		{
			title: "Изменился цвет зуба",
			description:
				"Появились пятна, потемнение, белые участки или другие изменения эмали.",
		},
		{
			title: "Проблемы с&nbsp;дёснами",
			description:
				"Кровоточивость, отёк, покраснение или неприятный запах изо рта.",
		},
		{
			title: "Меняются молочные зубы",
			description:
				"Зубы начинают шататься, появляются первые постоянные зубы или есть вопросы по&nbsp;их&nbsp;прорезыванию.",
		},
		{
			title: "Есть вопросы по&nbsp;прикусу",
			description:
				"Родителей беспокоит положение зубов, смыкание челюстей или привычки ребёнка.",
		},
	],
};

export const FIRST_VISIT_SECTION_DATA: FirstVisitSectionProps = {
	sectionHeader: {
		title: "Первая встреча, после которой не&nbsp;страшно возвращаться",
		mockup:
			"/mock/pediatric-dental-consultation/first-visit/alexik-with-stick.webp",
	},
	cards: [
		{
			title: "Без давления",
			description:
				"Не&nbsp;торопим ребёнка и&nbsp;не&nbsp;заставляем делать&nbsp;то, к&nbsp;чему он&nbsp;пока не&nbsp;готов.",
			poster: {
				webp: {
					src: "/mock/pediatric-dental-consultation/first-visit/first-card.webp",
				},
			},
		},
		{
			title: "Всё понятно родителям",
			description:
				"Объясняем состояние зубов простым языком и&nbsp;рассказываем, что делать дальше.",
			poster: {
				webp: {
					src: "/mock/pediatric-dental-consultation/first-visit/second-card.webp",
				},
			},
		},
		{
			title: "Оцениваем ребёнка комплексно",
			description:
				"Смотрим не&nbsp;только на&nbsp;отдельный зуб, но&nbsp;и&nbsp;на&nbsp;состояние полости рта в&nbsp;целом.",
			poster: {
				webp: {
					src: "/mock/pediatric-dental-consultation/first-visit/third-card.webp",
				},
			},
		},
		{
			title: "Формируем план заранее",
			description:
				"Родители понимают, какое лечение или профилактика необходимы и&nbsp;в&nbsp;какой последовательности.",
			poster: {
				webp: {
					src: "/mock/pediatric-dental-consultation/first-visit/fourth-card.webp",
				},
			},
		},
	],
};
