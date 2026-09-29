/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: Map is the yandex map component */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: static list, order won't change */
/** biome-ignore-all lint/suspicious/noExplicitAny: ymaps types mismatch between @pbe/react-yandex-maps and @types/yandex-maps */

'use client';

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

type YandexMapInstance = any;

export type MapViewProps = {
    center: [number, number];
    zoom: number;
    placemarks: { cords: [number, number] }[];
    onMapInstance: (map: YandexMapInstance) => void;
    onPlacemarkClick: (index: number) => void;
};

export default function MapView({
    center,
    zoom,
    placemarks,
    onMapInstance,
    onPlacemarkClick,
}: MapViewProps) {
    return (
        <YMaps
            query={{
                apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY ?? '',
            }}
        >
            <Map
                instanceRef={onMapInstance}
                style={{ width: '100%', height: '100%' }}
                state={{
                    center,
                    zoom,
                }}
            >
                {placemarks.map((branch, index) => (
                    <Placemark
                        key={index}
                        geometry={branch.cords}
                        onClick={() => onPlacemarkClick(index)}
                    />
                ))}
            </Map>
        </YMaps>
    );
}
