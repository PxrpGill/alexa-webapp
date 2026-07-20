import { type RefObject, useEffect } from 'react';

import { TOOTH, WORDS } from '../models/zup.constants';

/** Tuning knobs (fractions of canvas size, so everything scales responsively). */
const FONT_FACTOR = 0.038; // font size ≈ 3.8% of canvas width
const EASE = 0.14; // spring smoothing per 60fps frame (frame-rate corrected)
const REF_FRAME_MS = 1000 / 60; // easing is normalized to this frame time
const MAX_STEP_MS = 50; // cap dt so a stalled tab doesn't jump on resume
const MAX_PUSH_FACTOR = 0.055; // farthest a word is shoved, as fraction of width
const SOFTNESS_FACTOR = 0.22; // repulsion falloff distance, as fraction of width
const HOVER_SCALE = 1.14; // hovered word grows by this factor
const FLOAT_AMP_FACTOR = 0.03; // tooth vertical travel, as fraction of height
const FLOAT_SPEED = 0.0015; // radians per ms
const HIT_PAD_X = 0.6; // horizontal hover padding, as fraction of font size
const HIT_PAD_Y = 0.6; // vertical hover padding, as fraction of font size
const MAX_DPR = 2; // cap buffer size on very high-density screens
const FALLBACK_COLOR = '#45a771';

// Idle "chaotic" wander, applied to each word while nothing is hovered.
const DRIFT_AMP_X = 0.014; // horizontal wander, as fraction of width
const DRIFT_AMP_Y = 0.022; // vertical wander, as fraction of height
const DRIFT_SPEED_MIN = 0.0002; // rad/ms — slow base
const DRIFT_SPEED_MAX = 0.0005; // rad/ms — slightly faster base
const DRIFT_ON_HOVER = 0.25; // fraction of drift kept by pushed-away words
const DIM_ALPHA = 0.82; // opacity of non-hovered words while one is focused

// Tooth follows the cursor a little while the pointer is over it.
const TOOTH_PARALLAX = 0.08; // fraction of cursor distance from tooth center
const TOOTH_PARALLAX_MAX_X = 0.035; // clamp, as fraction of width
const TOOTH_PARALLAX_MAX_Y = 0.025; // clamp, as fraction of height

const TAU = Math.PI * 2;
const rand = (min: number, max: number) => min + Math.random() * (max - min);

interface WordState {
  ox: number; // current offset from home
  oy: number;
  scale: number; // current scale
  w: number; // measured text width
  h: number; // text height (≈ font size)
  // Per-word drift seeds — two incommensurate sines per axis for a
  // non-repeating, organic path.
  fx1: number;
  fx2: number;
  fy1: number;
  fy2: number;
  px1: number;
  px2: number;
  py1: number;
  py2: number;
}

/** Drives the tooth + words scene on a single canvas: floating tooth, idle
 *  organic drift of the words, and a magnet-repulsion effect where hovering a
 *  word pushes the others away. */
export function useZupCanvas(ref: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const canHover = window.matchMedia('(hover: hover)').matches;
    const interactive = canHover && !reduceMotion;

    let cssW = 0;
    let cssH = 0;
    let dpr = 1;
    let fontFamily = 'sans-serif';
    let fontSize = 16;
    let wordColor = FALLBACK_COLOR;

    const states: WordState[] = WORDS.map(() => ({
      ox: 0,
      oy: 0,
      scale: 1,
      w: 0,
      h: 0,
      fx1: rand(DRIFT_SPEED_MIN, DRIFT_SPEED_MAX),
      fx2: rand(DRIFT_SPEED_MIN, DRIFT_SPEED_MAX) * 1.7,
      fy1: rand(DRIFT_SPEED_MIN, DRIFT_SPEED_MAX),
      fy2: rand(DRIFT_SPEED_MIN, DRIFT_SPEED_MAX) * 1.7,
      px1: rand(0, TAU),
      px2: rand(0, TAU),
      py1: rand(0, TAU),
      py2: rand(0, TAU),
    }));

    const pointer = { x: -1, y: -1, active: false };
    const tooth = { ox: 0, oy: 0 }; // current parallax offset

    const img = new Image();
    let imgReady = false;
    img.onload = () => {
      imgReady = true;
    };
    img.src = TOOTH.src;

    const homeX = (i: number) => WORDS[i].hx * cssW;
    const homeY = (i: number) => WORDS[i].hy * cssH;

    const measure = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      cssW = rect.width;
      cssH = rect.height;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);

      const cs = getComputedStyle(canvas);
      fontFamily = cs.fontFamily || 'sans-serif';
      wordColor =
        cs.getPropertyValue('--color-green-1').trim() || FALLBACK_COLOR;
      fontSize = cssW * FONT_FACTOR;

      ctx.font = `700 ${fontSize}px ${fontFamily}`;
      WORDS.forEach((word, i) => {
        states[i].w = ctx.measureText(word.text).width;
        states[i].h = fontSize;
      });
    };

    /** Returns the index of the top-most word under the pointer, or -1. */
    const hitTest = (px: number, py: number): number => {
      for (let i = WORDS.length - 1; i >= 0; i--) {
        const s = states[i];
        const cx = homeX(i) + s.ox;
        const cy = homeY(i) + s.oy;
        const halfW = (s.w * s.scale) / 2 + fontSize * HIT_PAD_X;
        const halfH = (s.h * s.scale) / 2 + fontSize * HIT_PAD_Y;
        if (
          px >= cx - halfW &&
          px <= cx + halfW &&
          py >= cy - halfH &&
          py <= cy + halfH
        ) {
          return i;
        }
      }
      return -1;
    };

    let raf = 0;
    const start = performance.now();
    let last = start;

    const render = (now: number) => {
      const t = now - start;
      // Frame-rate-independent smoothing: same visual speed at any FPS.
      const dt = Math.min(now - last, MAX_STEP_MS);
      last = now;
      const k = 1 - (1 - EASE) ** (dt / REF_FRAME_MS);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cssW, cssH);

      if (imgReady) {
        const tw = cssW * TOOTH.widthFrac;
        const th = tw * (img.height / img.width);
        const tx = cssW * TOOTH.leftFrac;
        const floatY = reduceMotion
          ? 0
          : Math.sin(t * FLOAT_SPEED) * cssH * FLOAT_AMP_FACTOR;

        // Lean toward the cursor while it hovers the tooth's box.
        const toothCx = tx + tw / 2;
        const toothCy = cssH * TOOTH.centerY;
        const overTooth =
          pointer.active &&
          pointer.x >= tx &&
          pointer.x <= tx + tw &&
          pointer.y >= toothCy - th / 2 &&
          pointer.y <= toothCy + th / 2;
        const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
        const targetOx = overTooth
          ? clamp(
              (pointer.x - toothCx) * TOOTH_PARALLAX,
              cssW * TOOTH_PARALLAX_MAX_X
            )
          : 0;
        const targetOy = overTooth
          ? clamp(
              (pointer.y - toothCy) * TOOTH_PARALLAX,
              cssH * TOOTH_PARALLAX_MAX_Y
            )
          : 0;
        tooth.ox += (targetOx - tooth.ox) * k;
        tooth.oy += (targetOy - tooth.oy) * k;

        ctx.drawImage(
          img,
          tx + tooth.ox,
          cssH * TOOTH.centerY - th / 2 + floatY + tooth.oy,
          tw,
          th
        );
      }

      const hovered =
        interactive && pointer.active ? hitTest(pointer.x, pointer.y) : -1;
      const anyHover = hovered !== -1;
      canvas.style.cursor = anyHover ? 'pointer' : 'default';

      const maxPush = cssW * MAX_PUSH_FACTOR;
      const soft = cssW * SOFTNESS_FACTOR;
      const ampX = cssW * DRIFT_AMP_X;
      const ampY = cssH * DRIFT_AMP_Y;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = wordColor;
      let lastFont = '';

      for (let i = 0; i < WORDS.length; i++) {
        const s = states[i];

        // Idle organic drift (two out-of-sync sines per axis).
        const driftX = reduceMotion
          ? 0
          : (Math.sin(t * s.fx1 + s.px1) * 0.6 +
              Math.sin(t * s.fx2 + s.px2) * 0.4) *
            ampX;
        const driftY = reduceMotion
          ? 0
          : (Math.sin(t * s.fy1 + s.py1) * 0.6 +
              Math.cos(t * s.fy2 + s.py2) * 0.4) *
            ampY;

        let tx: number;
        let ty: number;
        let tScale: number;

        if (!anyHover) {
          tx = driftX;
          ty = driftY;
          tScale = 1;
        } else if (i === hovered) {
          tx = 0;
          ty = 0;
          tScale = HOVER_SCALE;
        } else {
          const dx = homeX(i) - homeX(hovered);
          const dy = homeY(i) - homeY(hovered);
          const dist = Math.hypot(dx, dy) || 1;
          const strength = maxPush * (soft / (dist + soft)); // closer → stronger
          tx = (dx / dist) * strength + driftX * DRIFT_ON_HOVER;
          ty = (dy / dist) * strength + driftY * DRIFT_ON_HOVER;
          tScale = 1;
        }

        s.ox += (tx - s.ox) * k;
        s.oy += (ty - s.oy) * k;
        s.scale += (tScale - s.scale) * k;

        ctx.globalAlpha = anyHover && i !== hovered ? DIM_ALPHA : 1;
        const font = `700 ${fontSize * s.scale}px ${fontFamily}`;
        if (font !== lastFont) {
          ctx.font = font;
          lastFont = font;
        }
        ctx.fillText(WORDS[i].text, homeX(i) + s.ox, homeY(i) + s.oy);
      }
      ctx.globalAlpha = 1; // reset so the tooth isn't dimmed next frame

      raf = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };

    measure();
    if (document.fonts?.ready) document.fonts.ready.then(measure);

    const ro = new ResizeObserver(measure);
    ro.observe(canvas);

    if (interactive) {
      canvas.addEventListener('pointermove', onMove);
      canvas.addEventListener('pointerleave', onLeave);
    }

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, [ref]);
}
