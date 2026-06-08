import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { ErrorFallbackProps } from "./types/error-fallback.types";

export default function ErrorFallback({
	className,
	title,
	descripton,
	poster,
	button,
}: ErrorFallbackProps) {
	return (
		<AnimationWrapper as="section" className={`${css.root}`}></AnimationWrapper>
	);
}
