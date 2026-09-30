import type {
	ChildWhatIncludesCardColSpan,
	ChildWhatIncludesServiceCardProps,
} from "../types/child-what-includes-services.types";

/** Чередующийся размер рядов: 3 карточки, затем 2, затем снова 3 и т. д. */
const ROW_PATTERN = [3, 2] as const;

/** Разбивает плоский список карточек на ряды по паттерну ROW_PATTERN. */
export function chunkCardsIntoRows(
	cards: Array<ChildWhatIncludesServiceCardProps>
): Array<Array<ChildWhatIncludesServiceCardProps>> {
	const rows: Array<Array<ChildWhatIncludesServiceCardProps>> = [];

	let cardIndex = 0;

	while (cardIndex < cards.length) {
		const rowSize = ROW_PATTERN[rows.length % ROW_PATTERN.length];

		rows.push(cards.slice(cardIndex, cardIndex + rowSize));

		cardIndex += rowSize;
	}

	return rows;
}

/**
 * Ширина карточки в колонках 4-колоночной сетки — выводится из длины ряда:
 * ряд из 3 → 1 + 1 + 2, ряд из 2 → 2 + 2, ряд из 1 → 4.
 */
export function getCardColSpan(
	rowLength: number,
	cardIndex: number
): ChildWhatIncludesCardColSpan {
	if (rowLength === 1) return 4;

	if (rowLength === 2) return 2;

	return cardIndex === rowLength - 1 ? 2 : 1;
}
