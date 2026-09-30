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
	employees: [GLOBAL_EMPLOYEES.kornilov],
};

export const COST_OF_SERVICES: CostOfServicesProps = {
	title: "Стоимость услуг:",
	cards: [
		{
			title: "Профессиональная гигиена полости рта",
			description:
				"Профессиональная гигиена полости рта и&nbsp;зубов 1&nbsp;степени сложности медобработка, очищение зубов пастой, ультразвук, Airflow, финишная полировка, реминерализующая терапия, анестезия по&nbsp;необходимости, пакет стерильный, урок гигиены).",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 7_000,
		},
		{
			title: "Профессиональная гигиена полости рта",
			description:
				"Профессиональная гигиена полости рта и&nbsp;зубов 2&nbsp;степени сложности медобработка, очищение зубов пастой, ультразвук, Airflow, финишная полировка, реминерализующая терапия, анестезия по&nbsp;необходимости, пакет стерильный, урок гигиены).",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_800,
		},
		{
			title: "Профессиональная гигиена полости рта и&nbsp;зубов ORTHO",
			description:
				"Профессиональная гигиена полости рта и&nbsp;зубов ORTHO (медобработка, очищение зубов пастой, ультразвук, Airflow, финишная полировка, реминерализующая терапия, анестезия по&nbsp;необходимости, пакет стерильный, урок гигиены).",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 4_300,
		},
		{
			title:
				"Реминерализирующая терапия зубов для пациентов старше 10&nbsp;лет",
			description:
				"Насыщение эмали кальцием и&nbsp;фтором после профессиональной чистки: снижает чувствительность зубов и&nbsp;укрепляет их&nbsp;защиту от&nbsp;кариеса.",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 2_850,
		},
		{
			title:
				"Реминерализирующая терапия зубов для пациентов старше 10&nbsp;лет (в&nbsp;рамках курса)",
			description:
				"Стоимость одной процедуры при прохождении курса реминерализации&nbsp;&mdash; для стойкого укрепления эмали и&nbsp;закрепления результата.",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 2_550,
		},
		{
			title: "Бесплатная консультация стоматолога-гигиениста",
			description:
				"Осмотр полости рта, оценка качества домашнего ухода и&nbsp;подбор индивидуальных средств гигиены&nbsp;&mdash; без оплаты.",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 0,
		},
		{
			title:
				"Профессиональное отбеливание зубов (профессиональная система ZOOM)",
			description:
				"Кабинетное фотоотбеливание за&nbsp;один визит: защита дёсен, нанесение геля и&nbsp;активация лампой, финишная реминерализация эмали.",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 30_250,
		},
		{
			title:
				"Профессиональное отбеливание зубов (профессиональная система Opalescence Boost&nbsp;PF)",
			description:
				"Химическое отбеливание в&nbsp;клинике без использования лампы: бережно осветляет эмаль и&nbsp;содержит фтор и&nbsp;нитрат калия для снижения чувствительности.",
			price: 16_200,
			button: COSTS_OF_SERVICES_BUTTON,
		},
		{
			title:
				"Профессиональное отбеливание зубов (домашняя система Opalescence)",
			description:
				"Изготовление индивидуальных капп и&nbsp;выдача геля для отбеливания дома по&nbsp;схеме, назначенной врачом.",
			price: 13_000,
			button: COSTS_OF_SERVICES_BUTTON,
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
