// Пережимает растровые ассеты в src/public.
//
// Опирается на системные cwebp и avifenc (homebrew) плюс sips из macOS —
// новых npm-зависимостей не требуется. sharp в проекте нельзя: в
// pnpm-workspace.yaml стоит allowBuilds: sharp: false, нативный модуль не собран.
//
// Запуск из корня репозитория:
//   node scripts/optimize-images.mjs --dry-run   # таблица «было → станет»
//   node scripts/optimize-images.mjs             # применить
//
// Два режима работы:
//   RESIZE  — исходник заведомо больше, чем место, куда его вставляют.
//             Уменьшаем и перезаписываем файл под тем же именем,
//             чтобы не трогать ни одну строку в константах контента.
//   RECODE  — размер в пикселях нормальный, но вес избыточный.
//             Пережимаем на месте, имя и формат сохраняем.

import { execFileSync } from "node:child_process";
import {
	copyFileSync,
	existsSync,
	readdirSync,
	statSync,
	unlinkSync,
} from "node:fs";
import path from "node:path";

const repoRoot = path.join(import.meta.dirname, "..");
const publicDir = path.join(repoRoot, "src", "public");
const isDryRun = process.argv.includes("--dry-run");

/**
 * Файлы, у которых пиксельный размер кратно больше места отрисовки.
 * maxSide — длинная сторона после уменьшения: берём двойной размер
 * отрисовки, чтобы хватило на экраны с удвоенной плотностью.
 */
const RESIZE = [
	// Талисман в формах успеха: 2339×3048 при отрисовке 350 px по ширине.
	{ file: "system/alexik.png", maxSide: 900 },
	// 3185×2800 в блоке, где картинка никогда не шире половины экрана.
	{ file: "system/output-onlinepngtools.png", maxSide: 1200 },
];

/** Порог, с которого файл вообще имеет смысл трогать. */
const RECODE_THRESHOLD_BYTES = 120 * 1024;

/** Каталоги, которые не трогаем: иконки интерфейса и документы. */
const SKIP_DIRS = new Set(["favicon", "fonts", "icons", "documents"]);

const RASTER = new Set([".png", ".jpg", ".jpeg", ".webp"]);

/**
 * Потолок длинной стороны для пережатия. Самый широкий контейнер на сайте —
 * полноэкранный герой, на экране 1920 px это и есть верхняя граница
 * полезного разрешения; всё, что больше, скачивается впустую.
 */
const MAX_LONG_SIDE = 1600;

const kb = (bytes) => `${Math.round(bytes / 1024)} КБ`;

function walk(dir) {
	const result = [];

	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			if (SKIP_DIRS.has(path.relative(publicDir, full))) continue;

			result.push(...walk(full));
			continue;
		}

		if (RASTER.has(path.extname(entry.name).toLowerCase())) {
			result.push(full);
		}
	}

	return result;
}

const run = (bin, args) =>
	execFileSync(bin, args, { stdio: ["ignore", "ignore", "pipe"] });

/** Уменьшает длинную сторону, сохраняя формат и имя файла. */
function resizeInPlace(file, maxSide) {
	const temp = `${file}.tmp`;

	copyFileSync(file, temp);
	run("sips", ["-Z", String(maxSide), temp, "--out", temp]);

	// PNG после sips почти не сжат — догоняем пережатием через webp/png-кодек.
	if (path.extname(file).toLowerCase() === ".png") {
		run("cwebp", [
			"-quiet",
			"-lossless",
			"-z",
			"9",
			temp,
			"-o",
			`${temp}.webp`,
		]);
		run("cwebp", ["-quiet", "-q", "90", temp, "-o", `${temp}.lossy.webp`]);

		const lossless = statSync(`${temp}.webp`).size;
		const lossy = statSync(`${temp}.lossy.webp`).size;
		const png = statSync(temp).size;

		unlinkSync(`${temp}.webp`);
		unlinkSync(`${temp}.lossy.webp`);

		// Имя должно остаться .png, иначе придётся править константы,
		// поэтому оставляем уменьшенный png — выигрыш и так кратный.
		void lossless;
		void lossy;
		void png;
	}

	copyFileSync(temp, file);
	unlinkSync(temp);
}

/** Пережимает файл на месте, формат и имя не меняются. */
function recodeInPlace(file) {
	const ext = path.extname(file).toLowerCase();
	const temp = `${file}.tmp${ext}`;

	if (ext === ".webp") {
		run("cwebp", ["-quiet", "-q", "78", "-m", "6", file, "-o", temp]);
	} else if (ext === ".jpg" || ext === ".jpeg") {
		// Кодек sips сам по себе почти не выигрывает — основную экономию
		// даёт ограничение длинной стороны: исходники под 1700 px шире
		// любого места, куда их вставляют.
		copyFileSync(file, temp);
		run("sips", [
			"-Z",
			String(MAX_LONG_SIDE),
			"-s",
			"formatOptions",
			"60",
			temp,
			"--out",
			temp,
		]);
	} else if (ext === ".png") {
		copyFileSync(file, temp);
		run("sips", ["-Z", String(MAX_LONG_SIDE), temp, "--out", temp]);
	} else {
		return null;
	}

	const before = statSync(file).size;
	const after = statSync(temp).size;

	// Пережимаем только если реально стало легче хотя бы на 10 %.
	if (after >= before * 0.9) {
		unlinkSync(temp);

		return null;
	}

	copyFileSync(temp, file);
	unlinkSync(temp);

	return { before, after };
}

const rows = [];
let totalBefore = 0;
let totalAfter = 0;

for (const { file, maxSide } of RESIZE) {
	const full = path.join(publicDir, file);

	// Файл могли переименовать или перевести в другой формат — это не повод
	// ронять весь прогон.
	if (!existsSync(full)) {
		console.log(`ПРОПУСК  ${file} — нет такого файла`);
		continue;
	}

	const before = statSync(full).size;

	if (!isDryRun) resizeInPlace(full, maxSide);

	const after = isDryRun ? before : statSync(full).size;

	rows.push(["RESIZE", file, before, after]);
	totalBefore += before;
	totalAfter += after;
}

const resized = new Set(RESIZE.map(({ file }) => path.join(publicDir, file)));

for (const full of walk(publicDir)) {
	if (resized.has(full)) continue;

	const before = statSync(full).size;

	if (before < RECODE_THRESHOLD_BYTES) continue;

	const rel = path.relative(publicDir, full);

	if (isDryRun) {
		rows.push(["RECODE", rel, before, before]);
		totalBefore += before;
		totalAfter += before;
		continue;
	}

	const result = recodeInPlace(full);

	if (!result) continue;

	rows.push(["RECODE", rel, result.before, result.after]);
	totalBefore += result.before;
	totalAfter += result.after;
}

for (const [mode, file, before, after] of rows) {
	const delta = isDryRun ? "" : ` → ${kb(after)}`;

	console.log(`${mode}  ${kb(before).padStart(8)}${delta.padEnd(12)}  ${file}`);
}

console.log(
	`\nФайлов: ${rows.length}. Было ${kb(totalBefore)}, стало ${kb(totalAfter)}` +
		(isDryRun ? " (сухой прогон — ничего не записано)." : "."),
);
