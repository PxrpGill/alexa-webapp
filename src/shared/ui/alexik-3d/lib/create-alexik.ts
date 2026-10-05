import {
    type BufferGeometry,
    CircleGeometry,
    Color,
    DirectionalLight,
    ExtrudeGeometry,
    Group,
    HemisphereLight,
    type Material,
    Mesh,
    MeshBasicMaterial,
    MeshPhysicalMaterial,
    PerspectiveCamera,
    Quaternion,
    Scene,
    Shape,
    TorusGeometry,
    Vector3,
} from 'three';

import { inflate } from './inflate';
import {
    createArmShape,
    createBodyShape,
    SHOULDER_POSITION,
} from './silhouettes';

export type AlexikFrame = {
    /** время с запуска сцены, с */
    time: number;
    /** положение курсора относительно центра, -1..1 */
    lookX: number;
    lookY: number;
    /** накопленный поворот перетаскиванием, рад */
    spin: number;
    /** время с последнего клика, с; отрицательное — радости нет */
    sinceCheer: number;
    /** 0 при prefers-reduced-motion, иначе 1 */
    motion: number;
};

export type AlexikScene = {
    scene: Scene;
    camera: PerspectiveCamera;
    /** пересчитывает позы под кадр; рендер вызывает владелец сцены */
    update: (frame: AlexikFrame) => void;
    dispose: () => void;
};

const Z_AXIS = new Vector3(0, 0, 1);

const ease = (a: number, b: number, k: number) => a + (b - a) * k;

/** скруглённая палочка — заготовка для глаза */
function roundedBar(w: number, h: number) {
    const r = h / 2;
    const s = new Shape();
    s.moveTo(-w / 2 + r, -r);
    s.lineTo(w / 2 - r, -r);
    s.absarc(w / 2 - r, 0, r, -Math.PI / 2, Math.PI / 2, false);
    s.lineTo(-w / 2 + r, r);
    s.absarc(-w / 2 + r, 0, r, Math.PI / 2, Math.PI * 1.5, false);
    return new ExtrudeGeometry(s, {
        depth: 0.03,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.015,
        bevelSegments: 3,
    });
}

export function createAlexik(): AlexikScene {
    const scene = new Scene();
    const camera = new PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0.2, 13);

    // ---------- Свет ----------
    // three >= r155 считает свет физически корректно: чтобы яркость совпала
    // с исходной сценой, интенсивности домножены на π.
    const L = Math.PI;
    scene.add(new HemisphereLight(0xffffff, 0xeef5f4, 0.85 * L));
    const key = new DirectionalLight(0xffffff, 0.85 * L);
    key.position.set(4, 6, 7);
    scene.add(key);
    const rim = new DirectionalLight(0xeaf8ff, 0.5 * L);
    rim.position.set(-6, 3, -5);
    scene.add(rim);
    const fill = new DirectionalLight(0xfffafb, 0.35 * L);
    fill.position.set(-5, -2, 6);
    scene.add(fill);

    // ---------- Материалы ----------
    const enamel = new MeshPhysicalMaterial({
        color: 0xb8b6b6, // на экране даёт #EDECEC: сцена светит в 1.7× и тянет эмаль к белому
        // матовая эмаль: clearcoat убран, шероховатость почти в максимум —
        // блик от трёх источников размазывается и не читается как глянец
        roughness: 0.95,
        metalness: 0,
        clearcoat: 0,
    });
    // лицо — плоские цвета, без влияния света и тонмаппинга
    const flat = (hex: number) =>
        new MeshBasicMaterial({
            color: new Color(hex).convertSRGBToLinear(),
            toneMapped: false,
        });
    const dark = flat(0x333333);
    const pink = flat(0xffa1d3);

    // ---------- Тело ----------
    const body = inflate(createBodyShape(), {
        step: 0.035,
        grid: 0.075,
        rings: [0.012, 0.035, 0.07, 0.12, 0.18],
        R: 0.8,
        H: 0.8,
        smooth: 25,
        dome: (x, y) =>
            0.45 * Math.max(0, 1 - (x / 2.7) ** 2 - ((y - 0.9) / 2.2) ** 2),
    });

    const character = new Group(); // вращение и наклон
    const bouncer = new Group(); // прыжки и сжатие
    scene.add(bouncer);
    bouncer.add(character);
    character.add(new Mesh(body.geometry, enamel));

    /** ставит деталь лица на выпуклую поверхность и поворачивает по нормали */
    function stick(mesh: Mesh, x: number, y: number, lift = 0.012, spin = 0) {
        const s = body.surfaceAt(x, y);
        mesh.position.set(x, y, s.z).addScaledVector(s.normal, lift);
        mesh.quaternion
            .setFromUnitVectors(Z_AXIS, s.normal)
            .multiply(new Quaternion().setFromAxisAngle(Z_AXIS, spin));
    }

    // ---------- Лицо ----------
    const face = new Group();
    character.add(face);

    const eyeGeo = roundedBar(0.52, 0.1);
    const eyes = [-1.03, 1.07].map((x) => {
        const m = new Mesh(eyeGeo, dark);
        stick(m, x, 1.28, 0.01);
        face.add(m);
        return m;
    });

    // счастливые глазки ^^ — появляются по клику
    const happyGeo = new TorusGeometry(0.2, 0.045, 12, 32, Math.PI);
    const happyEyes = [-1.03, 1.07].map((x) => {
        const m = new Mesh(happyGeo, dark);
        stick(m, x, 1.2, 0.03);
        m.visible = false;
        face.add(m);
        return m;
    });

    const mouthGeo = new TorusGeometry(0.17, 0.045, 12, 32, Math.PI);
    const mouth = new Mesh(mouthGeo, dark);
    stick(mouth, 0.07, 1.27, 0.03, Math.PI);
    face.add(mouth);

    const cheekGeo = new CircleGeometry(0.15, 40);
    const cheeks = [
        [-0.69, 0.88],
        [0.75, 0.88],
    ].map(([x, y]) => {
        const m = new Mesh(cheekGeo, pink);
        stick(m, x, y, 0.012);
        face.add(m);
        return m;
    });

    // ---------- Ручки ----------
    const arm = inflate(createArmShape(), {
        step: 0.02,
        grid: 0.035,
        rings: [0.006, 0.018, 0.04, 0.07],
        R: 0.22,
        H: 0.26,
        smooth: 10,
        dome: () => 0,
    });

    function makeArm(side: 1 | -1) {
        const pivot = new Group();
        const [sx, sy] = SHOULDER_POSITION;
        pivot.position.set(side * -sx, sy, 0);
        const mesh = new Mesh(arm.geometry, enamel);
        mesh.scale.x = -side; // правая ручка — зеркальная копия
        pivot.add(mesh);
        character.add(pivot);
        return pivot;
    }
    const armL = makeArm(-1);
    const armR = makeArm(1);

    function update({
        time,
        lookX,
        lookY,
        spin,
        sinceCheer,
        motion,
    }: AlexikFrame) {
        character.rotation.y = ease(
            character.rotation.y,
            spin + lookX * 0.45,
            0.08
        );
        character.rotation.x = ease(character.rotation.x, lookY * 0.18, 0.08);
        character.rotation.z = Math.sin(time * 1.3) * 0.03 * motion;

        // радость по клику: прыжок, взмах, глазки ^^
        const j = sinceCheer;
        const joyful = j >= 0 && j < 1.6;
        let jump = 0;
        let squash = 0;
        if (j >= 0 && j < 0.7) {
            jump = Math.sin((j / 0.7) * Math.PI) * 0.9;
            squash = j < 0.1 ? Math.sin((j / 0.1) * Math.PI) * 0.12 : 0;
        } else if (j >= 0.7 && j < 0.85) {
            squash = Math.sin(((j - 0.7) / 0.15) * Math.PI) * 0.1;
        }
        jump *= motion || 0.3;

        const float = Math.sin(time * 1.8) * 0.12 * motion;
        bouncer.position.y = float + jump;
        bouncer.scale.set(1 + squash, 1 - squash, 1 + squash);

        // ручки
        const sway = Math.sin(time * 1.8 + 0.6) * 0.08 * motion;
        const rTarget = joyful ? 1.5 + Math.sin(j * 16) * 0.3 : sway;
        armL.rotation.z = ease(armL.rotation.z, joyful ? -0.35 : -sway, 0.15);
        armR.rotation.z = ease(armR.rotation.z, rTarget, 0.15);

        for (const m of eyes) m.visible = !joyful;
        for (const m of happyEyes) m.visible = joyful;

        const blush = joyful ? 1.35 : 1;
        for (const c of cheeks) {
            const s = ease(c.scale.x, blush, 0.12);
            c.scale.set(s, s, 1);
        }
    }

    const geometries: BufferGeometry[] = [
        body.geometry,
        arm.geometry,
        eyeGeo,
        happyGeo,
        mouthGeo,
        cheekGeo,
    ];
    const materials: Material[] = [enamel, dark, pink];

    function dispose() {
        for (const g of geometries) g.dispose();
        for (const m of materials) m.dispose();
        scene.clear();
    }

    return { scene, camera, update, dispose };
}
