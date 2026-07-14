/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconSVG from "@/public/icons/download.svg";
import Button from "@/shared/ui/button";
import type { AlgorithmCTAProps } from "../../types/algorithm-of-actions.types";
import css from "./index.module.css";

export default function AlgorithmCTA({
	title,
	className,
	button,
}: AlgorithmCTAProps) {
	return (
		<div className={`${css.root} ${className}`}>
			{title && (
				<p dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{button && (
				<Button
					className={css.button}
					href={button.href}
					rightIcon={<ButtonIconSVG className={css.icon} />}
				>
					{button?.title}
				</Button>
			)}
		</div>
	);
}
