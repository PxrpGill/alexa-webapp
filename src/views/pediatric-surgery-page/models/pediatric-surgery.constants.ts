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
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { RecommendsForChildrenProps } from "@/widgets/recommends-for-children/types/recommends-for-children.types";

export const HERO_DATA: HeroProps = {
	title:
		"Бережно решаем хирургические проблемы&nbsp;&mdash; для&nbsp;здорового роста и&nbsp;улыбки",
	description:
		"Проводим хирургическое лечение у&nbsp;детей с&nbsp;учётом возраста, особенностей развития и&nbsp;индивидуальной ситуации.",
	button: {
		title: "Записать ребёнка на приём",
		href: APPOINTMENT_ID.id,
	},
	poster: {
		webp: {
			src: "/mock/pediatric-surgery/hero.webp",
		},
	},
};

export const CHILD_WHAT_INCLUDES_SERVICES: ChildWhatIncludesServicesProps = {
	sectionHeader: {
		title: "Что включает детская хирургия",
		description:
			"Перед процедурой врач оценивает состояние ребёнка и&nbsp;определяет, действительно&nbsp;ли необходимо хирургическое вмешательство.",
	},
	cards: [
		{
			title: "Осмотр",
			description:
				"Врач оценивает состояние зубов, дёсен, слизистой и&nbsp;тканей полости рта.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/first.webp",
				},
			},
		},
		{
			title: "Диагностика",
			description:
				"При необходимости назначаем дополнительное исследование, чтобы уточнить особенности ситуации.",
			cardType: "vertical-alexik",
			poster: {
				original: {
					src: "/mock/pediatric-surgery/what-includes-services/happy-alexik.png",
				},
			},
		},
		{
			title: "Планирование",
			description:
				"Определяем оптимальный способ лечения с&nbsp;учётом возраста и&nbsp;состояния ребёнка.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/third.webp",
				},
			},
		},
		{
			title: "Хирургическое лечение",
			description:
				"Проводим необходимую процедуру бережно и&nbsp;под местной анестезией.",
			poster: {
				webp: {
					src: "/mock/pediatric-surgery/what-includes-services/fourth.webp",
				},
			},
		},
		{
			title: "Рекомендации",
			description:
				"После процедуры врач объясняет родителям, как ухаживать за&nbsp;областью вмешательства и&nbsp;на&nbsp;что обратить внимание.",
			cardType: "horizontal-alexik",
			poster: {
				original: {
					src: "/mock/pediatric-surgery/what-includes-services/alexik-with-heart.png",
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
		GLOBAL_EMPLOYEES.nikitin,
		GLOBAL_EMPLOYEES.shahnazaryan,
		GLOBAL_EMPLOYEES.tarasova,
	],
};

export const COST_OF_SERVICES: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		{
			title: "Консультация хирурга (первичная)",
			description:
				"<p>Осмотр полости рта, оценка ситуации и&nbsp;необходимости хирургического вмешательства, разбор снимков и&nbsp;составление плана лечения.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 1_500,
		},
		{
			title: "Снятие острой боли",
			description:
				"<p>Приём вне&nbsp;очереди при боли, отёке или травме: обезболивание, осмотр, неотложная помощь и&nbsp;рекомендации по&nbsp;дальнейшему лечению.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 3_500,
		},
		{
			title: "Удаление молочного зуба (физиологическая смена)",
			description:
				"<p>Обезболивание, удаление подвижного молочного зуба, остановка кровотечения и&nbsp;рекомендации по&nbsp;уходу после процедуры.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 2_400,
		},
		{
			title: "Удаление молочного зуба при периодонтите",
			description:
				"<p>Обезболивание, удаление разрушенного зуба с&nbsp;воспалением у&nbsp;корня, очищение лунки, остановка кровотечения и&nbsp;рекомендации по&nbsp;уходу.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_600,
		},
		{
			title: "Лечение перикоронарита",
			description:
				"<p>Помощь при воспалении тканей вокруг прорезывающегося зуба: обезболивание, обработка области, снятие отёка и&nbsp;назначение лечения.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 3_000,
		},
		{
			title: "Пластика уздечки языка (лазер)",
			description:
				"<p>Коррекция короткой уздечки языка лазером&nbsp;&mdash; без разрезов и&nbsp;швов, с&nbsp;минимальным кровотечением и&nbsp;быстрым заживлением.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 6_000,
		},
		{
			title: "Пластика уздечки верхней губы (лазер)",
			description:
				"<p>Коррекция уздечки верхней губы лазером, когда она влияет на&nbsp;положение зубов, прикус или гигиену.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 6_000,
		},
		{
			title: "Пластика уздечки нижней губы (лазер)",
			description:
				"<p>Коррекция уздечки нижней губы лазером для снятия натяжения тканей и&nbsp;защиты десны от&nbsp;рецессии.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 6_000,
		},
		{
			title: "Обнажение ретинированного зуба (лазер)",
			description:
				"<p>Освобождение постоянного зуба, которому мешают прорезаться мягкие ткани&nbsp;&mdash; в&nbsp;том числе для последующего ортодонтического лечения.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 8_500,
		},
		{
			title: "Вскрытие и&nbsp;дренирование абсцесса (лазер)",
			description:
				"<p>Обезболивание, вскрытие гнойного очага лазером, дренирование, антисептическая обработка и&nbsp;назначение лечения.</p>",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 2_500,
		},
	],
};

export const RECOMMENDS_FOR_CHILDREN_DATA: RecommendsForChildrenProps = {
	sectionHeader: {
		title: "Когда ребёнку может понадобиться помощь хирурга?",
		description:
			"Хирургическое лечение требуется не&nbsp;только при острой боли. Иногда небольшое вмешательство помогает предотвратить более серьёзные проблемы в&nbsp;дальнейшем.",
		mockup: "/mock/pediatric-surgery/recommend-for-children/alexik-doctor.png",
	},
	cards: [
		{
			title: "Разрушенный молочный зуб",
			description:
				"Зуб невозможно восстановить консервативным лечением, и&nbsp;врач рекомендует удаление.",
		},
		{
			title: "Задержка прорезывания",
			description:
				"Постоянный зуб не&nbsp;может нормально прорезаться или его появлению мешают другие ткани или зубы.",
		},
		{
			title: "Сверхкомплектные зубы",
			description:
				"Обнаружены дополнительные зубы, которые могут мешать формированию правильного зубного ряда.",
		},
		{
			title: "Проблемы с&nbsp;уздечками",
			description:
				"Особенности уздечки губы или языка могут влиять на&nbsp;речь, прикус, движение языка или положение зубов.",
		},
		{
			title: "Воспаление и&nbsp;отёк",
			description:
				"Появились выраженная боль, отёк, припухлость или другие признаки воспаления.",
		},
		{
			title: "Травма зуба или мягких тканей",
			description:
				"Ребёнок получил травму зубов, губ, языка или других тканей полости рта.",
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
