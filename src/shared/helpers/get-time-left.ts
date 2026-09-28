/** biome-ignore-all lint/suspicious/noGlobalIsNan: intentional suppression */

const MS_IN_DAY = 24 * 60 * 60 * 1000;

const pluralize = (
    count: number,
    forms: [one: string, few: string, many: string]
): string => {
    const mod100 = count % 100;
    const mod10 = count % 10;

    if (mod100 >= 11 && mod100 <= 14) return forms[2];
    if (mod10 === 1) return forms[0];
    if (mod10 >= 2 && mod10 <= 4) return forms[1];

    return forms[2];
};

/**
 * Сколько осталось до конца акции, человекочитаемо:
 * «меньше дня», «5 дней», «месяц», «3 месяца», «полгода», «год», «2 года».
 *
 * Возвращает undefined, если дата некорректна, отсутствует или акция уже
 * закончилась — вызывающий код должен это проверять.
 */
export const getTimeLeft = (
    endsAt?: string,
    from: Date = new Date()
): string | undefined => {
    if (!endsAt) return;

    const end = new Date(endsAt);

    if (isNaN(end.getTime())) return;

    const diff = end.getTime() - from.getTime();

    if (diff <= 0) return;

    if (diff < MS_IN_DAY) return 'меньше дня';

    const days = Math.ceil(diff / MS_IN_DAY);

    if (days <= 20)
        return `${days} ${pluralize(days, ['день', 'дня', 'дней'])}`;

    const months = Math.round(days / 30);

    if (months <= 1) return 'месяц';
    if (months < 6)
        return `${months} ${pluralize(months, ['месяц', 'месяца', 'месяцев'])}`;
    if (months === 6) return 'полгода';
    if (months < 12)
        return `${months} ${pluralize(months, ['месяц', 'месяца', 'месяцев'])}`;

    const years = Math.round(months / 12);

    if (years <= 1) return 'год';

    return `${years} ${pluralize(years, ['год', 'года', 'лет'])}`;
};
