/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import Button from "@/shared/ui/button";
import type { SectionHeaderProps } from "../../types/certificates-section.types";
import css from "./index.module.css";

export default function SectionHeader({
	title,
	card,
	className,
}: SectionHeaderProps) {
	return (
		<div className={`${css.root} ${className}`}>
			{title && (
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}

			{card && (
				<article className={css.card}>
					{card.title && (
						<h5
							dangerouslySetInnerHTML={{ __html: card.title }}
							className={css.cardTitle}
						/>
					)}
					{card.button && (
						<Button
							className={css.button}
							href={card.button.href}
							target={card.button.target}
							rightIcon={<ButtonIconSVG className={css.icon} />}
						>
							{card.button.title}
						</Button>
					)}
				</article>
			)}
		</div>
	);
}
