/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import InfoCard from "./ui/info-card";

const DEFAULT_CENTER: [number, number] = [47.286559, 39.828901];

interface YandexMapProps extends PropsWithClassName {
	pin?: [number, number];
	title?: string;
	content?: string;
}

export default function YandexMap({
	className,
	title,
	content,
	pin = DEFAULT_CENTER,
}: YandexMapProps) {
	return (
		<AnimationWrapper className={`${css.root} ${className}`.trim()}>
			<InfoCard title={title} content={content} className={css.mobileCard} />
			<div className={css.mapsWrapper}>
				<YMaps
					query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY ?? "" }}
				>
					<div className={css.mapContainer}>
						<Map
							style={{ width: "100%", height: "100%" }}
							defaultState={{
								center: pin,
								zoom: 16,
								behaviors: ["none"],
							}}
						>
							<Placemark geometry={pin} />
						</Map>
						<InfoCard
							title={title}
							content={content}
							className={css.desktopCard}
						/>
					</div>
				</YMaps>
			</div>
		</AnimationWrapper>
	);
}
