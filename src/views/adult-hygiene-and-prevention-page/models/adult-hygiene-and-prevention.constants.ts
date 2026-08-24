import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import {
	APPOINTMENT_ID,
	COSTS_OF_SERVICES_BUTTON,
	GLOBAL_EMPLOYEES,
} from "@/shared/config/global-constants.constants";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { BrickworkSectionProps } from "@/widgets/brickwork-section/types/brickwork-section.types";
import type { CostOfServicesProps } from "@/widgets/cost-of-services/types/cost-of-services.types";
import type { DiagnosticProcessSectionProps } from "@/widgets/diagnostic-process-section/types/diagnostic-process-section.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleStickySectionProps } from "@/widgets/tilte-sticky-section/types/title-sticky-section.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";
import type { WhatServiceIncludesProps } from "@/widgets/what-service-includes/types/what-service-includes.types";
import type { WhyChooseUsProps } from "@/widgets/why-choose-us/types/why-choose-us.types";

export const MOCK_QUADRO_SECTION: QuadroSectionProps = {
	sectionHeader: {
		description:
			"Откройте для себя преимущества профессиональной гигиены в&nbsp;клинике &laquo;Алекса&raquo;",
		title: "Здоровые зубы&nbsp;&mdash; залог уверенности",
		card: {
			title: "Профессиональная гигиена всех видов",
			button: { title: "Записаться на прием", href: APPOINTMENT_ID.id },
		},
		poster: {
			webp: {
				src: "/mock/hygiene/quadro-desktop.webp",
			},
		},
	},
};

export const WHAT_SERVICE_INCLUDES: WhatServiceIncludesProps = {
	title: "Что включает услуга",
	cards: [
		{ title: "Обеспечение правильного ухода за&nbsp;имплантатами." },
		{
			title:
				"Улучшение состояния дёсен и&nbsp;предотвращение развития гингивита и&nbsp;пародонтита.",
		},
		{
			title:
				"Удаление налёта и&nbsp;зубного камня, снижающее риск кариеса и&nbsp;воспалительных заболеваний полости рта.",
		},
		{
			title: "Рекомендации по&nbsp;правильной гигиене полости рта.",
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
		button: { title: "Записаться на прием", href: APPOINTMENT_ID.id },
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
			button: COSTS_OF_SERVICES_BUTTON,
			price: 2_850,
		},
		{
			title:
				"Реминерализирующая терапия зубов для пациентов старше 10&nbsp;лет (в&nbsp;рамках курса)",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 2_550,
		},
		{
			title: "Бесплатная консультация стоматолога-гигиениста",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 0,
		},
		{
			title:
				"Профессиональное отбеливание зубов (профессиональная система ZOOM)",
			button: COSTS_OF_SERVICES_BUTTON,
			price: 30_250,
		},
		{
			title:
				"Профессиональное отбеливание зубов (профессиональная система Opalescence Boost&nbsp;PF)",
			price: 16_200,
			button: COSTS_OF_SERVICES_BUTTON,
		},
		{
			title:
				"Профессиональное отбеливание зубов (домашняя система Opalescence)",
			price: 13_000,
			button: COSTS_OF_SERVICES_BUTTON,
		},
	],
};

export const EMPLOYEES_SECTION: OurPeopleSectionProps = {
	title: "Врачи, оказывающие услугу",
	button: {
		title: "Смотреть всех специалистов",
		href: SITE_NAVIGATION.vrachi,
	},
	employees: [GLOBAL_EMPLOYEES.magomadgadgyeva, GLOBAL_EMPLOYEES.kornilov],
};

export const WHY_CHOOSE_US: WhyChooseUsProps = {
	sectionHeader: {
		title: "Почему профессиональную гигиену проходят именно у&nbsp;нас",
		description:
			"Профессиональная гигиена&nbsp;&mdash; это не&nbsp;только удаление налета и&nbsp;зубного камня. Мы&nbsp;учим правильно ухаживать за&nbsp;зубами дома, подбираем средства именно под вашу ситуацию и&nbsp;сопровождаем пациента, чтобы здоровье полости рта сохранялось на&nbsp;долгие годы.",
	},
	cards: [
		{
			icon: "/mock/why-choose-us/1-icon.svg",
			title: "Обучаем правильной технике чистки",
			description:
				"На&nbsp;приеме врач поставит правильную технику чистки, покажет движения щетки и&nbsp;научит эффективно ухаживать за&nbsp;зубами и&nbsp;деснами в&nbsp;домашних условиях.",
		},
		{
			icon: "/mock/why-choose-us/2-icon.svg",
			title: "Подбираем индивидуальный домашний уход",
			description:
				"Подберем щетку, пасту, ершики, ирригатор и&nbsp;другие средства именно для ваших зубов. Все необходимые средства можно приобрести сразу в&nbsp;клинике.",
		},
		{
			icon: "/mock/why-choose-us/3-icon.svg",
			title: "Контролируем результат",
			description:
				"На&nbsp;каждом профилактическом приеме врач оценивает качество домашней гигиены, показывает плохо очищаемые участки и&nbsp;&laquo;слепые зоны&raquo;, помогает скорректировать уход и&nbsp;отслеживает ваш прогресс.",
		},
	],
	mainSection: {
		title: "Причины выбрать именно нас",
		list: [
			"Не&nbsp;просто чистим зубы&nbsp;&mdash; обучаем правильному домашнему уходу",
			"Подбираем индивидуальный набор средств гигиены под ваши особенности",
			"Все рекомендованные средства можно приобрести сразу после приема",
			"Отслеживаем результат, показываем проблемные зоны и&nbsp;помогаем сохранить здоровье зубов и&nbsp;десен",
		],
		poster: {
			webp: {
				src: "/mock/why-choose-us/main.webp",
			},
		},
		button: {
			title: "Записаться на приём",
			href: APPOINTMENT_ID.id,
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
			title: "01. Осмотр и&nbsp;диагностика",
			description:
				"Врач оценивает состояние зубов и&nbsp;дёсен, проводит индикацию зубного налёта и&nbsp;определяет участки, которым требуется особое внимание.",
			poster: {
				webp: {
					src: "/mock/diagnostics/1-desktop.webp",
				},
			},
		},
		{
			title: "02. Подбор домашнего ухода и&nbsp;урок гигиены",
			description:
				"Подбираем средства ухода и&nbsp;показываем, как правильно пользоваться щёткой, ёршиками и&nbsp;нитью для здоровья зубов и&nbsp;дёсен.",
			poster: {
				webp: {
					src: "/mock/diagnostics/2-desktop.webp",
				},
			},
		},
		{
			title: "03. Профессиональная гигиена",
			description:
				"Проводим комплексную чистку зубов: удаляем налёт ультразвуком и&nbsp;AirFlow, очищаем и&nbsp;полируем зубы, затем укрепляем эмаль реминерализирующей терапией.",
			poster: {
				webp: {
					src: "/mock/diagnostics/3-desktop.webp",
				},
			},
		},
	],
};
