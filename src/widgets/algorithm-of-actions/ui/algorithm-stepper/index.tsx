/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { AlgorithmStepperProps } from "../../types/algorithm-of-actions.types";

import css from "./index.module.css";

export default function AlgorithmStepper({
	className,
	steps,
}: AlgorithmStepperProps) {
	if (!steps?.length) return null;

	return (
		<ul className={`${css.root} ${className}`}>
			{steps.map((step, index) => (
				<li className={css.paragraph} key={index}>
					<div className={css.titleBlock}>
						<div className={css.pointWrapper}>
							<span className={css.point}>{index + 1}</span>
						</div>
						{step.title && (
							<p
								dangerouslySetInnerHTML={{ __html: step.title }}
								className={css.title}
							/>
						)}
					</div>
					{step.content && (
						<div
							className={css.content}
							dangerouslySetInnerHTML={{ __html: step.content }}
						/>
					)}
				</li>
			))}
		</ul>
	);
}
