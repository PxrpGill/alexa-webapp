import { Shape } from 'three';

/** Силуэты сняты с исходного PNG, координаты — пиксели картинки */
const BODY_ORIGIN: [number, number] = [325, 260];
const SHOULDER: [number, number] = [95, 258];

/** пиксели картинки → единицы сцены, относительно центра тела */
export function toBodyUnits(x: number, y: number): [number, number] {
    return [(x - BODY_ORIGIN[0]) / 100, -(y - BODY_ORIGIN[1]) / 100];
}

/** точка плеча в единицах сцены */
export const SHOULDER_POSITION = toBodyUnits(...SHOULDER);

export function createBodyShape(): Shape {
    const shape = new Shape();
    shape.moveTo(...toBodyUnits(325, 15));

    const curve = (
        a: [number, number],
        b: [number, number],
        c: [number, number]
    ) =>
        shape.bezierCurveTo(
            ...toBodyUnits(...a),
            ...toBodyUnits(...b),
            ...toBodyUnits(...c)
        );

    curve([470, 12], [545, 28], [566, 95]);
    curve([588, 160], [584, 232], [570, 272]);
    curve([545, 365], [482, 470], [428, 502]);
    curve([398, 518], [372, 500], [364, 448]);
    curve([352, 370], [348, 285], [325, 283]);
    curve([302, 285], [298, 370], [286, 448]);
    curve([278, 500], [252, 518], [222, 502]);
    curve([168, 470], [105, 365], [84, 272]);
    curve([70, 232], [64, 160], [86, 95]);
    curve([106, 28], [180, 12], [325, 15]);

    return shape;
}

/** Левая ручка; плечо спрятано внутри тела, правая — зеркальная копия */
export function createArmShape(): Shape {
    const shape = new Shape();

    const toArmUnits = (x: number, y: number): [number, number] => [
        (x - SHOULDER[0]) / 100,
        -(y - SHOULDER[1]) / 100,
    ];

    const curve = (
        a: [number, number],
        b: [number, number],
        c: [number, number]
    ) =>
        shape.bezierCurveTo(
            ...toArmUnits(...a),
            ...toArmUnits(...b),
            ...toArmUnits(...c)
        );

    shape.moveTo(...toArmUnits(118, 222));
    curve([96, 222], [84, 262], [58, 279]);
    curve([42, 289], [22, 288], [13, 296]);
    curve([2, 306], [8, 324], [26, 324]);
    curve([58, 324], [88, 306], [104, 286]);
    curve([118, 270], [128, 240], [118, 222]);

    return shape;
}
