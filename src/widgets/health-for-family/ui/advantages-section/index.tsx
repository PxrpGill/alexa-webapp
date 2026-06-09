/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import MiniLogoSVG from "@/public/icons/mini-logo.svg";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { AdvantagesSectionProps } from "../../types/advantages-section.types";
import css from "./index.module.css";

export default function AdvantagesSection({
	title,
	cards,
	className,
}: AdvantagesSectionProps) {
	if (!cards?.length) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			{title && (
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<ul className={css.list}>
				{cards.map((card, index) => (
					<AnimationWrapper as="li" key={index} className={css.card}>
						<MiniLogoSVG className={css.icon} />
						{card && (
							<p
								dangerouslySetInnerHTML={{ __html: card }}
								className={css.cardText}
							/>
						)}
					</AnimationWrapper>
				))}
			</ul>
		</AnimationWrapper>
	);
}
