/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import { useYandexMap } from "./hooks/use-yandex-map";
import css from "./index.module.css";
import InfoCard, { type InfoCardProps } from "./ui/info-card";

const DEFAULT_CENTER: [number, number] = [47.286561, 39.828901];

export type YandexMapProps = PropsWithClassName & {
	pin?: [number, number];
	infoCard?: InfoCardProps;
};

export default function YandexMap({
	className,
	infoCard = {},
	pin = DEFAULT_CENTER,
}: YandexMapProps) {
	const { center, zoom, placemarks, handleBranchSelect } = useYandexMap(
		infoCard,
		pin,
	);

	return (
		<AnimationWrapper className={`${css.root} container ${className}`.trim()}>
			<div className={css.contentWrapper}>
				<InfoCard {...infoCard} onBranchSelect={handleBranchSelect} />
				<div className={css.mapsWrapper}>
					<YMaps
						query={{
							apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY ?? "",
						}}
					>
						<div className={css.mapContainer}>
							<Map
								style={{ width: "100%", height: "100%" }}
								state={{
									center,
									zoom,
								}}
							>
								{placemarks.map((branch, index) => (
									<Placemark key={index} geometry={branch.cords} />
								))}
							</Map>
						</div>
					</YMaps>
				</div>
			</div>
		</AnimationWrapper>
	);
}
