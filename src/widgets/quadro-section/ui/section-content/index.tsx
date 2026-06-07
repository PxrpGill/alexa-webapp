/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import IconSVG from "@/public/icons/mini-logo.svg";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { SectionContentProps } from "../../types/quadro-section.types";

import css from "./index.module.css";

export default function SectionContent({
	cards,
	className,
}: SectionContentProps) {
	if (!cards?.length) return null;

	return (
		<ul className={`${css.root} ${className}`}>
			{cards.map((card, index) => (
				<AnimationWrapper as="li" className={css.card} key={`${index}-${card}`}>
					<IconSVG className={css.icon} />
					<p
						dangerouslySetInnerHTML={{ __html: card }}
						key={index}
						className={css.description}
					/>
				</AnimationWrapper>
			))}
		</ul>
	);
}
