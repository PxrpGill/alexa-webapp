import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import {
	APPOINTMENT_ID,
	COSTS_OF_SERVICES_BUTTON,
	GLOBAL_EMPLOYEES,
} from "@/shared/config/global-constants.constants";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import { BeforeAfterSectionProps } from "@/widgets/before-after-section/types/before-after-section.types";
import type { CertificatesSectionProps } from "@/widgets/certificates-section/types/certificates-section.types";
import type { ChildWhatIncludesServicesProps } from "@/widgets/child-what-includes-services/types/child-what-includes-services.types";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { CtaHelpSectionProps } from "@/widgets/cta-help-section/types/cta-help-section.types";
import type { FirstVisitSectionProps } from "@/widgets/first-visit-section/types/first-visit-section.types";
import type { HeroProps } from "@/widgets/hero/types/hero.types";
import type { HowItWorksSliderProps } from "@/widgets/how-it-works-slider/types/how-it-works-slider.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { RecommendsForChildrenProps } from "@/widgets/recommends-for-children/types/recommends-for-children.types";

export const HERO_DATA: HeroProps = {
	title: "Лечим зубы во&nbsp;сне&nbsp;&mdash; без слёз, страха и&nbsp;уговоров",
	description:
		"Седация закисью азота или наркоз &laquo;Севоран&raquo; под контролем анестезиолога&#8209;реаниматолога: ребёнок спокоен, а&nbsp;все зубы лечим за&nbsp;один визит.",
	button: {
		title: "Записать ребёнка на приём",
		href: APPOINTMENT_ID.id,
	},
	poster: {
		webp: {
			src: "/mock/sleepbased-treatment/1-desktop.webp",
		},
		original: {
			src: "/mock/sleepbased-treatment/1-desktop.jpg",
		},
	},
};

export const CHILD_WHAT_INCLUDES_SERVICES: ChildWhatIncludesServicesProps = {
	sectionHeader: {
		title: "Что включает лечение во&nbsp;сне",
		description:
			"Лечение во&nbsp;сне&nbsp;&mdash; это не&nbsp;отдельная процедура, а&nbsp;способ обезболивания. Что именно подойдёт ребёнку, решает врач: седация закисью азота для первых визитов или наркоз, когда работы много, а&nbsp;малыш не&nbsp;готов сидеть в&nbsp;кресле.",
	},
	cards: [
		{
			title: "Осмотр и&nbsp;план лечения",
			description:
				"Детский стоматолог оценивает состояние зубов и&nbsp;объём работы и&nbsp;решает, нужен&nbsp;ли ребёнку сон или достаточно обычной анестезии.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/first.webp",
				},
			},
		},
		{
			title: "Приём анестезиолога",
			description:
				"Анестезиолог&#8209;реаниматолог осматривает ребёнка, расспрашивает о&nbsp;здоровье и&nbsp;аллергии, назначает анализы и&nbsp;подбирает препарат с&nbsp;дозировкой по&nbsp;весу.",
			cardType: "vertical-alexik",
			poster: {
				original: {
					src: "/mock/pediatric-surgery/what-includes-services/happy-alexik.png",
				},
			},
		},
		{
			title: "Седация закисью азота",
			description:
				"Ребёнок дышит смесью кислорода и&nbsp;закиси азота через маску: остаётся в&nbsp;сознании и&nbsp;общается с&nbsp;врачом, но&nbsp;не&nbsp;чувствует тревоги.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/third.webp",
				},
			},
		},
		{
			title: "Наркоз &laquo;Севоран&raquo;",
			description:
				"Ребёнок спит всю процедуру. Подходит, когда нужно вылечить сразу несколько зубов или малыш совсем не&nbsp;даёт себя осмотреть.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/fourth.webp",
				},
			},
		},
		{
			title: "Пробуждение и&nbsp;рекомендации",
			description:
				"Ребёнок просыпается в&nbsp;клинике под присмотром анестезиолога. Домой отпускаем, когда врач убедится, что всё в&nbsp;порядке, и&nbsp;объяснит родителям, как пройдёт остаток дня.",
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
		title: "Когда ребёнку подойдёт лечение во&nbsp;сне?",
		description:
			"Сон нужен не&nbsp;всем&nbsp;&mdash; решение принимает врач после осмотра. Но&nbsp;есть ситуации, в&nbsp;которых обычное лечение в&nbsp;кресле почти невозможно.",
		mockup: "/mock/pediatric-surgery/recommend-for-children/alexik-doctor.png",
	},
	cards: [
		{
			title: "Страх стоматолога",
			description:
				"Ребёнок плачет, закрывает рот и&nbsp;не&nbsp;даёт себя осмотреть, даже если ничего не&nbsp;болит.",
		},
		{
			title: "Много зубов за&nbsp;раз",
			description:
				"Лечить нужно сразу несколько зубов: во&nbsp;сне мы&nbsp;успеваем всё за&nbsp;один визит вместо пяти&ndash;шести приёмов.",
		},
		{
			title: "Совсем маленький возраст",
			description:
				"Малышу 1&ndash;3&nbsp;года, он&nbsp;ещё не&nbsp;понимает просьб врача и&nbsp;не&nbsp;может усидеть на&nbsp;месте.",
		},
		{
			title: "Неудачный первый опыт",
			description:
				"После болезненного лечения ребёнок отказывается заходить в&nbsp;кабинет и&nbsp;садиться в&nbsp;кресло.",
		},
		{
			title: "Особенности развития",
			description:
				"Ребёнку трудно переносить осмотр из&#8209;за&nbsp;особенностей развития или выраженного рвотного рефлекса&nbsp;&mdash; удерживать его силой нельзя.",
		},
		{
			title: "Острая боль и&nbsp;отёк",
			description:
				"Помощь нужна сейчас, а&nbsp;времени на&nbsp;уговоры и&nbsp;адаптационные визиты уже нет.",
		},
	],
};

export const HOW_IT_WORKS_SLIDER: Omit<HowItWorksSliderProps, "className"> = {
	title: "Как проходит лечение во&nbsp;сне?",
	slides: [
		{
			title: "Консультация стоматолога",
			description:
				"Врач осматривает полость рта, при необходимости делает снимки и&nbsp;считает объём лечения. Если работы много или ребёнок не&nbsp;даёт лечиться в&nbsp;кресле, стоматолог предлагает седацию или наркоз.",
			poster: {
				webp: {
					src: "/mock/hygiene-and-preventation/slider/1-slide.webp",
				},
			},
		},
		{
			title: "Осмотр анестезиолога и&nbsp;анализы",
			description:
				"Анестезиолог&#8209;реаниматолог расспрашивает о&nbsp;перенесённых болезнях, прививках и&nbsp;аллергии, назначает анализы и&nbsp;ЭКГ.<br /><br /> Без этого обследования лечение во&nbsp;сне мы&nbsp;не&nbsp;проводим.",
			poster: {
				webp: {
					src: "/mock/hygiene-and-preventation/slider/2-slide.webp",
				},
			},
		},
		{
			title: "Подготовка в&nbsp;день визита",
			description:
				"Приходим натощак&nbsp;&mdash; врач заранее расскажет, когда можно есть и&nbsp;пить. Ребёнок устраивается в&nbsp;кресле, смотрит мультики и&nbsp;примеряет маску: для него это просто игра.",
			poster: {
				webp: {
					src: "/mock/treatment-in-dream/stage-1.webp",
				},
				original: {
					src: "/mock/treatment-in-dream/stage-1.jpg",
				},
			},
		},
		{
			title: "Засыпание",
			description:
				"Через маску поступает кислород с&nbsp;закисью азота или севофлураном&nbsp;&mdash; концентрацию подбираем индивидуально. Укол и&nbsp;само лечение ребёнок не&nbsp;чувствует.",
			poster: {
				webp: {
					src: "/mock/treatment-in-dream/stage-2.webp",
				},
			},
		},
		{
			title: "Лечение",
			description:
				"Пока ребёнок спит, врач лечит все проблемные зубы за&nbsp;один раз. Анестезиолог всё время рядом и&nbsp;следит за&nbsp;пульсом, дыханием и&nbsp;насыщением крови кислородом.",
			poster: {
				webp: {
					src: "/mock/treatment-in-dream/stage-3.webp",
				},
			},
		},
		{
			title: "Пробуждение и&nbsp;контроль",
			description:
				"После седации ребёнок приходит в&nbsp;себя через 10&ndash;15 минут, после наркоза&nbsp;&mdash; немного дольше и&nbsp;под наблюдением.<br /><br /> На&nbsp;контрольном осмотре врач проверяет, как зажили зубы, и&nbsp;отвечает на&nbsp;вопросы родителей.",
			poster: {
				webp: {
					src: "/mock/hygiene-and-preventation/slider/6-slide.webp",
				},
			},
		},
	],
};

export const FIRST_VISIT_SECTION_DATA: FirstVisitSectionProps = {
	sectionHeader: {
		title: "Почему лечение во&nbsp;сне безопасно",
		mockup:
			"/mock/pediatric-dental-consultation/first-visit/alexik-with-stick.webp",
	},
	cards: [
		{
			title: "Препарат &laquo;Севоран&raquo;",
			description:
				"Наркоз на&nbsp;основе севофлурана: без цвета и&nbsp;запаха, не&nbsp;раздражает дыхательные пути, почти не&nbsp;влияет на&nbsp;сердце и&nbsp;подходит даже чувствительным пациентам.",
			poster: {
				webp: {
					src: "/mock/sleepbased-treatment/title-sticky.webp",
				},
				original: {
					src: "/mock/sleepbased-treatment/title-sticky.jpg",
				},
			},
		},
		{
			title: "Контроль каждую минуту",
			description:
				"Наркозный аппарат Datex&#8209;Ohmeda 9100c&nbsp;NXT показывает все жизненно важные показатели, а&nbsp;анестезиолог&#8209;реаниматолог не&nbsp;отходит от&nbsp;ребёнка до&nbsp;пробуждения.",
			poster: {
				webp: {
					src: "/mock/sleepbased-treatment/quadro-second.webp",
				},
			},
		},
		{
			title: "Только по&nbsp;показаниям",
			description:
				"Мы&nbsp;не&nbsp;назначаем сон без необходимости: сначала осмотр и&nbsp;анализы, а&nbsp;если ребёнок готов лечиться в&nbsp;кресле&nbsp;&mdash; адаптационный приём.",
			poster: {
				webp: {
					src: "/mock/hygiene-and-preventation/slider/4-slide.webp",
				},
			},
		},
		{
			title: "Один визит вместо шести",
			description:
				"Все зубы лечим за&nbsp;одно посещение&nbsp;&mdash; ребёнок не&nbsp;переживает стресс заново, а&nbsp;родителям не&nbsp;нужно отпрашиваться с&nbsp;работы каждую неделю.",
			poster: {
				webp: {
					src: "/mock/hygiene-and-preventation/slider/5-slide.webp",
				},
			},
		},
	],
};

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
	title: "Врачи, оказывающие услугу",
	button: {
		title: "Смотреть всех специалистов",
		href: SITE_NAVIGATION.vrachi,
	},
	employees: [
		GLOBAL_EMPLOYEES.zabaluev,
		GLOBAL_EMPLOYEES.nikitin,
		GLOBAL_EMPLOYEES.tarasova,
	],
};

export const COST_OF_SERVICES: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		{
			title: "Консультация анестезиолога&#8209;реаниматолога",
			description:
				"<p>Осмотр перед лечением во&nbsp;сне: врач собирает анамнез, оценивает состояние ребёнка, назначает анализы и&nbsp;выбирает способ обезболивания.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_500,
		},
		{
			title: "Пробная седация (закись азота)",
			description:
				"<p>Знакомство с&nbsp;маской и&nbsp;газом без лечения&nbsp;&mdash; смотрим, как ребёнок реагирует на&nbsp;седацию.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 2_950,
		},
		{
			title: "Лечение с&nbsp;седацией (закись азота), 30&nbsp;минут",
			description:
				"<p>Короткое вмешательство в&nbsp;расслабленном состоянии: ребёнок в&nbsp;сознании и&nbsp;не&nbsp;испытывает страха.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 2_950,
		},
		{
			title: "Лечение с&nbsp;седацией (закись азота), 1&nbsp;час",
			description:
				"<p>Полноценный приём под закисью азота&nbsp;&mdash; успеваем вылечить несколько зубов за&nbsp;один визит.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 5_900,
		},
		{
			title: "Адаптационный приём",
			description:
				"<p>Подготовка к&nbsp;лечению через игру: знакомство с&nbsp;кабинетом и&nbsp;инструментами, гигиена и&nbsp;при желании проба седации закисью азота.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 5_500,
		},
		{
			title: "Обследование под наркозом (&laquo;Севоран&raquo;), 30&nbsp;минут",
			description:
				"<p>Осмотр и&nbsp;снимки во&nbsp;сне, когда ребёнок не&nbsp;даёт заглянуть в&nbsp;рот&nbsp;&mdash; чтобы составить точный план лечения.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_300,
		},
		{
			title:
				"Лечение под наркозом (&laquo;Севоран&raquo;), до&nbsp;1&nbsp;часа",
			description:
				"<p>Ребёнок спит всю процедуру под контролем анестезиолога&#8209;реаниматолога.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 15_100,
		},
		{
			title:
				"Лечение под наркозом (&laquo;Севоран&raquo;), до&nbsp;2&nbsp;часов",
			description:
				"<p>Для объёмного лечения: за&nbsp;одно посещение приводим в&nbsp;порядок сразу несколько зубов.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 19_400,
		},
		{
			title:
				"Лечение под наркозом (&laquo;Севоран&raquo;), до&nbsp;3&nbsp;часов",
			description:
				"<p>Полная санация полости рта в&nbsp;один визит, когда зубов с&nbsp;кариесом много.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 22_600,
		},
		{
			title: "Лечение под наркозом (&laquo;Пропофол&raquo;), 1&#8209;й час",
			description:
				"<p>Внутривенный наркоз для подростков и&nbsp;взрослых пациентов&nbsp;&mdash; препарат подбирает анестезиолог.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 8_600,
		},
	],
};

export const CTA_HELP_SECTION: CtaHelpSectionProps = {
	title: "Рассрочка на&nbsp;лечение во&nbsp;сне",
	description:
		"Первоначальный взнос&nbsp;&mdash; 50%, остаток равными частями на&nbsp;6&nbsp;месяцев и&nbsp;без переплат. Условия расскажем на&nbsp;консультации.",
	button: {
		title: "Оставить заявку",
		isOpenConsultationModal: true,
	},
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

export const BEFORE_AFTER_SECTION: BeforeAfterSectionProps = {
	beforeAfterCard: {
		pairs: [
			{
				beforePoster: {
					webp: {
						src: "/before-after/nikitin-before-1-narkoz.webp",
					},
				},
				afterPoster: {
					webp: {
						src: "/before-after/nikitin-after-1-narkoz.webp",
					},
				},
				beforeAlt: "Улыбка пациента до лечения",
				afterAlt: "Улыбка пациента после лечения",
			},
		],
		beforeLabel: "До",
		afterLabel: "После",
	},
	descriptionCard: {
		title: "Как меняется улыбка ребёнка после&nbsp;лечения",
		description:
			"Потяните ползунок, чтобы сравнить снимки одного пациента до&nbsp;и&nbsp;после. Это работы наших врачей&nbsp;&mdash; публикуем их&nbsp;с&nbsp;согласия родителей.",
	},
};
