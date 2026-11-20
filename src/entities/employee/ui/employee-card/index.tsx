/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import { useCallback, useState } from "react";
import Picture from "@/shared/ui/picture";
import type { EmployeeCardProps } from "../../types/employee-card.types";
import AboutEmployeeModal from "../about-employee-modal";
import css from "./index.module.css";

export default function EmployeeCard({
	fullname,
	position,
	poster,
	className,
	contentsRef,
	contentsStyle,
	aboutEmployee,
}: EmployeeCardProps) {
	const [isAboutModalOpen, toggleAboutModalOpen] = useState<boolean>(false);

	const handleAboutModalClose = useCallback(() => {
		toggleAboutModalOpen(false);
	}, []);

	return (
		<article className={`${css.root} ${className}`}>
			<div className={css.wrap}>{poster && <Picture poster={poster} />}</div>
			<div className={css.titleBlock}>
				<div className={css.titleWrap} ref={contentsRef} style={contentsStyle}>
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
					{aboutEmployee && (
						<button
							type="button"
							onClick={() => toggleAboutModalOpen(true)}
							className={css.aboutButton}
						>
							Подробнее
						</button>
					)}
				</div>
			</div>
			{aboutEmployee && (
				<AboutEmployeeModal
					{...aboutEmployee}
					isOpen={isAboutModalOpen}
					fullname={fullname}
					position={position}
					toggleClose={handleAboutModalClose}
				/>
			)}
		</article>
	);
}
