import { useCallback, useEffect, useRef, useState } from "react";

export const useOneHeightOfCards = () => {
	const contentsRef = useRef<(HTMLDivElement | null)[]>([]);
	const [maxContentHeight, setMaxContentHeight] = useState<number>(0);

	const measure = useCallback(() => {
		const currentContents = contentsRef.current;

		if (!currentContents) return;

		const heights = currentContents
			.filter((item): item is HTMLDivElement => item !== null)
			.map((item) => {
				item.style.minHeight = "";
				return item.clientHeight;
			});

		setMaxContentHeight(Math.max(...heights, 0));
	}, []);

	useEffect(() => {
		measure();

		let timeoutId: ReturnType<typeof setTimeout>;
		const onResize = () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(measure, 150);
		};

		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
			clearTimeout(timeoutId);
		};
	}, [measure]);

	return {
		contentsRef,
		maxContentHeight,
	};
};
