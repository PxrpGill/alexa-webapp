// src/types/svg.d.ts

declare module "@/public/icons/*.svg" {
	import type { FC, SVGProps } from "react";

	const SVG: FC<SVGProps<SVGSVGElement>>;

	export default SVG;
}
