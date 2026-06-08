/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import EmployeeCard from "@/entities/employee/ui/employee-card";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { OurPeopleSectionProps } from "./types/our-people-section.types";

export default function OurPeopleSection({
	className,
	title,
	employees,
}: OurPeopleSectionProps) {
	if (!employees?.length) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} container ${className}`}
		>
			{title && (
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<ul className={css.list}>
				{employees.map((employee, index) => (
					<AnimationWrapper
						as="li"
						className={css.paragraph}
						key={`${employee.fullname}-${index}`}
					>
						<EmployeeCard {...employee} className={css.employee} />
					</AnimationWrapper>
				))}
			</ul>
		</AnimationWrapper>
	);
}
