/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconsSVG from "@/public/icons/button-teeth.svg";
import Button from "@/shared/ui/button";
import type { SectionHeaderProps } from "../../types/our-people-section.types";
import css from "./index.module.css";

export default function SectionHeader({
	title,
	button,
	className,
}: SectionHeaderProps) {
	if (!title) return null;

	return (
		<div className={`${css.root} ${className} container ${button && css.row}`}>
			{title && (
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{button && (
				<Button
					className={css.button}
					href={button.href}
					rightIcon={<ButtonIconsSVG className={css.icon} />}
				>
					{button.title}
				</Button>
			)}
		</div>
	);
}
