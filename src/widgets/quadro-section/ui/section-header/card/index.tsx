/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconSVG from "@/public/icons/button-teeth.svg";

import Button from "@/shared/ui/button";
import type { SectionHeaderCardProps } from "@/widgets/quadro-section/types/quadro-section.types";

import css from "./index.module.css";

export default function Card({
	title,
	buttonText,
	className,
}: SectionHeaderCardProps) {
	return (
		<article className={`${css.root} ${className}`}>
			{title && (
				<h6 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<Button
				rightIcon={<ButtonIconSVG className={css.icon} />}
				className={css.button}
			>
				{buttonText ?? "Записаться  на прием"}
			</Button>
		</article>
	);
}
