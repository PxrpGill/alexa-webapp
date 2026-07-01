/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconSVG from "@/public/icons/download.svg";
import Button from "@/shared/ui/button";
import type { AlgorithmCTAProps } from "../../types/algorithm-of-actions.types";
import css from "./index.module.css";

export default function AlgorithmCTA({
	title,
	className,
	buttonText,
}: AlgorithmCTAProps) {
	return (
		<div className={`${css.root} ${className}`}>
			{title && (
				<p dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<Button
				className={css.button}
				rightIcon={<ButtonIconSVG className={css.icon} />}
			>
				{buttonText}
			</Button>
		</div>
	);
}
