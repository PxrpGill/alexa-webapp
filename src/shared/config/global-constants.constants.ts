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
				"Пн - пт&nbsp;с&nbsp;9:00 до&nbsp;18:00, суббота с&nbsp;9:00 до&nbsp;18:00",
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
			workSchedule:
				"Пн - пт&nbsp;с&nbsp;9:00 до&nbsp;18:00, суббота с&nbsp;9:00 до&nbsp;18:00",
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

export const GLOBAL_EMPLOYEES = {
	davidova: {
		poster: {
			webp: {
				src: "/mock/employees/employee-1.webp",
			},
		},
		fullname: "Давыдова Александра Викторовна",
		position: "Главный врач, врач-стоматолог-терапевт, эндодонтист",
	},
	kaplin: {
		poster: {
			webp: {
				src: "/mock/employees/employee-2.webp",
			},
		},
		fullname: "Каплин Ефим Валерьевич",
		position: "Врач-стоматолог-хирург, ортопед, имплантолог",
	},
	nikitin: {
		poster: {
			webp: {
				src: "/mock/employees/employee-3.webp",
			},
		},
		fullname: "Никитин Андрей Максимович",
		position: "Детский врач-стоматолог",
	},
	zolotovskaya: {
		poster: {
			webp: {
				src: "/mock/employees/employee-4.webp",
			},
		},
		fullname: "Золотовская Анастасия Витальевна",
		position: "Врач-стоматолог-терапевт",
	},
	koramagomedov: {
		poster: {
			webp: {
				src: "/mock/employees/employee-5.webp",
			},
		},
		fullname: "Корамагомедов Рамазан Корамагомедович",
		position: "Врач-стоматолог-терапевт, эндодонтист, стоматолог&#8209;ортопед",
	},
	toporov: {
		poster: {
			webp: {
				src: "/mock/employees/employee-6.webp",
			},
		},
		fullname: "Топоров Артур Игоревич",
		position: "Врач-анестезиолог-реаниматолог",
	},
	magomadgadgyeva: {
		poster: {
			webp: {
				src: "/mock/employees/employee-7.webp",
			},
		},
		fullname: "Магомедгаджиева Ашрафиль Руслановна",
		position: "Врач-стоматолог-гигиенист",
	},
	shahnazaryan: {
		poster: {
			webp: {
				src: "/mock/employees/employee-8.webp",
			},
		},
		fullname: "Шахназарян Эрик Каренович",
		position: "Врач-стоматолог-хирург",
	},
	kravchenko: {
		poster: {
			webp: {
				src: "/mock/employees/employee-9.webp",
			},
		},
		fullname: "Кравченко Павел Сергеевич",
		position: "Врач-ортодонт, гнатолог",
	},
	zabaluev: {
		poster: {
			webp: {
				src: "/mock/employees/employee-11.webp",
			},
		},
		fullname: "Забалуев Александр Валерьевич",
		position: "Врач-анестезиолог-реаниматолог",
	},
	markaryan: {
		poster: {
			webp: {
				src: "/mock/employees/employee-12.webp",
			},
		},
		fullname: "Маркарян Кнарик Робертовна",
		position: "Врач-стоматолог-терапевт",
	},
	kornilov: {
		poster: {
			webp: {
				src: "/mock/employees/employee-13.webp",
			},
		},
		fullname: "Корнилов Герман Валерьевич",
		position: "Врач-стоматолог-пародонтолог",
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
	osadchaya: {
		poster: {
			webp: {
				src: "/mock/employees/employee-19.webp",
			},
		},
		fullname: "Осадчая Юлия Александровна",
		position: "Администратор",
	},
};
