import type { AdvantagesSectionProps } from "@/widgets/health-for-family/types/advantages-section.types";
import type { HealthForFamilyProps } from "@/widgets/health-for-family/types/health-for-family.types";
import type { FourthVariantProps } from "@/widgets/hero-slider-section/types/hero-slider-section.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";

export const FIRST_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Новые технологии",
		description:
			"Для составления плана лечения мы&nbsp;проводим полноценную диагностику: анализируем профессиональные фотографии зубов и&nbsp;лица, сканы зубных рядов и&nbsp;данные компьютерной томографии. Мы&nbsp;активно работаем высокоточными элайнерами Eurokappa и&nbsp;самыми современными самолигирующими брекетами Damon, благодаря чему уменьшаются сроки лечения.",
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
		title: "Общая стоимость лечения известна заранее",
		description:
			"Наш прайс построен по&nbsp;западной системе: пациент информирован об&nbsp;общей стоимости лечения, включающей в&nbsp;себя все манипуляции ортодонта от&nbsp;установки до&nbsp;снятия брекетов. Никаких скрытых платежей. Стоимость фиксируется до&nbsp;начала лечения и&nbsp;не&nbsp;меняется в&nbsp;его процессе.",
	},
	posters: [
		{
			webp: {
				src: "/mock/adult-orthopedics/second-slider/1-slide.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-4.webp",
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
		title: "Лечить детей&nbsp;&mdash; наше призвание",
		description:
			"Наша клиника оснащена всем необходимым оборудованием и&nbsp;квалифицированными сотрудниками для лечения детей во&nbsp;сне и&nbsp;под седацией. Наши детские врачи могут найти общий язык даже с&nbsp;самым капризным малышом. При необходимости мы&nbsp;устанавливаем во&nbsp;сне и&nbsp;ортодонтические аппараты нашим маленьким пациента.",
	},
	posters: [
		{
			webp: {
				src: "/mock/home/second-slider/2-3.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-2.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/2-4.webp",
			},
		},
	],
};

export const FOURTH_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Комплексный подход",
		description:
			"У&nbsp;нас работают врачи всех стоматологических специальностей, между которыми налажено взаимодействие. Все клинические случаи обсуждаются на&nbsp;консилиуме. Для каждого пациента выстраивается полноценный маршрут прохождения специалистов, который координирует администратор.",
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

export const HERO_SECTION: Omit<FourthVariantProps, "type"> = {
	title: "алекса",
	subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
	legend:
		"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей.",
	poster: {
		original: {
			src: "/mock/home/hero-slider/slider-4.jpg",
		},
	},
	card: {
		title: "Разные системы&nbsp;&mdash; один точный результат",
		content:
			"<p>Брекеты или элайнеры&nbsp;&mdash; выбираем путь, который будет эффективнее в&nbsp;вашем случае</p>",
		buttonText: "Записаться на прием",
	},
};

export const HEALTH_FOR_FAMILY_MOCK: HealthForFamilyProps = {
	tabsBlock: {
		title: "Выберите подходящее решение для выравнивания зубов",
		description:
			"В&nbsp;нашей клинике доступны современные ортодонтические системы, которые помогут вам достичь идеальной улыбки с&nbsp;комфортом и&nbsp;эффективностью",
		tabs: [
			{
				title: "Брекеты Damon&nbsp;Q",
				slug: "braces-damon-q",
			},
			{
				title: "Элайнеры EUROKAPPA",
				slug: "eurokappa-eliners",
			},
			{
				title: "Элайнеры Spark",
				slug: "spark-eliners",
			},
		],
	},
	tabsContent: {
		"braces-damon-q": {
			type: "sliderAdvantages",
			slider: {
				textBlock: {
					title: "Брекеты Damon&nbsp;Q",
					description:
						"Современная самолигирующая система от&nbsp;американской компании Ormco, предназначенная для эффективной и&nbsp;комфортной коррекции прикуса у&nbsp;пациентов всех возрастов.​",
				},
				posters: [
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/1-1-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/1-2-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/1-3-slider.webp",
						},
					},
				],
			},
			advantagesSection: {
				title: "Преимущества",
				cards: [
					"Сокращение времени лечения на&nbsp;20&ndash;30% по&nbsp;сравнению с&nbsp;традиционными системами.",
					"Самолигирующий механизм SpinTek для свободного скольжения дуги и&nbsp;равномерного распределения нагрузки.",
					"Быстрая замена дуг и&nbsp;позиционирования брекетов.​",
					"Упрощённая гигиена полости рта благодаря отсутствию лигатур.",
					"Минимальный дискомфорт и&nbsp;быстрое привыкание.​",
					"Компактный размер и&nbsp;эстетичный внешний вид.",
				],
			},
			priceCards: {
				cards: [
					{
						title: "Керамические брекеты Damon&nbsp;Q",
						content:
							"<ul><li>Надежное и&nbsp;эффективное решение для коррекции прикуса.​</li><li>Прочные и&nbsp;долговечные, подходят для различных клинических случаев.​</li></ul><p><b>Цена</b>: от&nbsp;150&nbsp;000 ₽</p>",
						buttonText: "Консультация",
					},
					{
						title: "Металлические брекеты Damon&nbsp;Q",
						content:
							"<ul><li>Обеспечивают комфорт и&nbsp;незаметность при ношении.​​​</li><li>Эстетичный вариант с&nbsp;прозрачными или зубовидными брекетами.​​</li></ul><p><b>Цена</b>: от&nbsp;180&nbsp;000 ₽</p>",
						buttonText: "Консультация",
					},
				],
			},
			stepper: {
				title: "Пройдите 7&nbsp;шагов к&nbsp;идеальной улыбке",
				steps: [
					"Консультация ортодонта",
					"Диагностика",
					"Обсуждение плана лечения",
					"Чистка и&nbsp;лечение зубов (при необходимости)",
					"Повторное сканирование или снятие слепков",
					"Обсуждение 3D&nbsp;плана при лечении на&nbsp;элайнерах",
					"Фиксация элайнеров/брекет-системы и&nbsp;начало лечения",
				],
			},
		},
		"eurokappa-eliners": {
			type: "sliderAdvantages",
			slider: {
				textBlock: {
					title: "Элайнеры EUROKAPPA",
					description:
						"Прозрачные съёмные ортодонтические каппы, разработанные с&nbsp;использованием 3D-моделирования для точного и&nbsp;предсказуемого выравнивания зубов.​",
				},
				textBlockPosition: "right",
				posters: [
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/2-1-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/2-2-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/2-3-slider.webp",
						},
					},
				],
			},
			advantagesSection: {
				title: "Преимущества",
				cards: [
					"Предварительное 3D-планирование позволяет увидеть результат до&nbsp;начала лечения.",
					"Съёмные конструкции позволяют сохранять привычный образ жизни.​",
					"Гипоаллергенный материал безопасен для здоровья.​​",
					"Подходят для большинства случаев коррекции прикуса.​",
					"Незаметны при ношении, быстрое привыкание.​",
					"Быстрое изготовление и&nbsp;доставка.",
				],
			},
			stepper: {
				title: "Пройдите 7&nbsp;шагов к&nbsp;идеальной улыбке",
				steps: [
					"Консультация ортодонта",
					"Диагностика",
					"Обсуждение плана лечения",
					"Чистка и&nbsp;лечение зубов (при необходимости)",
					"Повторное сканирование или снятие слепков",
					"Обсуждение 3D&nbsp;плана при лечении на&nbsp;элайнерах",
					"Фиксация элайнеров/брекет-системы и&nbsp;начало лечения",
				],
				priceCards: [
					{
						title: "Элайнеры EUROKAPPA",
						content:
							"<ul><li>Индивидуально изготовленные каппы для комфортного и&nbsp;эффективного выравнивания зубов.​</li><li>Подходят для взрослых и&nbsp;подростков.​</li></ul><p><b>Цена:</b>от&nbsp;170&nbsp;000 ₽</p>",
						buttonText: "Консультация",
					},
				],
			},
		},
		"spark-eliners": {
			type: "sliderAdvantages",
			slider: {
				textBlock: {
					title: "Элайнеры Spark",
					description:
						"Прозрачные съёмные ортодонтические каппы, изготовленные из&nbsp;инновационного материала TruGEN&trade;. Почти невидимые элайнеры более прозрачны, комфортны и&nbsp;меньше окрашиваются, обеспечивают максимально эффективное и&nbsp;точное перемещения зубов.",
				},
				posters: [
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/3-1-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/3-2-slider.webp",
						},
					},
					{
						webp: {
							src: "/mock/adult-orthopedics/tabs-section/3-3-slider.webp",
						},
					},
				],
			},
			advantagesSection: {
				title: "Преимущества",
				cards: [
					"Предварительное 3D-планирование позволяет увидеть результат до&nbsp;начала лечения.",
					"Съёмные конструкции позволяют сохранять привычный образ жизни.​",
					"Гипоаллергенный материал безопасен для здоровья.​​",
					"Подходят для большинства случаев коррекции прикуса.​",
					"Незаметны при ношении, быстрое привыкание.​",
					"Быстрое изготовление и&nbsp;доставка.",
				],
			},
			stepper: {
				title: "Пройдите 7&nbsp;шагов к&nbsp;идеальной улыбке",
				steps: [
					"Консультация ортодонта",
					"Диагностика",
					"Обсуждение плана лечения",
					"Чистка и&nbsp;лечение зубов (при необходимости)",
					"Повторное сканирование или снятие слепков",
					"Обсуждение 3D&nbsp;плана при лечении на&nbsp;элайнерах",
					"Фиксация элайнеров/брекет-системы и&nbsp;начало лечения",
				],
				priceCards: [
					{
						title: "Элайнеры Spark",
						content:
							"<ul><li>Индивидуально изготовленные каппы для комфортного и&nbsp;эффективного выравнивания зубов.​​</li><li>Подходят для взрослых и&nbsp;подростков.​</li></ul><p><b>Цена:</b>от&nbsp;175&nbsp;000 ₽</p>",
						buttonText: "Консультация",
					},
				],
			},
		},
	},
};
