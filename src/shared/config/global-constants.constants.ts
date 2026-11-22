import type { EmployeeCardProps } from "@/entities/employee/types/employee-card.types";
import type { InfoCardProps } from "@/widgets/yandex-map/ui/info-card";
import type { SiteButtonProps } from "../types/button.types";

export const MOBILE_PHONE = {
	landyshevaya: "+7 (918) 555-02-96",
	volkova: "+7 (918) 550-12-24",
};
export const TELEGRAM = "https://t.me/+79185550296";
export const MAX =
	"https://max.ru/u/f9LHodD0cOLgm-ygOXWQoU7Vatg0-k1ddevFlBwsdap619uY44BZTwSbXfI";
export const MOBILE_PHONE_1 = "+79185550296";
export const WHATSAPP =
	"https://api.whatsapp.com/send/?phone=79185550296&text&type=phone_number&app_absent=0";

export const SMARTWIDGETS_SCRIPT_URL = "https://res.smartwidgets.ru/app.js";
export const SMARTWIDGETS_APP_KEY = "e4d0a894db39dde4f68222d90f09bc8a";

export const YANDEX_MAP_TITLE = "Наши контакты";
export const YANDEX_MAP_CONTENT =
	"<p><b>Режим работы:</b></p><p>Понедельник&nbsp;&mdash; Пятница: с&nbsp;9:00 до&nbsp;19:00</p><p>Суббота: с&nbsp;9:00 до&nbsp;18:00</p><br /><p><b>Наш Адрес:</b></p><p>Аксайский р-н, п. Янтарный, ул. Ландышевая, д.&nbsp;104</p>";

export const YANDEX_MAP_INFO_CARD: InfoCardProps = {
	title: "Наши филиалы",
	branches: [
		{
			locality: "Поселок Янтарный",
			title: "ул. Ландышевая, д.&nbsp;104",
			workSchedule:
				"Пн - пт&nbsp;с&nbsp;9:00 до&nbsp;19:00, суббота с&nbsp;9:00 до&nbsp;18:00",
			phone: MOBILE_PHONE.landyshevaya,
			cords: [47.286561, 39.828901],
			gallery: [
				{
					webp: {
						src: "/mock/yandex-map/land-1.webp",
					},
				},
				{
					webp: {
						src: "/mock/yandex-map/land-2.webp",
					},
				},
				{
					webp: {
						src: "/mock/yandex-map/land-3.webp",
					},
				},
				{
					webp: {
						src: "/mock/yandex-map/land-4.webp",
					},
				},
			],
		},
		{
			locality: "Ростов-на-Дону",
			title: "ул. Волкова, д.&nbsp;22",
			workSchedule: "Пн - пт&nbsp;с&nbsp;9:00 до&nbsp;18:00",
			phone: MOBILE_PHONE.volkova,
			cords: [47.283248, 39.720142],
			gallery: [
				{
					webp: {
						src: "/mock/yandex-map/volkova-1.webp",
					},
				},
			],
		},
	],
};

export const APPOINTMENT_ID = { source: "appointment", id: "#appointment" };

export const COSTS_OF_SERVICES_BUTTON: SiteButtonProps = {
	title: "Получить консультацию",
	isOpenConsultationModal: true,
};

export const GLOBAL_EMPLOYEES: { [vrachName: string]: EmployeeCardProps } = {
	davidova: {
		poster: {
			webp: {
				src: "/mock/employees/employee-1.webp",
			},
		},
		fullname: "Давыдова Александра Викторовна",
		position: "Главный врач, врач-стоматолог-терапевт, эндодонтист",
		aboutEmployee: {
			tabs: [
				{
					tabKey: "education",
					tabTitle: "Образование",
				},
				{
					tabKey: "internship",
					tabTitle: "Интернатура",
				},
				{
					tabKey: "retraining-programs",
					tabTitle: "Циклы переподготовки",
				},
				{
					tabKey: "professional-development",
					tabTitle: "Повышение квалификации",
				},
			],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title:
								"Воронежская государственная медицинская академия&nbsp;им. Н.Н. Бурденко",
							description: "Стоматология",
							year: 2001,
						},
						{
							title: "Базовое образование",
							description: "Стоматолог общей практики",
							year: 2002,
						},
					],
				},
				internship: {
					title: "Интернатура",
					content: [
						{
							title: "Северный государственный медицинский университет",
							description:
								"Организация здравоохранения и общественное здоровье",
							year: 2013,
						},
					],
				},
				"retraining-programs": {
					title: "Циклы переподготовки",
					content: [
						{
							title: "Институт профессиональных технологий и&nbsp;сервиса ФиЗ",
							description:
								"Организация здравоохранения и общественное здоровье",
							year: 2018,
						},
					],
				},
				"professional-development": {
					title: "Повышение квалификации",
					content: [
						{
							title:
								"&laquo;Вантовые конструкции зубных протезов&raquo;, Учебно-консультативный стоматологический центр",
							year: 2008,
						},
						{
							title:
								"&laquo;Эндодонтия с&nbsp;применением оборудования, материалов и&nbsp;методик корпорации &bdquo;Дентсплай Интернэшнл&ldquo;&raquo;, Dentsply",
							year: 2008,
						},
						{
							title:
								"&laquo;Реставрационная терапия с&nbsp;применением оборудования, материалов и&nbsp;технологий корпорации &bdquo;Дентсплай Интернэшнл&ldquo;&raquo;, Dentsply",
							year: 2008,
						},
						{
							title:
								"&laquo;Особые аспекты в&nbsp;эндодонтии&raquo;, доктор М.&nbsp;Соломонов, International Dental Group",
							year: 2011,
						},
						{
							title:
								"&laquo;Микропротезирование цельнокерамическими реставрациями. Виниры, вкладки, коронки&raquo;, Ivoclar Vidadent",
							year: 2011,
						},
						{
							title:
								"&laquo;Эндо-перио поражения и&nbsp;резорбции&raquo;, доктор М.&nbsp;Соломонов, International Dental Group",
							year: 2012,
						},
						{
							title: "II&nbsp;Эндодонтический конгресс",
							year: 2012,
						},
						{
							title:
								"&laquo;Травмы зубов&raquo;, доктор М.&nbsp;Соломонов, International Dental Group",
							year: 2013,
						},
						{
							title:
								"&laquo;Восстановление зубов после эндодонтического лечения&raquo;, доктор М.&nbsp;Соломонов, The Hebrew University of&nbsp;Jerusalem",
							year: 2013,
						},
						{
							title:
								"&laquo;Трехмерная радиодиагностика челюстно-лицевой области. Углубленный курс&raquo;, Эхо-тренинг центр",
							year: 2014,
						},
						{
							title:
								"&laquo;Эргономика&raquo;, М.&nbsp;Боцер, The Hebrew University of&nbsp;Jerusalem",
							year: 2014,
						},
						{
							title:
								"&laquo;Эндодонтия&raquo;, доктор М.&nbsp;Соломонов, The Hebrew University of&nbsp;Jerusalem",
							year: 2014,
						},
						{
							title:
								"&laquo;Периодонтология&raquo;, доктор А.&nbsp;Парицкая, The Hebrew University of&nbsp;Jerusalem",
							year: 2014,
						},
						{
							title:
								"&laquo;Протезирование&raquo;, доктор Р.&nbsp;Балабановский, The Hebrew University of&nbsp;Jerusalem",
							year: 2014,
						},
						{
							title:
								"&laquo;Медицина полости рта&raquo;, доктор Г.&nbsp;Идал, The Hebrew University of&nbsp;Jerusalem",
							year: 2014,
						},
						{
							title:
								"&laquo;Препарирование зубов под металлокерамическими и&nbsp;безметалловыми конструкциями&raquo;, Эхо-тренинг центр",
							year: 2016,
						},
						{
							title:
								"&laquo;Свободный дизайн в&nbsp;реставрации передних и&nbsp;боковых зубов&raquo;, Учебный центр Аполлония",
							year: 2016,
						},
						{
							title:
								"&laquo;Неотложная помощь в&nbsp;неотложной стоматологической практике&raquo;, СК ДентА",
							year: 2016,
						},
						{
							title:
								"&laquo;Современные методы устранения дисколоритов зубов&raquo;, Дентал курс",
							year: 2017,
						},
						{
							title:
								"&laquo;Современные аспекты несъемного протезирования&raquo;, Da Vinci training Center",
							year: 2018,
						},
						{
							title:
								"&laquo;Функциональный композитный протокол&raquo;, Дентал курс",
							year: 2018,
						},
						{
							title:
								"&laquo;Обслуживание клиентов и&nbsp;взаимодействие с&nbsp;пациентами&raquo;, Angelina Sham",
							year: 2019,
						},
						{
							title:
								"&laquo;Современные аспекты несъемного протезирования&raquo;, Da Vinci training Center",
							year: 2019,
						},
						{
							title:
								"&laquo;Современные аспекты эндодонтии&raquo;, International Dental Group",
							year: 2020,
						},
						{
							title:
								"&laquo;Основы психологии и&nbsp;маркетинга в&nbsp;стоматологии&raquo;, International Dental Group",
							year: 2020,
						},
						{
							title:
								"&laquo;Орофациальные (лицевые) боли классификация и&nbsp;диагностика&raquo;, International Dental Group",
							year: 2020,
						},
						{
							title:
								"&laquo;Правильное препарирование под различные виды конструкции&raquo;, Helios",
							year: 2020,
						},
						{
							title:
								"&laquo;Лучевая диагностика в&nbsp;амбулаторной практике врача-стоматолога&raquo;, Goffshtein education",
							year: 2024,
						},
						{
							title:
								"&laquo;Трехмерная радиодиагностика челюстно-лицевой области. Углубленный курс&raquo;, Goffshtein education",
							year: 2024,
						},
						{
							title: "ENDODONTIC CONGRESS IN&nbsp;KYOTO",
							year: 2025,
						},
					],
				},
			},
		},
	},
	kaplin: {
		poster: {
			webp: {
				src: "/mock/employees/employee-2.webp",
			},
		},
		fullname: "Каплин Ефим Валерьевич",
		position: "Врач-стоматолог-хирург, ортопед, имплантолог",
		aboutEmployee: {
			tabs: [
				{ tabKey: "education", tabTitle: "Образование" },
				{ tabKey: "internship", tabTitle: "Интернатура" },
				{
					tabKey: "professional-development",
					tabTitle: "Повышение квалификации",
				},
				{
					tabKey: "retraining-programs",
					tabTitle: "Циклы переподготовки",
				},
			],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title: "Уральский государственный медицинский университет",
							description: "Стоматология",
							year: 2012,
						},
						{
							title: "Чувашский институт усовершенствования врачей",
							description: "Стоматология общей практики",
							year: 2013,
						},
					],
				},
				internship: {
					title: "Интернатура",
					content: [{ title: "Стоматология ортопедическая", year: 2014 }],
				},
				"professional-development": {
					title: "Повышение квалификации",
					content: [
						{
							title: "Приволжский исследовательский медицинский университет",
							description: "Стоматология хирургическая",
							year: 2016,
						},
						{
							title:
								"Центр специализированного образования &laquo;Проф-Ресурс&raquo;",
							description: "Стоматология хирургическая",
							year: 2020,
						},
						{
							title:
								"&laquo;Эндодонтическая и&nbsp;постэндодонтическая реабилитация зубов. Непрямые реставрации&raquo;, Американ Дентал Академия",
							year: 2008,
						},
						{
							title:
								"&laquo;Клинические особенности применения реставрационных материалов компании 3M&nbsp;ESPE&raquo;, Амфодент",
							year: 2008,
						},
						{
							title:
								"&laquo;Актуальные вопросы местного обезболивания, терапевтической и&nbsp;ортопедической стоматологии&raquo;, 3M",
							year: 2012,
						},
						{
							title:
								"&laquo;Восстановительная терапия с&nbsp;использованием имплантов: диагностика, планирование и&nbsp;методы достижения успеха. Цифровая стоматологическая фотография&raquo;, Straumann",
							year: 2012,
						},
						{
							title:
								"&laquo;Искусство керамических реставраций: междисциплинарный подход в&nbsp;эстетической стоматологии&raquo;, Учебный центр &laquo;Дент-Лайн&raquo;",
							year: 2013,
						},
						{
							title:
								"&laquo;Актуальные аспекты современного протезирования. Протезирование на&nbsp;имплантах&raquo;, Квинтэссенция образовательный центр",
							year: 2013,
						},
						{
							title:
								"&laquo;Эстетические виниры. Минимально инвазивный протокол облицовки. Подготовка. Фрезеровка. Микрослоение. Цементация&raquo;, Miladinov Milos",
							year: 2014,
						},
						{
							title:
								"&laquo;Дентальная фотография и&nbsp;фотопротокол&raquo;, Miladinov Milos",
							year: 2014,
						},
						{
							title:
								"&laquo;Алгоритмы адгезивных процессов The&nbsp;Bond&raquo;, Арт-профи, Москва",
							year: 2016,
						},
						{
							title:
								"&laquo;Практические аспекты имплантологии &bdquo;От&nbsp;А&nbsp;до&nbsp;Я&ldquo;&raquo;, AlphaBio tec Simplantology",
							year: 2016,
						},
						{
							title:
								"&laquo;Дентальная имплантация. Костнопластические аспекты&raquo;, ФГБУ &laquo;Центральный научно-исследовательский институт стоматологии и&nbsp;челюстно-лицевой хирургии&raquo; Министерства здравоохранения РФ",
							year: 2016,
						},
					],
				},
				"retraining-programs": {
					title: "Циклы переподготовки",
					content: [
						{
							title: "ЧОУ ДПО Учебный центр &laquo;Социум&raquo;",
							description: "Стоматология ортопедическая",
							year: 2019,
						},
					],
				},
			},
		},
	},
	nikitin: {
		poster: {
			webp: {
				src: "/mock/employees/employee-3.webp",
			},
		},
		fullname: "Никитин Андрей Максимович",
		position: "Детский врач-стоматолог",
		aboutEmployee: {
			tabs: [
				{ tabKey: "education", tabTitle: "Образование" },
				{
					tabKey: "professional-development",
					tabTitle: "Повышение квалификации",
				},
			],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title: "Ростовский государственный медицинский университет",
							description: "Стоматология",
							year: 2021,
						},
						{
							title: "Московский медицинский университет &laquo;Реавиз&raquo;",
							description: "Стоматология детская",
							year: 2023,
						},
					],
				},
				"professional-development": {
					title: "Повышение квалификации",
					content: [
						{
							title:
								"&laquo;Управление поведением ребёнка на&nbsp;стоматологическом приёме&raquo;",
							year: 2019,
						},
						{
							title: "&laquo;Конгресс детской стоматологии&raquo;",
							year: 2020,
						},
						{
							title: "&laquo;Эстетика в&nbsp;детской стоматологии&raquo;",
							year: 2020,
						},
						{
							title:
								"&laquo;Травма зубов у&nbsp;детей. Что делать ортодонту?&raquo;, г.&nbsp;Москва",
							year: 2021,
						},
						{
							title:
								"Семинар &laquo;Анестезия у&nbsp;детей. Коффердам в&nbsp;детской стоматологии&raquo;, г.&nbsp;Москва",
							year: 2021,
						},
						{
							title:
								"Семинар &laquo;Кариес у&nbsp;детей. Профессиональная гигиена и&nbsp;её методики&raquo;, г.&nbsp;Москва",
							year: 2021,
						},
						{
							title:
								"&laquo;Эстетика в&nbsp;детской стоматологии&raquo;, г.&nbsp;Москва",
							year: 2021,
						},
						{
							title:
								"&laquo;Анатомия и&nbsp;физиология ребенка. Первичная консультация. Диагностика&raquo;, г.&nbsp;Москва",
							year: 2021,
						},
						{
							title:
								"&laquo;Коронки на&nbsp;молочные зубы&raquo;, г.&nbsp;Москва",
							year: 2021,
						},
						{
							title:
								"Семинар &laquo;Препарирование и&nbsp;реставрация временных зубов&raquo;",
							year: 2022,
						},
						{
							title:
								"&laquo;Травма зубов у&nbsp;детей. Что делать ортодонту?&raquo;",
							year: 2022,
						},
						{
							title:
								"&laquo;Специализированный курс. Модуль 5 (ДЕТСТВО)&raquo;, GOFFSHTEIN DENTAL DEVELOPMENT",
							year: 2025,
						},
						{
							title:
								"&laquo;Эндодонтия постоянных несформированных зубов&raquo;, СтомПорт",
							year: 2025,
						},
						{
							title:
								"&laquo;Подростковый приём: кариес, эндодонтия, травма&raquo;",
							year: 2026,
						},
						{
							title: "&laquo;Перелечивание. О&nbsp;недосказанном&raquo;",
							year: 2026,
						},
					],
				},
			},
		},
	},
	zolotovskaya: {
		poster: {
			webp: {
				src: "/mock/employees/employee-4.webp",
			},
		},
		fullname: "Золотовская Анастасия Витальевна",
		position: "Врач-стоматолог-терапевт",
		aboutEmployee: {
			tabs: [{ tabKey: "education", tabTitle: "Образование" }],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title: "Ростовский базовый медицинский колледж",
							description: "Стоматология",
							year: 2010,
						},
						{
							title: "Базовое образование",
							description: "Стоматология",
							year: 2017,
						},
					],
				},
			},
		},
	},
	koramagomedov: {
		poster: {
			webp: {
				src: "/mock/employees/ramazan.webp",
			},
		},
		fullname: "Корамагомедов Рамазан Корамагомедович",
		position: "Врач-стоматолог-терапевт, стоматолог&#8209;ортопед",
		aboutEmployee: {
			tabs: [
				{ tabKey: "education", tabTitle: "Образование" },
				{
					tabKey: "professional-development",
					tabTitle: "Повышение квалификации",
				},
			],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title: "Ростовский государственный медицинский университет",
							description: "Стоматология",
							year: 2023,
						},
					],
				},
				"professional-development": {
					title: "Повышение квалификации",
					content: [
						{
							title:
								"&laquo;Принципы работы с&nbsp;имплантационной системой Straumann&raquo;, Straumann",
							year: 2019,
						},
						{
							title: "&laquo;Искусство прямых реставраций&raquo;, Posterior",
							year: 2021,
						},
						{
							title:
								"&laquo;Одномоментная имплантация и&nbsp;пластика твёрдых/мягких тканей&raquo;, Neodent",
							year: 2023,
						},
						{
							title:
								"&laquo;Планирование и&nbsp;подготовка к&nbsp;протезированию&raquo;, 1&nbsp;модуль Школы ортопедии",
							year: 2025,
						},
						{
							title:
								"&laquo;Разбор клинических случаев. Ошибки и&nbsp;осложнения. Практические рекомендации, алгоритмы и&nbsp;протоколы&raquo;, GOFFSHTEIN DENTAL DEVELOPMENT",
							year: 2025,
						},
						{
							title:
								"&laquo;Клинические этапы изготовления непрямых реставраций&raquo;, 2&nbsp;модуль Школы ортопедии",
							year: 2025,
						},
						{
							title:
								"&laquo;Трёхдневный интенсив по&nbsp;сплинт-терапии&raquo;",
							year: 2025,
						},
					],
				},
			},
		},
	},
	shahnazaryan: {
		poster: {
			webp: {
				src: "/mock/employees/employee-8.webp",
			},
		},
		fullname: "Шахназарян Эрик Каренович",
		position: "Врач-стоматолог-хирург",
		aboutEmployee: {
			tabs: [
				{ tabKey: "education", tabTitle: "Образование" },
				{
					tabKey: "professional-development",
					tabTitle: "Повышение квалификации",
				},
			],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title: "Ростовский государственный медицинский университет",
							description: "Стоматология",
							year: 2024,
						},
					],
				},
				"professional-development": {
					title: "Повышение квалификации",
					content: [
						{
							title:
								"Двухдневный лекционно-практический углублённый курс по&nbsp;имплантации. Работа с&nbsp;мягкими тканями, протоколы тотальных работ, Dr.&nbsp;lector",
							year: 2023,
						},
						{
							title:
								"Теоретико-практический курс по&nbsp;хирургии и&nbsp;ортопедии",
							year: 2023,
						},
						{
							title: "&laquo;Предсказуемая регенерация&raquo;, Олимп",
							year: 2024,
						},
						{
							title:
								"&laquo;Простое и&nbsp;сложное удаление. Стандартный протокол имплантации&raquo;",
							year: 2024,
						},
						{
							title:
								"&laquo;Аутотрансплантация&raquo;, курс доктора Новомирского Р.&nbsp;А.",
							year: 2025,
						},
						{
							title:
								"&laquo;Современные аспекты консервативной пародонтологии&raquo;",
							year: 2025,
						},
						{
							title:
								"&laquo;Современная реконструктивная хирургия пародонта&raquo;",
							year: 2026,
						},
					],
				},
			},
		},
	},
	kravchenko: {
		poster: {
			webp: {
				src: "/mock/employees/kravchenko.webp",
			},
		},
		fullname: "Кравченко Павел Сергеевич",
		position: "Врач-ортодонт, гнатолог",
		aboutEmployee: {
			tabs: [
				{ tabKey: "education", tabTitle: "Образование" },
				{
					tabKey: "professional-development",
					tabTitle: "Повышение квалификации",
				},
			],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title: "Ростовский государственный медицинский университет",
							description: "Стоматология (с&nbsp;отличием)",
							year: 2021,
						},
						{
							title:
								"Северо-Западный государственный медицинский университет им.&nbsp;И.&nbsp;И.&nbsp;Мечникова",
							description: "Ортодонтия",
							year: 2023,
						},
					],
				},
				"professional-development": {
					title: "Повышение квалификации",
					content: [
						{
							title:
								"&laquo;Успешная первичная консультация, презентация своих работ&raquo;",
							year: 2020,
						},
						{
							title:
								"&laquo;Лечение открытого прикуса, интрузия моляров с&nbsp;использованием нёбной опоры&raquo;",
							year: 2021,
						},
						{
							title: "&laquo;Коффердам PRO&raquo;",
							year: 2021,
						},
						{
							title:
								"Школа ортодонтии &laquo;Уровень 1. Как грамотно начать лечение пациента&raquo;",
							year: 2022,
						},
						{
							title: "&laquo;Постэндодонтическое восстановление зубов&raquo;",
							year: 2022,
						},
						{
							title:
								"&laquo;Aligners: from beginner to expert in&nbsp;6&nbsp;months&raquo;",
							year: 2022,
						},
						{
							title:
								"&laquo;Инструментальная обработка корневых каналов: от&nbsp;базового навыка до&nbsp;продвинутого уровня&raquo;",
							year: 2022,
						},
						{
							title: "&laquo;Элайнеры. От&nbsp;А&nbsp;до&nbsp;Я&raquo;",
							year: 2022,
						},
						{
							title: "&laquo;Обтурация корневых каналов&raquo;",
							year: 2022,
						},
						{
							title:
								"&laquo;Тотальное протезирование. Гнатология. КТ. МРТ. ТРГ. Реабилитация пациента с&nbsp;потерей высоты прикуса и&nbsp;центрального соотношения&raquo;",
							year: 2022,
						},
						{
							title:
								"&laquo;Лечение вертикальных и&nbsp;сагиттальных аномалий у&nbsp;взрослых&raquo;",
							year: 2022,
						},
						{
							title:
								"&laquo;МРТ: руководство по&nbsp;диагностике заболеваний ВНЧС&raquo;",
							year: 2022,
						},
						{
							title:
								"Школа ортодонтии &laquo;Уровень 2. Брекеты и&nbsp;элайнеры&nbsp;&mdash; рабочие инструменты ортодонта&raquo;",
							year: 2022,
						},
						{
							title:
								"&laquo;Лечение детей. Всё о&nbsp;вертикальных проблемах и&nbsp;2&nbsp;классе&raquo;",
							year: 2023,
						},
						{
							title:
								"&laquo;Полная диагностика дисфункции ВНЧС в&nbsp;ортодонтической практике. Модуль 1&raquo;",
							year: 2023,
						},
						{
							title:
								"&laquo;Второй мезиобуккальный канал верхних моляров&raquo;",
							year: 2023,
						},
						{
							title:
								"&laquo;Эффективная диагностика, клиника и&nbsp;лечение дистальной окклюзии&raquo;",
							year: 2023,
						},
						{
							title:
								"&laquo;Возможности брекет-систем от&nbsp;Мехико до&nbsp;Москвы&raquo;",
							year: 2023,
						},
						{
							title:
								"&laquo;Диагностика в&nbsp;терапевтической стоматологии: витальные зубы&raquo;",
							year: 2023,
						},
						{
							title: "&laquo;Всё об&nbsp;элайнерах сегодня&raquo;",
							year: 2024,
						},
						{
							title:
								"Семинар для врачей-ортодонтов &laquo;III&nbsp;класс: современный и&nbsp;своевременный подход в&nbsp;лечении&raquo;",
							year: 2024,
						},
						{
							title: "&laquo;Конференция Ortho Talks 3.0&raquo;",
							year: 2025,
						},
						{
							title:
								"&laquo;Лечение детей. Всё о&nbsp;дефиците места и&nbsp;3&nbsp;классе&raquo;",
							year: 2025,
						},
						{
							title:
								"&laquo;Новые возможности в&nbsp;ортодонтическом лечении адентии&raquo;",
							year: 2025,
						},
						{
							title:
								"&laquo;Трёхдневный интенсив по&nbsp;сплинт-терапии&raquo;",
							year: 2025,
						},
						{
							title: "&laquo;Элайнеры. Практическое руководство&raquo;",
							year: 2025,
						},
					],
				},
			},
		},
	},
	zabaluev: {
		poster: {
			webp: {
				src: "/mock/employees/employee-11.webp",
			},
		},
		fullname: "Забалуев Александр Валерьевич",
		position: "Врач-анестезиолог-реаниматолог",
		aboutEmployee: {
			tabs: [
				{ tabKey: "education", tabTitle: "Образование" },
				{ tabKey: "residency", tabTitle: "Ординатура" },
				{ tabKey: "retraining-programs", tabTitle: "Циклы переподготовки" },
			],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title: "Ростовский государственный медицинский университет",
							description: "Педиатрия",
							year: 2015,
						},
					],
				},
				residency: {
					title: "Ординатура",
					content: [
						{
							title: "Анестезиология-реаниматология",
							year: 2017,
						},
					],
				},
				"retraining-programs": {
					title: "Циклы переподготовки",
					content: [
						{
							title: "Анестезиология и&nbsp;реаниматология",
							year: 2017,
						},
					],
				},
			},
		},
	},
	markaryan: {
		poster: {
			webp: {
				src: "/mock/employees/employee-12.webp",
			},
		},
		fullname: "Маркарян Кнарик Робертовна",
		position: "Врач-стоматолог-терапевт, эндодонтист",
		aboutEmployee: {
			tabs: [
				{ tabKey: "education", tabTitle: "Образование" },
				{
					tabKey: "professional-development",
					tabTitle: "Повышение квалификации",
				},
			],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title: "Ростовский государственный медицинский университет",
							description: "Стоматология",
							year: 2010,
						},
					],
				},
				"professional-development": {
					title: "Повышение квалификации",
					content: [
						{
							title: "&laquo;Просто об&nbsp;эстетике&raquo;",
							year: 2010,
						},
						{
							title:
								"&laquo;Особенности протезирования во&nbsp;фронтальном отделе&raquo;",
							year: 2011,
						},
						{
							title:
								"&laquo;Система ПроТейпер Универсал для&nbsp;эффективной эндодонтии&raquo;, 8&nbsp;учебных часов",
							year: 2012,
						},
						{
							title:
								"Курс реставрационной терапии с&nbsp;применением оборудования, материалов и&nbsp;технологий корпорации &laquo;Дентсплай Интернэшнл&raquo;, 60&nbsp;учебных часов",
							year: 2012,
						},
						{
							title: "&laquo;Жевательная реставрация&raquo;, GOFFSHTEIN",
							year: 2023,
						},
						{
							title: "&laquo;Фронтальная реставрация&raquo;, GOFFSHTEIN",
							year: 2023,
						},
						{
							title:
								"&laquo;Научись видеть больше&raquo;, практический курс Евгении Беловой",
							year: 2025,
						},
						{
							title:
								"&laquo;ЭндоПрактикум: перелечивание корневых каналов&raquo;",
							year: 2025,
						},
					],
				},
			},
		},
	},
	kornilov: {
		poster: {
			webp: {
				src: "/mock/employees/employee-13.webp",
			},
		},
		fullname: "Корнилов Герман Валерьевич",
		position: "Врач-стоматолог-пародонтолог",
		aboutEmployee: {
			tabs: [
				{ tabKey: "education", tabTitle: "Образование" },
				{
					tabKey: "professional-development",
					tabTitle: "Повышение квалификации",
				},
			],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title: "Волгоградский государственный медицинский университет",
							description: "Стоматология",
							year: 2025,
						},
					],
				},
				"professional-development": {
					title: "Повышение квалификации",
					content: [
						{
							title: "&laquo;Консервативная пародонтология&raquo;",
							year: 2025,
						},
					],
				},
			},
		},
	},
	saidgasanov: {
		poster: {
			original: {
				src: "/mock/employees/saidgasanov.jpg",
			},
		},
		fullname: "Саидгасанов Магомед Махмудович",
		position: "Врач-стоматолог-гигиенист",
		aboutEmployee: {
			tabs: [{ tabKey: "education", tabTitle: "Образование" }],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title: "Ростовский государственный медицинский университет",
							description: "Стоматология",
							year: 2026,
						},
					],
				},
			},
		},
	},
	shapavalova: {
		poster: {
			original: {
				src: "/mock/employees/shapavalova-darina.jpg",
			},
		},
		fullname: "Шаповалова Дарина Сергеевна",
		position: "Врач-стоматолог-ортодонт",
		aboutEmployee: {
			tabs: [{ tabKey: "education", tabTitle: "Образование" }],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title: "Ростовский государственный медицинский университет",
							description: "Стоматология",
							year: 2024,
						},
						{
							title: "Ростовский государственный медицинский университет",
							description: "Ортодонтия",
							year: 2026,
						},
					],
				},
			},
		},
	},
	tarasova: {
		poster: {
			webp: {
				src: "/mock/employees/tarasova.webp",
			},
		},
		fullname: "Тарасова Ярослава Игоревна",
		position: "Детский стоматолог",
		aboutEmployee: {
			tabs: [
				{
					tabKey: "education",
					tabTitle: "Образование",
				},
				{
					tabKey: "professional-development",
					tabTitle: "Повышение квалификации",
				},
			],
			content: {
				education: {
					title: "Образование",
					content: [
						{
							title:
								"Чувашский государственный университет&nbsp;им. И.Н. Ульянова",
							description: "Стоматология ",
							year: 2022,
						},
					],
				},
				"professional-development": {
					title: "Повышение квалификации",
					content: [
						{
							title: "&laquo;Эндодонтия несформированных зубов&raquo;",
							year: 2025,
						},
						{
							title: "&laquo;Травма молочных зубов&raquo;",
							year: 2024,
						},
						{
							title:
								"&laquo;Лечение пульпитов постоянных несформированных зубов; Восстановление временных зубов коронками; Лечение пульпитов временных зубов.&raquo;",
							year: 2022,
						},
						{
							title:
								"&laquo;4-ый конгресс прямой реставрации в&nbsp;Краснодаре&raquo;",
							year: 2023,
						},
						{
							title:
								"&laquo;Подростковый приём: кариес, эндодонтия, травма&raquo;",
							year: 2026,
						},
					],
				},
			},
		},
	},
	palamarchuk: {
		poster: {
			webp: {
				src: "/mock/employees/employee-14.webp",
			},
		},
		fullname: "Паламарчук Татьяна Васильевна",
		position: "Ассистент",
	},
	ermakova: {
		poster: {
			webp: {
				src: "/mock/employees/employee-15.webp",
			},
		},
		fullname: "Ермакова Полина Максимовна",
		position: "Ассистент",
	},
	vlasenko: {
		poster: {
			webp: {
				src: "/mock/employees/employee-16.webp",
			},
		},
		fullname: "Власенко Марина Ильинична",
		position: "Ассистент",
	},
	haritonova: {
		poster: {
			webp: {
				src: "/mock/employees/employee-17.webp",
			},
		},
		fullname: "Харитонова Елена Петровна",
		position: "Ассистент",
	},
	kurganskaya: {
		poster: {
			webp: {
				src: "/mock/employees/employee-18.webp",
			},
		},
		fullname: "Курганская Елена Павловна",
		position: "Управляющая",
	},
	karelova: {
		poster: {
			webp: {
				src: "/mock/employees/karelova.webp",
			},
		},
		fullname: "Карелова Анна Петровна",
		position: "Старший администратор, куратор",
	},
	osadchaya: {
		poster: {
			webp: {
				src: "/mock/employees/osadchaya.webp",
			},
		},
		fullname: "Осадчая Юлия Александровна",
		position: "Администратор",
	},
	tregubova: {
		poster: {
			webp: {
				src: "/mock/employees/tregubova.webp",
			},
		},
		fullname: "Трегубова Наталья Николаевна",
		position: "Администратор",
	},
};
