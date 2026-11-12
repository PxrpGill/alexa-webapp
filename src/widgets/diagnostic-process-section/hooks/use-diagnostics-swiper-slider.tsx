import { useMemo } from "react";
import { MEDIA_QUERIES } from "@/shared/config/use-media-query.constants";
import { useMediaQuery } from "@/shared/hooks/use-media-query";

const MOBILE_MIN_CARDS = 1;
const DESKTOP_MIN_CARDS = 4;

export const useDiagnosticsSwiperSlider = (cardsLength?: number) => {
	const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);
	const withNavigation = useMemo(
		() =>
			(cardsLength ?? 0) > (isMobile ? MOBILE_MIN_CARDS : DESKTOP_MIN_CARDS),
		[cardsLength, isMobile],
	);

	return { withNavigation };
};
