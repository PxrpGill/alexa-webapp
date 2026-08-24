/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */

import { type RefObject, useCallback, useEffect, useState } from "react";

type BalloonPosition = { x: number; y: number };

type Placemark = { cords: [number, number] };

type UseMapBalloonParams = {
	mapRef: RefObject<any>;
	placemarks: Placemark[];
	handleBranchSelect: (cords: [number, number]) => void;
	calcPosition: (coords: [number, number]) => BalloonPosition;
};

export function useMapBalloon({
	mapRef,
	placemarks,
	handleBranchSelect,
	calcPosition,
}: UseMapBalloonParams) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [balloonPos, setBalloonPos] = useState<BalloonPosition | null>(null);
	const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(
		null,
	);
	const [closeVersion, setCloseVersion] = useState(0);

	const findBranchIndex = useCallback(
		(coords: [number, number]) =>
			placemarks.findIndex(
				(p) => p.cords[0] === coords[0] && p.cords[1] === coords[1],
			),
		[placemarks],
	);

	const closeBalloon = useCallback(() => {
		setActiveIndex(null);
		setSelectedCoords(null);
		setCloseVersion((v) => v + 1);
	}, []);

	const handleTransitionEnd = useCallback(() => {
		if (activeIndex === null) {
			setBalloonPos(null);
		}
	}, [activeIndex]);

	const updateBalloonPosition = useCallback(() => {
		if (activeIndex === null || !mapRef.current) return;

		const coords = placemarks[activeIndex]?.cords;
		if (!coords) return;

		setBalloonPos(calcPosition(coords));
	}, [activeIndex, placemarks, calcPosition, mapRef]);

	const handlePlacemarkClick = useCallback(
		(index: number) => {
			const coords = placemarks[index]?.cords;
			if (!coords) return;

			if (activeIndex === index) {
				closeBalloon();
				return;
			}

			setSelectedCoords(coords);
			setCloseVersion((v) => v + 1);
			handleBranchSelect(coords);
		},
		[activeIndex, placemarks, closeBalloon, handleBranchSelect],
	);

	const handleInfoCardSelect = useCallback(
		(coords: [number, number]) => {
			setSelectedCoords(coords);
			setCloseVersion((v) => v + 1);
			handleBranchSelect(coords);
		},
		[handleBranchSelect],
	);

	useEffect(() => {
		if (!selectedCoords || !mapRef.current) return;

		const index = findBranchIndex(selectedCoords);
		if (index === -1) return;

		setActiveIndex(index);
		setBalloonPos(calcPosition(selectedCoords));
	}, [selectedCoords, findBranchIndex, calcPosition, mapRef]);

	useEffect(() => {
		updateBalloonPosition();
	}, [updateBalloonPosition]);

	return {
		activeIndex,
		balloonPos,
		closeBalloon,
		handleTransitionEnd,
		handlePlacemarkClick,
		handleInfoCardSelect,
	};
}
