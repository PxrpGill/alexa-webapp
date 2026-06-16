import type { InfoCardProps } from "@/widgets/yandex-map/ui/info-card";

export const MOBILE_PHONE = "+7 (918) 555-02-96";
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
			phone: "+7 (918) 555-02-96",
			cords: [47.286561, 39.828901],
		},
		{
			locality: "Ростов-на-Дону",
			title: "ул. Волкова, д.&nbsp;22",
			workSchedule:
				"Пн - пт&nbsp;с&nbsp;9:00 до&nbsp;18:00, суббота с&nbsp;9:00 до&nbsp;18:00",
			phone: "+7 (918) 550-12-24",
			cords: [47.283248, 39.720142],
		},
	],
};
