import type { CtaSectionProps } from "@/widgets/cta-section/types/cta-section.types";
import type { DescriptionSectionProps } from "@/widgets/description-section/types/description-section.types";
import type { FaqSectionProps } from "@/widgets/faq-section/types/faq-section.types";
import type { HealthForFamilyProps } from "@/widgets/health-for-family/types/health-for-family.types";
import type { HeroSliderSectionProps } from "@/widgets/hero-slider-section/types/hero-slider-section.types";
import type { OurWorkProps } from "@/widgets/our-work/types/our-work.types";
import type { ParentNewsSectionProps } from "@/widgets/parent-news-section/types/parent-news-section.types";
import type { StillQuestionProps } from "@/widgets/still-questions/types/still-questions.types";
import type { TitleDescriptionSliderProps } from "@/widgets/title-description-slider/types/title-description-slider.types";

export const HERO_SLIDES: HeroSliderSectionProps = {
	slides: [
		{
			title: "алекса",
			card: {
				title: "Никакого напряжения и&nbsp;тревоги",
				content: "<p>Имплантация во&nbsp;сне под контролем врачей</p>",
				buttonText: "Записаться на прием",
			},
			poster: {
				webp: {
					src: "/mock/home/hero-slider/1-desktop.webp",
				},
			},
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей.",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
		},
		{
			textTheme: "light",
			title: "алекса",
			card: {
				title: "Лечение во&nbsp;сне. Без боли и&nbsp;страха",
				content:
					"<p>Для тревожных малышей и&nbsp;взрослых, которым нужен бережный подход.</p><br /><p>до&nbsp;1&nbsp;часа&nbsp;&mdash; <b>15&nbsp;100&nbsp;₽</b></p><p>до&nbsp;2&nbsp;часов&nbsp;&mdash; <b>19&nbsp;400&nbsp;₽</b></p><br /><p>Проснётесь с&nbsp;красивой улыбкой и&nbsp;без воспоминаний о&nbsp;лечении</p>",
				buttonText: "Записаться на прием",
			},
			poster: {
				webp: {
					src: "/mock/home/hero-slider/3-desktop.webp",
					mobile: "/mock/home/hero-slider/3-mobile.webp",
				},
			},
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей.",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
		},
		{
			textTheme: "light",
			title: "алекса",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей.",
			poster: {
				webp: {
					src: "/mock/home/hero-slider/2-desktop.webp",
				},
			},
			card: {
				title:
					"Программа лояльности для детей из&nbsp;многодетных семей и&nbsp;детей с&nbsp;особенностями",
				content:
					"<ul><li>Скидка&nbsp;10% на&nbsp;терапевтическое лечение</li><li>Скидка&nbsp;5% на&nbsp;лечение во&nbsp;сне.</li></ul>",
				buttonText: "Записаться на прием",
			},
		},
		{
			title: "алекса",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей.",
			poster: {
				webp: {
					src: "/mock/home/hero-slider/4-desktop.webp",
				},
			},
			card: {
				title: "Разные системы&nbsp;&mdash; один точный результат",
				content:
					"<p>Брекеты или элайнеры&nbsp;&mdash; выбираем путь, который будет эффективнее в&nbsp;вашем случае</p>",
				buttonText: "Записаться на прием",
			},
		},
		{
			title: "алекса",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей.",
			poster: {
				webp: {
					src: "/mock/home/hero-slider/5-desktop.webp",
					mobile: "/mock/home/hero-slider/5-mobile.webp",
				},
			},
			card: {
				title: "Лечение десен начинается с&nbsp;точной диагностики!",
				content:
					"<p>Бесплатное исследование на&nbsp;системе Florida Probe для тех, у&nbsp;кого кровоточат или воспалены десны. Выявим проблему на&nbsp;ранней стадии.</p>",
				buttonText: "Записаться на прием",
			},
		},
		{
			title: "алекса",
			subtitle: "Семейная стоматологическая клиника в&nbsp;Ростове-на-Дону",
			legend:
				"<b>С&nbsp;2009 года</b> предоставляем весь спектр стоматологических услуг для взрослых и&nbsp;детей.",
			poster: {
				webp: {
					src: "/mock/home/hero-slider/6-desktop.webp",
				},
			},
			card: {
				title: "Бонусная система. Ваше лечение возвращается теперь подарками!",
				content:
					"<p>Мы&nbsp;ценим ваше решение доверить нам здоровье вашей улыбки.</p><p>Поэтому теперь за&nbsp;каждый комплексный план лечения мы&nbsp;дарим подарки, которые сделают вашу заботу о&nbsp;себе еще приятнее.</p>",
				buttonText: "Записаться на прием",
			},
		},
	],
};

export const CTA_MOCK: CtaSectionProps = {
	poster: {
		webp: {
			src: "/mock/home/cta/desktop.webp",
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
	description: "Более 9000 человек стали нашими постоянными пациентами",
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
						"Правильная диагностика&nbsp;&mdash; успех любого лечения!",
				},
				{
					title: "Гигиена и&nbsp;профилактика",
					description:
						"Для качественного лечения и&nbsp;долгосрочного результата практически перед всеми стоматологическими манипуляциями Вам может быть необходимо провести профессиональную гигиену полости рта.",
				},
				{
					title: "Хирургия и&nbsp;имплантация",
					description:
						"Хирургическая стоматология в&nbsp;нашей клинике&nbsp;&mdash; это разнообразные оперативные вмешательствах на&nbsp;мягких и&nbsp;твердых тканях ротовой полости.",
				},
				{
					title: "Ортодонтия",
					description:
						"Если Вам требуется коррекция и&nbsp;устранения аномалий зубочелюстной системы, Вас беспокоит неправильное расположение зубов или расстояние между ними, неприятные ощущения при жевании пищи, излишняя стираемость зубов, и&nbsp;если&nbsp;Вы готовитесь к&nbsp;имплантации и&nbsp;протезированию, в&nbsp;том числе к&nbsp;установке виниров Вам нужно посетить врача-ортодонта.",
				},
				{
					title: "Лечение &laquo;во&nbsp;сне&raquo;",
					description:
						"Обеспечивает максимальный комфорт и&nbsp;безопасность для всех пациентов. Пациенты могут избавиться от&nbsp;страха и&nbsp;переживаний, обеспечивая эффективное и&nbsp;качественное лечение без стресса.",
				},
				{
					title: "Терапия",
					description:
						"Если в&nbsp;ходе первого приема у&nbsp;Вас были диагностированы заболевания зубов, начинается этап терапии.",
				},
				{
					title: "Ортопедия",
					description:
						"Обнаружение и&nbsp;устранение нарушений целостности зубного ряда, восстановление функций зубочелюстного аппарата&nbsp;&mdash; это задачи врачей-ортопедов нашей клиники.",
				},
				{
					title: "Пародонтология",
					description:
						"Своевременная оценка состояния десен позволяет остановить заболевание до&nbsp;серьёзных последствий",
				},
				{
					title: "Гнатология",
					description:
						"Диагностика и&nbsp;лечение нарушений височно-нижнечелюстного сустава",
				},
			],
		},
		"stomatologiya-dlya-detey": {
			type: "factoid",
			cards: [
				{
					title: "Консультация детского стоматолога",
					description:
						"Правильная диагностика&nbsp;&mdash; успех любого лечения!",
				},
				{
					title: "Гигиена и&nbsp;профилактика",
					description:
						"Родители часто нас спрашивают: &laquo;Нужна&nbsp;ли гигиена полости рта ребенку? Ведь зубы у&nbsp;него молочные и&nbsp;через какое-то время сменятся постоянными&raquo;.",
				},
				{
					title: "Терапия",
					description:
						"Всех родителей волнует вопрос: &laquo;Нужно&nbsp;ли лечить кариес молочных зубов? Ведь они все равно выпадут?&raquo;.",
				},
				{
					title: "Хирургия",
					description:
						"Удаление зубов, коррекция уздечки губ и&nbsp;языка, вестибулопластика.",
				},
				{
					title: "Лечение &laquo;во&nbsp;сне&raquo;",
					description:
						"Обеспечивает максимальный комфорт и&nbsp;безопасность для всех пациентов. Пациенты могут избавиться от&nbsp;страха и&nbsp;переживаний, обеспечивая эффективное и&nbsp;качественное лечение без стресса.",
				},
				{
					title: "Ортодонтия",
					description:
						"Если Вашему ребенку требуется коррекция и&nbsp;устранения аномалий зубочелюстной системы, его беспокоит неправильное расположение зубов или расстояние между ними; неприятные ощущения при жевании пищи; излишняя стираемость зубов нужно посетить врача-ортодонта.",
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
				"<p>1. Анестезия</p><br /></br ?><p>Для большинства стоматологических процедур мы&nbsp;используем местную анестезию. Это позволяет блокировать болевые ощущения в&nbsp;области, где проводится лечение. Вы&nbsp;будете чувствовать только легкое покалывание при введении анестетика, а&nbsp;затем область, которая обрабатывается, станет нечувствительной. Это значит, что вы&nbsp;не&nbsp;будете испытывать боль во&nbsp;время процедуры.</p><br /><br /><p>2. Седация </p><br /><br /><p>Если вы&nbsp;чувствуете сильное волнение или страх перед стоматологическим лечением, мы&nbsp;также предлагаем седацию. Это метод, который помогает расслабить пациента и&nbsp;снизить уровень тревожности. Вы&nbsp;будете в&nbsp;состоянии легкой сонливости и&nbsp;сможете спокойно перенести процедуру.</p><br/><br/><p>3. Лечение &laquo;во&nbsp;сне&raquo;</p><br /><br /><p>Для тех, кто испытывает серьезный страх или имеет особые медицинские показания, мы&nbsp;предлагаем лечение &laquo;во&nbsp;сне&raquo;. Пациент находится в&nbsp;состоянии накроза. Вы&nbsp;не&nbsp;будете помнить о&nbsp;процедуре и&nbsp;не&nbsp;почувствуете боли. Это идеальный вариант для сложных процедур или для пациентов, которые не&nbsp;могут расслабиться даже с&nbsp;обычной седацией.</p>",
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
		"Оставьте заявку и&nbsp;мы&nbsp;проконсультируем<br /> вас насчет всех нюансов лечения!",
	poster: {
		webp: {
			src: "/mock/home/still-questions/still-questions.webp",
		},
	},
	buttonText: "Оставить заявку",
};

export const PARENT_NEWS_SECTION_MOCK: ParentNewsSectionProps = {
	title: "Кратко о&nbsp;важном в&nbsp;нашем блоге",
	news: [
		{
			title:
				"Пульпит без сильной боли: почему &laquo;терпимый&raquo; зуб всё равно опасен",
			description:
				"Терпимая боль в&nbsp;зубе может быть признаком хронического пульпита. Разбираем, почему скрытое воспаление опасно, как его находят и&nbsp;когда нужно идти к&nbsp;стоматологу.",

			publishDate: "2026-06-01T00:00:00.000Z",
			poster: {
				webp: {
					src: "/mock/news/parent-news/1-news.webp",
				},
			},
		},
		{
			title: "Глубокий кариес: когда зуб ещё можно сохранить живым",
			description:
				"Глубокий кариес не&nbsp;всегда означает удаление нерва. Разбираем, когда зуб можно сохранить живым, какие симптомы важны и&nbsp;почему нельзя тянуть с&nbsp;лечением.",
			publishDate: "2026-06-01T00:00:00.000Z",
			poster: {
				webp: {
					src: "/mock/news/parent-news/2-news.webp",
				},
			},
		},
		{
			title:
				"Кариес между зубами: почему его сложно заметить и&nbsp;как его находят на&nbsp;снимке",
			description:
				"Межзубной кариес долго развивается без боли и&nbsp;заметных пятен. Рассказываем, почему обычного осмотра бывает недостаточно, когда нужен снимок, как помогает зубная нить и&nbsp;что делать для профилактики.",
			publishDate: "2026-06-01T00:00:00.000Z",
			poster: {
				webp: {
					src: "/mock/news/parent-news/3-news.webp",
				},
			},
		},
		{
			title:
				"Пульпит без сильной боли: почему &laquo;терпимый&raquo; зуб всё равно опасен",
			description:
				"Терпимая боль в&nbsp;зубе может быть признаком хронического пульпита. Разбираем, почему скрытое воспаление опасно, как его находят и&nbsp;когда нужно идти к&nbsp;стоматологу.",

			publishDate: "2026-06-01T00:00:00.000Z",
			poster: {
				webp: {
					src: "/mock/news/parent-news/1-news.webp",
				},
			},
		},
		{
			title: "Глубокий кариес: когда зуб ещё можно сохранить живым",
			description:
				"Глубокий кариес не&nbsp;всегда означает удаление нерва. Разбираем, когда зуб можно сохранить живым, какие симптомы важны и&nbsp;почему нельзя тянуть с&nbsp;лечением.",
			publishDate: "2026-06-01T00:00:00.000Z",
			poster: {
				webp: {
					src: "/mock/news/parent-news/2-news.webp",
				},
			},
		},
		{
			title:
				"Кариес между зубами: почему его сложно заметить и&nbsp;как его находят на&nbsp;снимке",
			description:
				"Межзубной кариес долго развивается без боли и&nbsp;заметных пятен. Рассказываем, почему обычного осмотра бывает недостаточно, когда нужен снимок, как помогает зубная нить и&nbsp;что делать для профилактики.",
			publishDate: "2026-06-01T00:00:00.000Z",
			poster: {
				webp: {
					src: "/mock/news/parent-news/3-news.webp",
				},
			},
		},
	],
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
					src: "/mock/our-work/3-desktop.webp",
				},
			},
		},
		{
			size: "standart",
			poster: {
				webp: {
					src: "/mock/our-work/4-desktop.webp",
				},
			},
		},
		{
			size: "standart",
			poster: {
				webp: { src: "/mock/our-work/5-desktop.webp" },
			},
		},
		{
			size: "standart",
			poster: {
				webp: { src: "/mock/our-work/6-desktop.webp" },
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
				webp: { src: "/mock/our-work/8-desktop.webp" },
			},
		},
		{
			size: "big",
			poster: {
				webp: { src: "/mock/our-work/9-desktop.webp" },
			},
		},
		{
			size: "standart",
			poster: {
				webp: { src: "/mock/our-work/10-desktop.webp" },
			},
		},
		{
			size: "big",
			poster: {
				webp: { src: "/mock/our-work/11-desktop.webp" },
			},
		},
		{
			size: "standart",
			poster: {
				webp: { src: "/mock/our-work/12-desktop.webp" },
			},
		},
		{
			size: "big",
			poster: {
				webp: { src: "/mock/our-work/13-desktop.webp" },
			},
		},
		{
			size: "standart",
			poster: {
				webp: { src: "/mock/our-work/14-desktop.webp" },
			},
		},
		undefined,
		{
			size: "big",
			poster: {
				webp: {
					src: "/mock/our-work/15-desktop.webp",
				},
			},
		},
		undefined,
		{
			size: "big",
			poster: {
				webp: {
					src: "/mock/our-work/16-desktop.webp",
				},
			},
		},
	],
};
