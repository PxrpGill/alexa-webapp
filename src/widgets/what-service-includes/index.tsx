/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import IconSVG from "@/public/icons/mini-logo.svg";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { WhatServiceIncludesProps } from "./types/what-service-includes.types";

export default function WhatServiceIncludes({
	cards,
	className,
	title,
}: WhatServiceIncludesProps) {
	if (!cards?.length) return null;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			{title && (
				<div className={css.titleBlock}>
					<h2
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.sectionTitle}
					/>
				</div>
			)}
			<ul className={css.list}>
				{cards.map((card, index) => (
					<AnimationWrapper as="li" className={css.card} key={index}>
						<div className={css.cardHeader}>
							<IconSVG className={css.icon} />
							{card.title && (
								<p
									dangerouslySetInnerHTML={{ __html: card.title }}
									className={css.title}
								/>
							)}
						</div>
						{card.description && (
							<p
								dangerouslySetInnerHTML={{ __html: card.description }}
								className={css.description}
							/>
						)}
					</AnimationWrapper>
				))}
			</ul>
		</AnimationWrapper>
	);
}
