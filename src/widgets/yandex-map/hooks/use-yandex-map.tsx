import { useState } from 'react';

import type { InfoCardProps } from '../ui/info-card';

const DEFAULT_ZOOM = 1;
const BRANCH_ZOOM = 18;

export const useYandexMap = (
    infoCard: InfoCardProps,
    pin: [number, number]
) => {
    const placemarks: { cords: [number, number] }[] = infoCard?.branches?.length
        ? (infoCard.branches.filter((b) => b.cords) as {
              cords: [number, number];
          }[])
        : [{ cords: pin }];

    const initialCenter: [number, number] =
        placemarks.length > 1
            ? [
                  placemarks.reduce((sum, p) => sum + p.cords[0], 0) /
                      placemarks.length,
                  placemarks.reduce((sum, p) => sum + p.cords[1], 0) /
                      placemarks.length,
              ]
            : (placemarks[0]?.cords ?? pin);

    const [center, setCenter] = useState<[number, number]>(initialCenter);
    const [zoom, setZoom] = useState(placemarks.length > 1 ? 10 : DEFAULT_ZOOM);

    const handleBranchSelect = (cords: [number, number]) => {
        setCenter(cords);
        setZoom(BRANCH_ZOOM);
    };

    return {
        center,
        zoom,
        placemarks,
        handleBranchSelect,
    };
};
