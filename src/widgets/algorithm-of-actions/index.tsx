/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { AlgorithmOfActionsProps } from "./types/algorithm-of-actions.types";
import AlgorithmCTA from "./ui/algorithm-cta";
import AlgorithmStepper from "./ui/algorithm-stepper";

export default function AlgorithmOfActions({
	title,
	className,
	cta,
	steps,
}: AlgorithmOfActionsProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			{title && (
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<AlgorithmStepper steps={steps} />
			<AlgorithmCTA {...cta} />
		</AnimationWrapper>
	);
}
