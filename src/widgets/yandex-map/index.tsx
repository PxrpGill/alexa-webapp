/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import dynamic from "next/dynamic";
import { useCallback, useMemo, useRef } from "react";

import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import { useMapBalloon } from "./hooks/use-map-balloon";
import { useYandexMap } from "./hooks/use-yandex-map";
import css from "./index.module.css";
import InfoCard, { type InfoCardProps } from "./ui/info-card";

const MapView = dynamic(() => import("./ui/map-view"), {
	ssr: false,
});

// Balloon тянет за собой Swiper (~74 КБ) — грузим его отдельно и только
// вместе с картой, чтобы он не попадал в стартовый чанк каждой страницы.
const Balloon = dynamic(() => import("./ui/balloon"), {
	ssr: false,
});

const DEFAULT_CENTER: [number, number] = [47.286561, 39.828901];

// biome-ignore lint/suspicious/noExplicitAny: ymaps types mismatch between @pbe/react-yandex-maps and @types/yandex-maps
type YandexMapInstance = any;

function getMarkerPixelPosition(
	map: YandexMapInstance,
	coords: [number, number],
) {
	const containerEl: HTMLElement = map.container.getElement();
	const rect = containerEl.getBoundingClientRect();
	const bounds: number[][] = map.getBounds();
	const [[swLat, swLng], [neLat, neLng]] = bounds;
	const [lat, lng] = coords;

	const x = ((lng - swLng) / (neLng - swLng)) * rect.width;
	const y = ((neLat - lat) / (neLat - swLat)) * rect.height;

	return { x, y };
}

export type YandexMapProps = PropsWithClassName & {
	pin?: [number, number];
	infoCard?: InfoCardProps;
};

export default function YandexMap({
	className,
	infoCard = {},
	pin = DEFAULT_CENTER,
}: YandexMapProps) {
	const mapRef = useRef<YandexMapInstance>(null);

	// Карта живёт в общем layout и раньше монтировалась на каждом маршруте,
	// подтягивая api-maps.yandex.ru ещё до первой отрисовки. Теперь она
	// поднимается, только когда контейнер подходит к вьюпорту. Контейнер
	// имеет фиксированную высоту, поэтому сдвига макета не возникает.
	const { ref: mapGateRef, isIntersecting: isMapVisible } =
		useIntersectionObserver({
			rootMargin: "200px",
			freezeOnceVisible: true,
		});

	const { center, zoom, placemarks, handleBranchSelect } = useYandexMap(
		infoCard,
		pin,
	);

	const calcPosition = useCallback(
		(coords: [number, number]) =>
			getMarkerPixelPosition(mapRef.current, coords),
		[],
	);

	const {
		activeIndex,
		balloonPos,
		closeBalloon,
		handleTransitionEnd,
		handlePlacemarkClick,
		handleInfoCardSelect,
	} = useMapBalloon({
		mapRef,
		placemarks,
		handleBranchSelect,
		calcPosition,
	});

	const handleMapInstance = useCallback(
		(map: YandexMapInstance) => {
			if (map && !mapRef.current) {
				map.events.add("actiontick", closeBalloon);
				map.events.add("zoomchange", closeBalloon);
				map.events.add("sizechange", closeBalloon);
			}
			mapRef.current = map;
		},
		[closeBalloon],
	);

	const activePlacemark = useMemo(
		() => infoCard?.branches?.[activeIndex ?? 0],
		[activeIndex, infoCard],
	);

	return (
		<AnimationWrapper className={`${css.root} container ${className}`.trim()}>
			<div className={css.contentWrapper}>
				<InfoCard {...infoCard} onBranchSelect={handleInfoCardSelect} />
				<div className={css.mapsWrapper}>
					<div className={css.mapContainer} ref={mapGateRef}>
						{isMapVisible && (
							<>
								<MapView
									center={center}
									zoom={zoom}
									placemarks={placemarks}
									onMapInstance={handleMapInstance}
									onPlacemarkClick={handlePlacemarkClick}
								/>
								<Balloon
									isOpen={Boolean(
										activeIndex !== null && balloonPos,
									)}
									onTransitionEnd={handleTransitionEnd}
									style={{
										left: balloonPos?.x,
										top: balloonPos
											? balloonPos.y + 20
											: undefined,
									}}
									activePlacemark={activePlacemark}
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</AnimationWrapper>
	);
}
