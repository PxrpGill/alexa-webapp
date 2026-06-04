"use client";

type Subscriber = {
	el: HTMLElement;
	threshold: number;
	once: boolean;
	onProgress: (progress: number) => void;
	onSnap: () => void;
	onReset: () => void;
	snapped: boolean;
};

let io: IntersectionObserver | null = null;
let rafId: number | null = null;
let scrollBound = false;

const subs = new Map<HTMLElement, Subscriber>();
const approaching = new Set<Subscriber>();
// Tracks non-once subscribers that have snapped but left the IO rootMargin zone,
// so they can still detect when they scroll back below the viewport and reset.
const snappedNonOnce = new Set<Subscriber>();

const scheduleTick = () => {
	if (rafId !== null) return;
	if (typeof window === "undefined") return;
	rafId = window.requestAnimationFrame(tick);
};

const tick = () => {
	rafId = null;

	const hasWork = approaching.size > 0 || snappedNonOnce.size > 0;
	if (!hasWork) return;

	const vh = window.innerHeight;

	// PASS 1: read all rects, no writes interleaved
	const reads: Array<{ sub: Subscriber; rect: DOMRect; progress: number }> = [];
	for (const sub of approaching) {
		const rect = sub.el.getBoundingClientRect();
		const progress = Math.max(
			0,
			Math.min(1, (vh - rect.top) / (vh * sub.threshold)),
		);
		reads.push({ sub, rect, progress });
	}
	// Also read rects for snapped non-once subs that have left the IO zone
	const snappedReads: Array<{ sub: Subscriber; rect: DOMRect }> = [];
	for (const sub of snappedNonOnce) {
		snappedReads.push({ sub, rect: sub.el.getBoundingClientRect() });
	}

	// PASS 2: apply writes
	for (const { sub, rect, progress } of reads) {
		if (progress >= 1 && !sub.snapped) {
			sub.snapped = true;
			sub.onSnap();
			if (sub.once) {
				approaching.delete(sub);
				subs.delete(sub.el);
				io?.unobserve(sub.el);
			}
			continue;
		}

		if (!sub.snapped) {
			sub.onProgress(progress);
		}
	}

	// PASS 2b: reset snapped non-once subs that scrolled back below the viewport
	for (const { sub, rect } of snappedReads) {
		if (rect.top > vh) {
			sub.snapped = false;
			snappedNonOnce.delete(sub);
			sub.onReset();
			// Re-observe so IO can add it back to approaching on next entry
			io?.observe(sub.el);
		}
	}

	if (approaching.size > 0 || snappedNonOnce.size > 0) scheduleTick();
};

const onScroll = () => scheduleTick();

const ensureIO = () => {
	if (io) return io;
	io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const sub = subs.get(entry.target as HTMLElement);
				if (!sub) continue;
				if (entry.isIntersecting) {
					approaching.add(sub);
					snappedNonOnce.delete(sub);
				} else {
					approaching.delete(sub);
					// If a non-once sub has snapped and now leaves the IO zone,
					// keep polling it so it can detect when it drops below the viewport.
					if (sub.snapped && !sub.once) {
						snappedNonOnce.add(sub);
					}
				}
			}
			const hasWork = approaching.size > 0 || snappedNonOnce.size > 0;
			if (hasWork) scheduleTick();
			else if (rafId !== null) {
				cancelAnimationFrame(rafId);
				rafId = null;
			}
		},
		{ rootMargin: "50% 0px 0px 0px", threshold: [0, 0.01] },
	);
	return io;
};

const bindScroll = () => {
	if (scrollBound || typeof window === "undefined") return;
	window.addEventListener("scroll", onScroll, { passive: true });
	scrollBound = true;
};

const teardownIfIdle = () => {
	if (subs.size > 0) return;
	if (scrollBound) {
		window.removeEventListener("scroll", onScroll);
		scrollBound = false;
	}
	if (io) {
		io.disconnect();
		io = null;
	}
	if (rafId !== null) {
		cancelAnimationFrame(rafId);
		rafId = null;
	}
	approaching.clear();
	snappedNonOnce.clear();
};

export type AnimatedEnteringSub = {
	el: HTMLElement;
	threshold: number;
	once: boolean;
	onProgress: (progress: number) => void;
	onSnap: () => void;
	onReset: () => void;
};

export const subscribe = (config: AnimatedEnteringSub): (() => void) => {
	if (typeof window === "undefined") return () => {};

	bindScroll();

	const sub: Subscriber = { ...config, snapped: false };
	subs.set(config.el, sub);
	ensureIO().observe(config.el);
	// Seed approaching immediately if the element is already within the rootMargin
	// zone (i.e. top < 1.5 * vh). IO will not re-fire for elements whose
	// intersection state hasn't changed, so without this a re-subscribed element
	// that is already on-screen would stay inert.
	const rect = config.el.getBoundingClientRect();
	if (rect.top < window.innerHeight * 1.5) {
		approaching.add(sub);
	}
	scheduleTick();

	return () => {
		subs.delete(config.el);
		approaching.delete(sub);
		snappedNonOnce.delete(sub);
		io?.unobserve(config.el);
		teardownIfIdle();
	};
};
