export interface ZupWord {
  text: string;
  /** home position as a fraction (0–1) of the canvas — word center X */
  hx: number;
  /** home position as a fraction (0–1) of the canvas — word center Y */
  hy: number;
}

/** Words laid out along an arc that hugs the tooth's right edge. */
export const WORDS: ZupWord[] = [
  { text: 'Гигиена', hx: 0.65, hy: 0.21 },
  { text: 'Контроль', hx: 0.72, hy: 0.33 },
  { text: 'Диагностика', hx: 0.76, hy: 0.45 },
  { text: 'Профилактика', hx: 0.76, hy: 0.6 },
  { text: 'Домашний уход', hx: 0.71, hy: 0.77 },
  { text: 'Здоровые дёсны', hx: 0.6, hy: 0.89 },
];

/** Tooth PNG placement, as fractions of the canvas. */
export const TOOTH = {
  src: '/mock/volkovo/zup.png',
  leftFrac: 0.02,
  centerY: 0.5,
  widthFrac: 0.52,
} as const;
