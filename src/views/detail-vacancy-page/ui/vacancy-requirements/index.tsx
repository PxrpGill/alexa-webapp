import type { RequirementsType } from "@/entities/vacancies/types/detail-vacancy.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import RequirementBlock from "./requirement-block";

export default function VacancyRequirements({
	className,
	required,
	partial,
}: RequirementsType & PropsWithClassName) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			<div className={css.wrapper}>
				{required && <RequirementBlock {...required} />}
				{partial && <RequirementBlock {...partial} />}
			</div>
		</AnimationWrapper>
	);
}
