/** biome-ignore-all lint/suspicious/noGlobalIsNan: <explanation> */

export const formatDayMonthYear = (date: string): string | undefined => {
	const d = new Date(date);

	if (isNaN(d.getTime())) return;

	const day = d.getUTCDate();
	const month = String(d.getUTCMonth() + 1).padStart(2, "0");
	const year = d.getUTCFullYear();

	return `${day}.${month}.${year}`;
};
