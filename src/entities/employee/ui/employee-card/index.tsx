/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import Picture from "@/shared/ui/picture";
import type { EmployeeCardProps } from "../../types/employee-card.types";
import css from "./index.module.css";

export default function EmployeeCard({
	fullname,
	position,
	poster,
	className,
}: EmployeeCardProps) {
	return (
		<article className={`${css.root} ${className}`}>
			<div className={css.wrap}>{poster && <Picture poster={poster} />}</div>
			<div className={css.titleBlock}>
				<div className={css.titleWrap}>
					{fullname && (
						<h6
							className={css.fullname}
							dangerouslySetInnerHTML={{ __html: fullname }}
						/>
					)}
					{position && (
						<p
							className={css.position}
							dangerouslySetInnerHTML={{ __html: position }}
						/>
					)}
				</div>
			</div>
		</article>
	);
}
