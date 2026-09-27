// Резолвит алиас @/* -> src/* так же, как tsconfig, чтобы проверки могли
// импортировать настоящие модули проекта. Node 24 сам снимает типы с .ts.
import { existsSync } from 'node:fs';
import { registerHooks } from 'node:module';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

export const SRC = join(import.meta.dirname, '..', '..', 'src');

// Проектные импорты идут без расширения; дописываем .ts/.tsx/index.ts.
const withExtension = (path) => {
    if (existsSync(path) && !existsSync(`${path}.ts`)) return path;

    for (const suffix of ['.ts', '.tsx', '/index.ts', '/index.tsx']) {
        if (existsSync(path + suffix)) return path + suffix;
    }

    return path;
};

registerHooks({
    resolve(specifier, context, nextResolve) {
        if (specifier.startsWith('@/')) {
            return {
                url: pathToFileURL(
                    withExtension(join(SRC, specifier.slice(2)))
                ).href,
                shortCircuit: true,
            };
        }

        const parent = context.parentURL ?? '';
        const isProjectSource =
            parent.startsWith(pathToFileURL(SRC).href) &&
            !parent.includes('/node_modules/');

        if (
            isProjectSource &&
            (specifier.startsWith('./') || specifier.startsWith('../'))
        ) {
            const base = new URL(specifier, context.parentURL);

            return {
                url: pathToFileURL(withExtension(base.pathname)).href,
                shortCircuit: true,
            };
        }

        return nextResolve(specifier, context);
    },
});
