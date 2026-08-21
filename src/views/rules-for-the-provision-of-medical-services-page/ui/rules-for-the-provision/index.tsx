/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { RulesForTheProvisionSectionProps } from "../../types/rules-for-the-provision.types";
import css from "./index.module.css";

export default function RulesForTheProvision({
	title,
	cards,
	className,
}: RulesForTheProvisionSectionProps) {
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
					<li key={index}>
						<article className={css.card}>
							{card.title && (
								<h4
									dangerouslySetInnerHTML={{ __html: card.title }}
									className={css.cardTitle}
								/>
							)}
							{card.description && (
								<div
									dangerouslySetInnerHTML={{ __html: card.description }}
									className={css.cardDescription}
								/>
							)}
						</article>
					</li>
				))}
			</ul>
		</AnimationWrapper>
	);
}
