import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { SiteButtonProps } from "@/shared/types/button.types";
import type { CtaSectionProps } from "@/widgets/cta-section/types/cta-section.types";
import type { DescriptionSectionProps } from "@/widgets/description-section/types/description-section.types";
import type { FaqSectionProps } from "@/widgets/faq-section/types/faq-section.types";
import type { HealthForFamilyProps } from "@/widgets/health-for-family/types/health-for-family.types";
import type { HeroSliderSectionProps } from "@/widgets/hero-slider-section/types/hero-slider-section.types";
import type { OurWorkProps } from "@/widgets/our-work/types/our-work.types";
import type { ParentNewsSectionProps } from "@/widgets/parent-news-section/types/parent-news-section.types";
import type { ReviewsWidgetProps } from "@/widgets/reviews-widget/types/reviews-widget.types";
import type { StillQuestionProps } from "@/widgets/still-questions/types/still-questions.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";

export const MAKE_APPOINTMENT_BUTTON: SiteButtonProps = {
	title: "Записаться на прием",
	isOpenFeedbackModal: true,
};

export const HERO_SLIDES: HeroSliderSectionProps = {
	slides: [
		{
			title: "алекса",
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
			card: {
				title: "День улыбки 28&nbsp;ноября",
				content:
					"<p>Брекеты или элайнеры: диагностика 0&nbsp;₽ и&nbsp;подарки при записи</p>",
				button: MAKE_APPOINTMENT_BUTTON,
			},
			poster: {
				webp: {
					src: "/mock/home/hero-slider/smile-day.webp",
				},
			},
		},
		{
			title: "алекса",
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
			card: {
				title: "Четверг заботы",
				content:
					"<p>Тарасова Ярослава Игоревна, детский прием с&nbsp;особой атмосферой для каждого ребёнка. Каждый четверг&nbsp;&minus;10% на&nbsp;любую услугу</p>",
				button: MAKE_APPOINTMENT_BUTTON,
			},
			poster: {
				webp: {
					src: "/mock/home/hero-slider/tarasova-hero.webp",
					mobile: "/mock/home/hero-slider/tarasova-hero-mobile.webp",
				},
			},
		},
		{
			title: "алекса",
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
			card: {
				title: "Комплексные программы гигиены",
				content: "<p>Выгодная цена при покупке пакета на&nbsp;год</p>",
				button: MAKE_APPOINTMENT_BUTTON,
			},
			poster: {
				webp: {
					src: "/mock/home/hero-slider/programs-hero.webp",
				},
			},
		},
		// {
		// 	title: "алекса",
		// 	card: {
		// 		title: "Никакого напряжения и&nbsp;тревоги",
		// 		content: "<p>Имплантация во&nbsp;сне под контролем врачей</p>",
		// 		button: MAKE_APPOINTMENT_BUTTON,
		// 	},
		// 	poster: {
		// 		webp: {
		// 			src: "/mock/home/hero-slider/first.webp",
		// 		},
		// 		avif: {
		// 			src: "/mock/home/hero-slider/first.avif",
		// 		},
		// 	},
		// 	legend:
		// 		"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей",
		// 	subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
		// },
		{
			textTheme: "light",
			title: "алекса",
			card: {
				title: "Лечение во&nbsp;сне. Без боли и&nbsp;страха",
				content:
					"<p>Для тревожных малышей и&nbsp;взрослых, которым нужен бережный подход.</p><br /><p>до&nbsp;1&nbsp;часа&nbsp;&mdash; <b>15&nbsp;100&nbsp;₽</b></p><p>до&nbsp;2&nbsp;часов&nbsp;&mdash; <b>19&nbsp;400&nbsp;₽</b></p><br /><p>Проснётесь с&nbsp;красивой улыбкой и&nbsp;без воспоминаний о&nbsp;лечении</p>",
				button: MAKE_APPOINTMENT_BUTTON,
			},
			poster: {
				webp: {
					src: "/mock/home/hero-slider/3-banner-desktop.webp",
				},
			},
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
		},
		{
			textTheme: "light",
			title: "алекса",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей",
			poster: {
				webp: {
					src: "/mock/home/hero-slider/2-banner-desktop.webp",
				},
			},
			card: {
				title:
					"Программа лояльности для детей из&nbsp;многодетных семей и&nbsp;детей с&nbsp;особенностями",
				content:
					"<ul><li>Скидка&nbsp;10% на&nbsp;терапевтическое лечение</li><li>Скидка&nbsp;5% на&nbsp;лечение во&nbsp;сне</li></ul>",
				button: MAKE_APPOINTMENT_BUTTON,
			},
		},
		{
			title: "алекса",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей",
			poster: {
				webp: {
					src: "/mock/home/hero-slider/4-banner-desktop.webp",
				},
			},
			card: {
				title: "Разные системы&nbsp;&mdash; один точный результат",
				content:
					"<p>Брекеты или элайнеры&nbsp;&mdash; выбираем путь, который будет эффективнее в&nbsp;вашем случае</p>",
				button: MAKE_APPOINTMENT_BUTTON,
			},
		},
		// {
		// 	title: "алекса",
		// 	subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
		// 	legend:
		// 		"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей",
		// 	poster: {
		// 		webp: {
		// 			src: "/mock/home/hero-slider/5-banner-desktop.webp",
		// 		},
		// 	},
		// 	card: {
		// 		title: "Лечение десен начинается с&nbsp;точной диагностики!",
		// 		content:
		// 			"<p>Бесплатное исследование на&nbsp;системе Florida Probe для тех, у&nbsp;кого кровоточат или воспалены десны. Выявим проблему на&nbsp;ранней стадии</p>",
		// 		button: MAKE_APPOINTMENT_BUTTON,
		// 	},
		// },
		{
			title: "алекса",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей",
			poster: {
				webp: {
					src: "/mock/home/hero-slider/6-banner-desktop.webp",
				},
			},
			card: {
				title: "Бонусная система. Ваше лечение возвращается теперь подарками!",
				content:
					"<p>Мы&nbsp;ценим ваше решение доверить нам здоровье вашей улыбки.</p><p>Поэтому теперь за&nbsp;каждый комплексный план лечения мы&nbsp;дарим подарки, которые сделают вашу заботу о&nbsp;себе еще приятнее</p>",
				button: MAKE_APPOINTMENT_BUTTON,
			},
		},
	],
};

export const CTA_MOCK: CtaSectionProps = {
	poster: {
		webp: {
			src: "/mock/home/cta/first-desktop.webp",
		},
	},
	title: "Кураторы рядом на&nbsp;каждом этапе лечения",
	content:
		"<p>Мы&nbsp;понимаем, что лечение это всегда волнение и&nbsp;множество вопросов</p><p>Поэтому вас сопровождает персональный куратор: подскажет вам, напомнит о&nbsp;приёме, поможет с&nbsp;организацией и&nbsp;всегда будет на&nbsp;связи</p>",
	description: {
		text: "Мы&nbsp;рядом, чтобы лечение проходило спокойно, понятно и&nbsp;без лишнего стресса",
		icon: "/icons/mini-logo.svg",
	},
};

export const DESCRIPTION_SECTION: DescriptionSectionProps = {
	title: "Улыбка. Забота. Комфорт.<br /> Все в&nbsp;одном месте",
	description: "Более 10&nbsp000 человек стали нашими постоянными пациентами",
};

export const FIRST_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	title: "Наши преимущества",
	textBlock: {
		title: "Современное оборудование",
		description:
			"Компьютерная томограмма и&nbsp;рентген, терапия, лечение зубов с&nbsp;микроскопом, гигиена, удаление зубов, имплантация и&nbsp;протезирование, исправление прикуса с&nbsp;применением самого современного оборудования, инновационных материалов и&nbsp;самых передовых протоколов лечения&nbsp;&mdash; залог здоровья наших пациентов!",
	},
	posters: [
		{
			webp: {
				src: "/mock/home/first-slider/first-slide-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/first-slider/second-slide-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/first-slider/third-slide-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/first-slider/fourth-slide-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/first-slider/fifth-slide-desktop.webp",
			},
		},
	],
};

export const SECOND_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Для самых маленьких",
		description:
			"Красивые кабинеты, оборудованные по&nbsp;самым современным медицинским стандартам, игровая зона с&nbsp;игрушками, книгами и&nbsp;раскрасками, сундучок с&nbsp;чудесными подарками&nbsp;&mdash; мы&nbsp;приложили все усилия, чтобы нашим маленьким пациентам и&nbsp;их&nbsp;родителям было уютно, комфортно и&nbsp;спокойно.",
	},
	posters: [
		{
			webp: {
				src: "/mock/home/second-slider/first-slide-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/second-slide-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/third-slide-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/fourth-slide-desktop.webp",
			},
		},
		{
			webp: {
				src: "/mock/home/second-slider/fifth-slide-desktop.webp",
			},
		},
	],
};

export const THIRD_TITLE_DESCRIPTION_SLIDER: TitleDescriptionSliderProps = {
	textBlock: {
		title: "Команда профессионалов:",
		description:
			"13&nbsp;докторов с&nbsp;многолетним опытом нашей клиники в&nbsp;ответе за&nbsp;здоровье ваших зубов.",
	},
	posters: [
		{
			webp: {
				src: "/mock/home/third-slider/first-team.webp",
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

export const HEALTH_FOR_FAMILY: HealthForFamilyProps = {
	tabsBlock: {
		title: "Здоровье для всей семьи!",
		tabs: [
			{
				title: "Стоматология для взрослых",
				slug: "stomatologiya-dlya-semi",
				icon: "/mock/home/health-for-family/first-icon.webp",
			},
			{
				title: "Стоматология для детей",
				slug: "stomatologiya-dlya-detey",
				icon: "/mock/home/health-for-family/second-icon.webp",
			},
		],
	},
	tabsContent: {
		"stomatologiya-dlya-semi": {
			type: "factoid",
			cards: [
				{
					title: "Диагностика и&nbsp;Консультация",
					description:
						"Осмотр, при необходимости&nbsp;&mdash; рентген или&nbsp;КТ, и&nbsp;понятный план лечения с&nbsp;ценами до&nbsp;начала процедур.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices[
							"konsultaciya-stomatologa"
						],
					},
				},
				{
					title: "Гигиена и&nbsp;профилактика",
					description:
						"Профессиональная чистка, удаление налёта и&nbsp;камня, уход при брекетах. Помогает предотвратить кариес и&nbsp;воспаление десен и&nbsp;сохранить результат лечения.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices[
							"gigiena-i-profilaktika-vz"
						],
					},
				},
				{
					title: "Хирургия и&nbsp;имплантация",
					description:
						"Удаление сложных зубов, в&nbsp;том числе восьмёрок, имплантация и&nbsp;костная пластика. Перед операцией врач проводит диагностику и&nbsp;объясняет каждый этап.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices[
							"hirurgiya-i-implantaciya"
						],
					},
				},
				{
					title: "Ортодонтия",
					description:
						"Брекеты, элайнеры и&nbsp;ортодонтические аппараты для исправления прикуса и&nbsp;положения зубов. Систему подбираем под ваш случай, в&nbsp;том числе перед имплантацией и&nbsp;протезированием.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices["ortodontiya"],
					},
				},
				{
					title: "Лечение &laquo;во&nbsp;сне&raquo;",
					description:
						"Лечение под наркозом с&nbsp;контролем анестезиолога. Подходит тем, кто сильно боится стоматолога или нуждается в&nbsp;объёмном лечении. Перед процедурой врач оценивает показания и&nbsp;противопоказания.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices["lechenie-vo-sne-vz"],
					},
				},
				{
					title: "Терапия",
					description:
						"Лечение кариеса, восстановление зубов пломбами и&nbsp;лечение корневых каналов. Начинаем с&nbsp;диагностики и&nbsp;объясняем, что нужно сделать и&nbsp;в&nbsp;каком порядке.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices["terapiya-vz"],
					},
				},
				{
					title: "Ортопедия",
					description:
						"Коронки, мосты, протезы и&nbsp;виниры, которые восстанавливают жевание, речь и&nbsp;внешний вид улыбки.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices["ortopediya-vz"],
					},
				},
				{
					title: "Пародонтология",
					description:
						"Лечение воспаления и&nbsp;кровоточивости десен. Исследование на&nbsp;Florida Probe поможет выявить проблему на&nbsp;ранней стадии.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices["parodontologiya"],
					},
				},
				{
					title: "Гнатология",
					description:
						"Диагностика и&nbsp;лечение височно-нижнечелюстного сустава: щелчки и&nbsp;боль в&nbsp;челюсти, головные боли, стирание зубов.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices["gnatologiya"],
					},
				},
			],
		},
		"stomatologiya-dlya-detey": {
			type: "factoid",
			cards: [
				{
					title: "Консультация детского стоматолога",
					description:
						"Осмотр ребёнка, оценка прикуса и&nbsp;состояния зубов, рекомендации по&nbsp;уходу. Первый визит помогает познакомиться с&nbsp;врачом и&nbsp;кабинетом без спешки.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices[
							"konsultaciya-detskogo-stomatologa"
						],
					},
				},
				{
					title: "Гигиена и&nbsp;профилактика",
					description:
						"Профессиональная чистка, фторирование и&nbsp;обучение правильной чистке зубов. Помогает предотвратить кариес и&nbsp;сохранить здоровье зубов с&nbsp;молочного возраста.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices[
							"gigiena-i-profilaktika"
						],
					},
				},
				{
					title: "Терапия",
					description:
						"Лечение кариеса и&nbsp;восстановление молочных и&nbsp;постоянных зубов. Врач объясняет ребёнку происходящее простыми словами.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices["detskaya-terapiya"],
					},
				},
				{
					title: "Хирургия",
					description:
						"Удаление молочных зубов и&nbsp;другие вмешательства, которые требуются детям. Перед процедурой врач оценивает показания и&nbsp;объясняет родителям, что будет происходить.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices["detskaya-hirurgiya"],
					},
				},
				{
					title: "Лечение &laquo;во&nbsp;сне&raquo;",
					description:
						"Лечение под наркозом для детей с&nbsp;сильным страхом или при объёмном лечении. Проводится по&nbsp;показаниям, с&nbsp;контролем анестезиолога и&nbsp;согласием родителей. Перед процедурой врач рассказывает, как подготовиться.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices["lechenie-vo-sne"],
					},
				},
				{
					title: "Ортодонтия",
					description:
						"Раннее исправление прикуса и&nbsp;положения зубов. Если нужно, врач подберёт систему лечения и&nbsp;объяснит, когда стоит начинать.",
					button: {
						href: SITE_NAVIGATION.landyshevayaServices.ortodontiya,
					},
				},
			],
		},
	},
};

export const MOCK_FAQ_SECTION: FaqSectionProps = {
	title: "Часто задаваемые вопросы",
	cards: [
		{
			question: "Как долго держатся пломбы?",
			answer:
				"<p>Пломбы, установленные профессионально и&nbsp;из&nbsp;качественных материалов, обычно служат от&nbsp;5&nbsp;до&nbsp;15&nbsp;лет. Долговечность зависит от&nbsp;типа пломбы (композитные, керамические, амальгамные и&nbsp;т.д.), расположения зуба, ухода за&nbsp;зубами и&nbsp;регулярных профилактических осмотров. Важно помнить, что даже самая долговечная пломба со&nbsp;временем может изнашиваться из-за жевательной нагрузки и&nbsp;воздействия кислот из&nbsp;пищи. Регулярные визиты к&nbsp;стоматологу помогут вовремя выявить износ или трещины на&nbsp;пломбе и&nbsp;предотвратить развитие кариеса под ней.</p>",
		},
		{
			question: "Как правильно поддерживать гигиену с&nbsp;брекетами?",
			answer:
				"<p>Поддержание гигиены полости рта с&nbsp;брекетами требует тщательности. Рекомендуется чистить зубы после каждого приема пищи, используя мягкую зубную щетку и&nbsp;специальный ортодонтический ёршик для очищения пространства между дугами и&nbsp;зубами. Флосс с&nbsp;жестким концом или ирригатор также помогут удалить остатки пищи и&nbsp;предотвратить скопление налета вокруг замков. Ополаскиватель для рта с&nbsp;антисептиком может быть полезен для снижения риска воспаления десен. Регулярные профессиональные чистки у&nbsp;стоматолога помогут сохранить здоровье зубов и&nbsp;десен на&nbsp;время ортодонтического лечения.</p>",
		},
		{
			question: "Когда надо 100% удалять зуб?",
			answer:
				"<p>Зуб подлежит удалению, если он&nbsp;сильно разрушен и&nbsp;не&nbsp;подлежит восстановлению, что может произойти из-за глубокого кариеса, сложных переломов или обширных воспалений корней. Другие причины включают хронические инфекции, угрожающие здоровью окружающих зубов и&nbsp;тканей, и&nbsp;неправильное расположение зуба (например, полностью горизонтально растущие &laquo;восьмерки&raquo;). Врач назначает удаление после тщательной диагностики, если нет возможности сохранить зуб другими методами, такими как реставрация, лечение корневых каналов или установка коронки.</p>",
		},
		{
			question: "Будет&nbsp;ли больно?",
			answer:
				"<p>1. Анестезия</p><br /><p>Для большинства стоматологических процедур мы&nbsp;используем местную анестезию. Это позволяет блокировать болевые ощущения в&nbsp;области, где проводится лечение. Вы&nbsp;будете чувствовать только легкое покалывание при введении анестетика, а&nbsp;затем область, которая обрабатывается, станет нечувствительной. Это значит, что вы&nbsp;не&nbsp;будете испытывать боль во&nbsp;время процедуры.</p><br /><br /><p>2. Седация </p><br /><br /><p>Если вы&nbsp;чувствуете сильное волнение или страх перед стоматологическим лечением, мы&nbsp;также предлагаем седацию. Это метод, который помогает расслабить пациента и&nbsp;снизить уровень тревожности. Вы&nbsp;будете в&nbsp;состоянии легкой сонливости и&nbsp;сможете спокойно перенести процедуру.</p><br/><br/><p>3. Лечение &laquo;во&nbsp;сне&raquo;</p><br /><br /><p>Для тех, кто испытывает серьезный страх или имеет особые медицинские показания, мы&nbsp;предлагаем лечение &laquo;во&nbsp;сне&raquo;. Пациент находится в&nbsp;состоянии наркоза. Вы&nbsp;не&nbsp;будете помнить о&nbsp;процедуре и&nbsp;не&nbsp;почувствуете боли. Это идеальный вариант для сложных процедур или для пациентов, которые не&nbsp;могут расслабиться даже с&nbsp;обычной седацией.</p>",
		},
		{
			question: "Как часто посещать стоматолога?",
			answer:
				"<p>Рекомендуется проходить профилактический осмотр у&nbsp;стоматолога каждые 6&nbsp;месяцев. Это позволяет вовремя выявить любые проблемы на&nbsp;ранней стадии, предотвратив развитие кариеса и&nbsp;заболеваний десен. Людям с&nbsp;ортодонтическими конструкциями, пломбами или коронками иногда требуется более частый контроль для предотвращения осложнений. Пациентам с&nbsp;хроническими заболеваниями, влияющими на&nbsp;здоровье десен и&nbsp;зубов, такими как диабет, также стоит обсудить с&nbsp;врачом оптимальную частоту визитов. Детям рекомендуется посещать стоматолога не&nbsp;реже 3-4 раз в&nbsp;год.</p>",
		},
		{
			question: "Причины повышенной чувствительности зубов?",
			answer:
				"<p>Повышенная чувствительность может возникать из-за истончения эмали, обнажения зубных корней, частого употребления кислых продуктов, чрезмерного отбеливания, скрежета зубами (бруксизма) или воспаления десен. Такие симптомы также могут возникнуть после профессиональной чистки или пломбирования зубов. Рекомендуется обсудить чувствительность с&nbsp;врачом, чтобы выявить точную причину и&nbsp;подобрать эффективные средства для ее&nbsp;снижения, такие как зубная паста для чувствительных зубов, фторсодержащие гели или терапия десен, если она необходима.</p>",
		},
	],
};

export const STILL_QUESTIONS: StillQuestionProps = {
	title: "Остались вопросы?",
	description:
		"Оставьте заявку. Администратор уточнит детали и&nbsp;запишет вас на&nbsp;удобное время, а&nbsp;куратор проконсультирует по&nbsp;всем нюансам и&nbsp;будет сопровождать вас на&nbsp;каждом этапе.",
	poster: {
		webp: {
			src: "/mock/home/still-questions/still-questions-alt.webp",
		},
	},
	button: { title: "Оставить заявку", isOpenConsultationModal: true },
};

export const PARENT_NEWS_SECTION_MOCK: ParentNewsSectionProps = {
	title: "Кратко о&nbsp;важном в&nbsp;нашем&nbsp;блоге",
};

export const OUR_WORK: OurWorkProps = {
	title: "Наша работа в&nbsp;кадрах",
	posters: [
		{
			size: "standart",
			poster: {
				webp: {
					src: "/mock/our-work/1-desktop.webp",
				},
			},
		},
		{
			size: "standart",
			poster: {
				webp: {
					src: "/mock/our-work/2-desktop.webp",
				},
			},
		},
		{
			size: "big",
			poster: {
				webp: {
					src: "/mock/our-work/our-work-3.webp",
				},
			},
		},
		{
			size: "standart",
			poster: {
				webp: {
					src: "/mock/our-work/our-work-4.webp",
				},
			},
		},
		{
			size: "standart",
			poster: {
				webp: { src: "/mock/our-work/our-work-5.webp" },
			},
		},
		{
			size: "standart",
			poster: {
				webp: { src: "/mock/our-work/our-work-6.webp" },
			},
		},
		{
			size: "standart",
			poster: {
				webp: { src: "/mock/our-work/7-desktop.webp" },
			},
		},
		{
			size: "big",
			poster: {
				webp: { src: "/mock/our-work/our-work-8.webp" },
			},
		},
		{
			size: "big",
			poster: {
				webp: { src: "/mock/our-work/our-work-9.webp" },
			},
		},
		{
			size: "standart",
			poster: {
				webp: { src: "/mock/our-work/our-work-10.webp" },
			},
		},
		{
			size: "big",
			poster: {
				webp: { src: "/mock/our-work/our-work-11.webp" },
			},
		},
		{
			size: "standart",
			poster: {
				webp: { src: "/mock/our-work/our-work-12.webp" },
			},
		},
		{
			size: "big",
			poster: {
				webp: { src: "/mock/our-work/our-work-13.webp" },
			},
		},
		{
			size: "standart",
			poster: {
				webp: { src: "/mock/our-work/our-work-14.webp" },
			},
		},
		undefined,
		{
			size: "big",
			poster: {
				webp: {
					src: "/mock/our-work/our-work-16.webp",
				},
			},
		},
		undefined,
		{
			size: "big",
			poster: {
				webp: {
					src: "/mock/our-work/our-work-15.webp",
				},
			},
		},
	],
};

export const REVIEWS_WIDGET: ReviewsWidgetProps = {
	title: "Пациенты о нас",
};
