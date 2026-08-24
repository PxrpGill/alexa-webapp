/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useCallback, useEffect, useMemo, useRef } from "react";

import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import { useMapBalloon } from "./hooks/use-map-balloon";
import { useYandexMap } from "./hooks/use-yandex-map";
import css from "./index.module.css";
import Balloon from "./ui/balloon";
import InfoCard, { type InfoCardProps } from "./ui/info-card";

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

	const activePlacemark = useMemo(
		() => infoCard?.branches?.[activeIndex ?? 0],
		[activeIndex, infoCard],
	);

	return (
		<AnimationWrapper className={`${css.root} container ${className}`.trim()}>
			<div className={css.contentWrapper}>
				<InfoCard {...infoCard} onBranchSelect={handleInfoCardSelect} />
				<div className={css.mapsWrapper}>
					<YMaps
						query={{
							apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY ?? "",
						}}
					>
						<div className={css.mapContainer}>
							<Map
								instanceRef={(map: YandexMapInstance) => {
									if (map && !mapRef.current) {
										map.events.add("actiontick", closeBalloon);
										map.events.add("zoomchange", closeBalloon);
										map.events.add("sizechange", closeBalloon);
									}
									mapRef.current = map;
								}}
								style={{ width: "100%", height: "100%" }}
								state={{
									center,
									zoom,
								}}
							>
								{placemarks.map((branch, index) => (
									<Placemark
										key={index}
										geometry={branch.cords}
										onClick={() => handlePlacemarkClick(index)}
									/>
								))}
							</Map>
							<Balloon
								isOpen={Boolean(activeIndex !== null && balloonPos)}
								onTransitionEnd={handleTransitionEnd}
								style={{
									left: balloonPos?.x,
									top: balloonPos ? balloonPos.y + 20 : undefined,
								}}
								activePlacemark={activePlacemark}
							/>
						</div>
					</YMaps>
				</div>
			</div>
		</AnimationWrapper>
	);
}
