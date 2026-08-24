import { MEDIA_QUERIES } from "@/shared/config/use-media-query.constants";
import { useMediaQuery } from "@/shared/hooks/use-media-query";

export const useSwiperView = () => {
	const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

	return isMobile
		? { slidesPerView: 1.1, spaceBetween: 5 }
		: { slidesPerView: 1.5, spaceBetween: 10 };
};
