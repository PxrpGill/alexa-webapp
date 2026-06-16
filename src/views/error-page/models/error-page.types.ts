import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { PictureFormatType } from "@/shared/ui/picture";
import type { ErrorFallbackProps } from "@/widgets/error-fallback/types/error-fallback.types";

export type ErrorFallbackType = {
	[status: number]: ErrorFallbackProps;
};

const FALLBACK_IMAGE: PictureFormatType = {
	original: {
		src: "/system/error-image.jpg",
	},
};

export const ERROR_FALLBACK_CONFIG: ErrorFallbackType = {
	404: {
		title: "404",
		descripton: "Ошибка! Страница не&nbsp;найдена...",
		button: {
			title: "Вернуться на главную",
			href: SITE_NAVIGATION.base,
		},
		poster: FALLBACK_IMAGE,
	},
	500: {
		title: "500",
		descripton:
			"Ошибка! Что-то пошло не&nbsp;так... Мы&nbsp;уже решаем эту проблему",
		poster: FALLBACK_IMAGE,
	},
};
