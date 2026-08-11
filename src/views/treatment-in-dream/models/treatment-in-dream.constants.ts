import type { AppointmentSchedulingProps } from "@/features/appointment-scheduling-section/types/appointment-scheduling.types";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { InfoTabsProps } from "@/views/adult-orthodontics-page/types/info-tabs.types";
import type { OurPeopleSectionProps } from "@/widgets/our-people-section/types/our-people-section.types";
import type { QuadroSectionProps } from "@/widgets/quadro-section/types/quadro-section.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";
import type { WhyChooseUsProps } from "@/widgets/why-choose-us/types/why-choose-us.types";

export const QUADRO_SECTION_MOCK: QuadroSectionProps = {
	sectionHeader: {
		description: "Комфортное лечение даже в&nbsp;самых сложных случаях",
		title:
			"Лечение &laquo;во&nbsp;сне&raquo; просыпайтесь с&nbsp;идеальной улыбкой",
		card: {
			title: "Ваша здоровая улыбка начинается здесь!",
			buttonText: "Записаться на прием",
		},
		poster: {
			original: {
				src: "/mock/treatment-in-dream/treatment-in-dream-hero.jpg",
			},
		},
	},
};

export const INFO_TABS_MOCK: InfoTabsProps = {
	tabsBlock: {
		title: "Какой вариант лечения выбрать?",
		description:
			"В&nbsp;нашей клинике доступны два современных метода, которые помогают сделать лечение комфортным. Ознакомьтесь с&nbsp;их&nbsp;особенностями и&nbsp;выберите подходящий вариант вместе с&nbsp;врачом.",
		tabs: [
			{
				title: "Наркоз",
				slug: "narkoz",
			},
			{
				title: "Седация",
				slug: "sedaciya",
			},
		],
	},
	content: {
		narkoz: {
			whatIncludes: {
				title: "Что включает услуга",
				cards: [
					{
						title:
							"Обеспечиваем непревзойденный комфорт и&nbsp;безопасность для каждого пациента",
					},
					{
						title:
							"Наши методы позволяют избавиться от&nbsp;страха и&nbsp;тревог, гарантируя высококачественное и&nbsp;эффективное лечение в&nbsp;атмосфере полного спокойствия",
					},
				],
			},
			stickyTitle: {
				title: "Sevorane&nbsp;&mdash; лечение зубов без боли и&nbsp;страха",
				lastCard: {
					poster: {
						webp: {
							src: "/mock/sleepbased-treatment/title-sticky.webp",
						},
					},
					buttonText: "Записаться на приём",
				},
				cards: [
					{
						title: "Безопасность и&nbsp;мягкое воздействие:",
						description:
							"Этот наркоз, основанный на&nbsp;севофлуране, не&nbsp;имеет запаха и&nbsp;цвета, а&nbsp;также не&nbsp;вызывает раздражения дыхательных путей.",
					},
					{
						title: "Стабильность и&nbsp;контроль:",
						description:
							"&laquo;Севоран&raquo; обеспечивает стабильный уровень глубины наркоза, что позволяет врачам контролировать состояние ребенка на&nbsp;протяжении всей процедуры.",
					},
					{
						title: "Минимальное влияние на&nbsp;организм:",
						description:
							"&laquo;Севоран&raquo; имеет минимальное влияние на&nbsp;сердечно-сосудистую систему и&nbsp;не&nbsp;вступает в&nbsp;химические реакции с&nbsp;организмом.",
					},
					{
						title: "Отсутствие последствий:",
						description:
							"&laquo;Севоран&raquo; имеет низкую частоту негативных эффектов и&nbsp;подходит даже для самых чувствительных пациентов. Однако перед процедурой вас обязательно проконсультирует врач-специалист.",
					},
					{
						title: "Современное оборудование:",
						description:
							"Наша клиника оснащена наркозным аппаратом Datex-Ohmeda 9100c NXT, который гарантирует полный контроль всех жизненно важных функций во&nbsp;время процедуры, обеспечивая максимальную безопасность и&nbsp;комфорт для вашего ребёнка.",
					},
					{
						title: "Препарат &laquo;Дантролен&raquo;",
						description:
							"Пациентам с&nbsp;генетической предрасположенностью к&nbsp;гипертермии в&nbsp;нашей клинике применяют препарат &laquo;Дантролен&raquo;, который предотвращает тяжелое состояние пациента. Также важно помнить, что процедура проводится натощак, чтобы избежать возможных осложнений.&quot;",
					},
				],
			},
		},
		sedaciya: {},
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

export const OUR_PEOPLE_SECTION: OurPeopleSectionProps = {
	isSlider: true,
	title: "Врачи, оказывающие услугу",
	button: {
		title: "Смотреть всех специалистов",
		href: SITE_NAVIGATION.vrachi,
	},
	employees: [
		{
			poster: {
				webp: {
					src: "/mock/employees/employee-1.webp",
				},
			},
			fullname: "Давыдова Александра Викторовна",
			position: "Главный врач, врач-стоматолог-терапевт, эндодонтист",
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
					src: "/mock/employees/employee-9.webp",
				},
			},
			fullname: "Кравченко Павел Сергеевич",
			position: "Врач-ортодонт, гнатолог",
		},
		{
			poster: {
				webp: {
					src: "/mock/employees/employee-13.webp",
				},
			},
			fullname: "Корнилов Герман Валерьевич",
			position: "Врач-стоматолог-пародонтолог",
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
			href: "",
		},
	},
};
