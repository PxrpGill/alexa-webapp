import Delaunator from 'delaunator';
import {
    BufferGeometry,
    Float32BufferAttribute,
    type Shape,
    ShapeUtils,
    Vector3,
} from 'three';

export type SurfacePoint = {
    z: number;
    normal: Vector3;
};

export type InflateOptions = {
    /** шаг семплирования контура */
    step: number;
    /** шаг внутренней треугольной сетки */
    grid: number;
    /** смещения колец у края — чтобы скругление было гладким */
    rings: number[];
    /** радиус круглого бортика по краю */
    R: number;
    /** высота бортика */
    H: number;
    /** число итераций сглаживания внутренних складок */
    smooth: number;
    /** добавочный купол в середине формы */
    dome: (x: number, y: number) => number;
};

export type InflatedGeometry = {
    geometry: BufferGeometry;
    /** точка на передней поверхности: высота и нормаль ближайшей вершины */
    surfaceAt: (x: number, y: number) => SurfacePoint;
};

/**
 * «Надувает» плоский силуэт в пухлую форму: спереди и сзади купол,
 * по краю — круглый бортик, как у мягкой игрушки.
 */
export function inflate(shape: Shape, o: InflateOptions): InflatedGeometry {
    const contour = shape.getSpacedPoints(
        Math.ceil(shape.getLength() / o.step)
    );
    contour.pop();
    if (ShapeUtils.isClockWise(contour)) contour.reverse();

    const n = contour.length;
    const sx = contour.map((c) => c.x);
    const sy = contour.map((c) => c.y);

    const inside = (x: number, y: number) => {
        let r = false;
        for (let i = 0, j = n - 1; i < n; j = i++) {
            if (
                sy[i] > y !== sy[j] > y &&
                x < ((sx[j] - sx[i]) * (y - sy[i])) / (sy[j] - sy[i]) + sx[i]
            )
                r = !r;
        }
        return r;
    };

    const dist = (x: number, y: number) => {
        let m = Number.POSITIVE_INFINITY;
        for (let i = 0, j = n - 1; i < n; j = i++) {
            const ax = sx[j];
            const ay = sy[j];
            const dx = sx[i] - ax;
            const dy = sy[i] - ay;
            let t = ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy);
            t = t < 0 ? 0 : t > 1 ? 1 : t;
            const ex = ax + dx * t - x;
            const ey = ay + dy * t - y;
            const d = ex * ex + ey * ey;
            if (d < m) m = d;
        }
        return Math.sqrt(m);
    };

    const points: number[] = [];
    const edgeDist: number[] = [];
    for (let i = 0; i < n; i++) {
        points.push(sx[i], sy[i]);
        edgeDist.push(0);
    }

    // кольца у края
    for (const off of o.rings) {
        const every = off < o.step * 1.5 ? 1 : 2;
        for (let i = 0; i < n; i += every) {
            const a = (i - 1 + n) % n;
            const b = (i + 1) % n;
            const tx = sx[b] - sx[a];
            const ty = sy[b] - sy[a];
            const l = Math.hypot(tx, ty) || 1;
            const x = sx[i] - (ty / l) * off;
            const y = sy[i] + (tx / l) * off;
            if (!inside(x, y)) continue;
            const d = dist(x, y);
            if (Math.abs(d - off) < off * 0.3) {
                points.push(x, y);
                edgeDist.push(d);
            }
        }
    }

    // сетка внутри
    const minD = o.rings[o.rings.length - 1] + o.grid * 0.5;
    let minX = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;
    for (const v of sx) {
        minX = Math.min(minX, v);
        maxX = Math.max(maxX, v);
    }
    for (const v of sy) {
        minY = Math.min(minY, v);
        maxY = Math.max(maxY, v);
    }
    let row = 0;
    for (let y = minY; y <= maxY; y += o.grid * 0.866, row++) {
        for (let x = minX + ((row % 2) * o.grid) / 2; x <= maxX; x += o.grid) {
            if (!inside(x, y)) continue;
            const d = dist(x, y);
            if (d > minD) {
                points.push(x, y);
                edgeDist.push(d);
            }
        }
    }

    const del = new Delaunator(points);
    const vertexCount = edgeDist.length;
    const tris: number[] = [];
    for (let k = 0; k < del.triangles.length; k += 3) {
        const a = del.triangles[k];
        let b = del.triangles[k + 1];
        let c = del.triangles[k + 2];
        const cx = (points[2 * a] + points[2 * b] + points[2 * c]) / 3;
        const cy =
            (points[2 * a + 1] + points[2 * b + 1] + points[2 * c + 1]) / 3;
        if (!inside(cx, cy)) continue;
        const cross =
            (points[2 * b] - points[2 * a]) *
                (points[2 * c + 1] - points[2 * a + 1]) -
            (points[2 * b + 1] - points[2 * a + 1]) *
                (points[2 * c] - points[2 * a]);
        if (cross < 0) {
            const t = b;
            b = c;
            c = t;
        }
        tris.push(a, b, c);
    }

    // высота: круглый бортик + мягкий купол
    const heights = new Float32Array(vertexCount);
    for (let i = 0; i < vertexCount; i++) {
        if (edgeDist[i] === 0) continue;
        const t = Math.min(edgeDist[i] / o.R, 1);
        const s = Math.min(edgeDist[i] / (o.R * 1.6), 1);
        heights[i] =
            o.H * Math.sqrt(1 - (1 - t) * (1 - t)) +
            o.dome(points[2 * i], points[2 * i + 1]) * s * s * (3 - 2 * s);
    }

    // сглаживаем внутренние складки, край не трогаем
    const neighbours = Array.from(
        { length: vertexCount },
        () => new Set<number>()
    );
    for (let k = 0; k < tris.length; k += 3) {
        const a = tris[k];
        const b = tris[k + 1];
        const c = tris[k + 2];
        neighbours[a].add(b).add(c);
        neighbours[b].add(a).add(c);
        neighbours[c].add(a).add(b);
    }
    const lock = o.R * 0.45;
    for (let it = 0; it < o.smooth; it++) {
        const next = heights.slice();
        for (let i = 0; i < vertexCount; i++) {
            if (edgeDist[i] < lock || !neighbours[i].size) continue;
            let sum = 0;
            for (const j of neighbours[i]) sum += heights[j];
            next[i] = 0.5 * heights[i] + (0.5 * sum) / neighbours[i].size;
        }
        heights.set(next);
    }

    // перед и зад; точки края общие, поэтому шов не виден
    const back = new Int32Array(vertexCount);
    const pos: number[] = [];
    for (let i = 0; i < vertexCount; i++) {
        pos.push(points[2 * i], points[2 * i + 1], heights[i]);
    }
    let nextIndex = vertexCount;
    for (let i = 0; i < vertexCount; i++) {
        if (edgeDist[i] === 0) {
            back[i] = i;
        } else {
            back[i] = nextIndex++;
            pos.push(points[2 * i], points[2 * i + 1], -heights[i]);
        }
    }

    const index: number[] = [];
    for (let k = 0; k < tris.length; k += 3) {
        index.push(tris[k], tris[k + 1], tris[k + 2]);
        index.push(back[tris[k]], back[tris[k + 2]], back[tris[k + 1]]);
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(pos, 3));
    geometry.setIndex(index);
    geometry.computeVertexNormals();

    const surfaceAt = (x: number, y: number): SurfacePoint => {
        let best = 0;
        let bd = Number.POSITIVE_INFINITY;
        for (let i = 0; i < vertexCount; i++) {
            const d = (points[2 * i] - x) ** 2 + (points[2 * i + 1] - y) ** 2;
            if (d < bd) {
                bd = d;
                best = i;
            }
        }
        const nrm = geometry.attributes.normal;
        return {
            z: heights[best],
            normal: new Vector3(
                nrm.getX(best),
                nrm.getY(best),
                nrm.getZ(best)
            ).normalize(),
        };
    };

    return { geometry, surfaceAt };
}
