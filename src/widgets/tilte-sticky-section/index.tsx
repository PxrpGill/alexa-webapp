/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

"use client";

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import MiniIconSVG from "@/public/icons/mini-logo.svg";
import { defineButtonProps } from "@/shared/helpers/define-site-button-props";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import css from "./index.module.css";
import type { TitleStickySectionProps } from "./types/title-sticky-section.types";
import TitleBlock from "./ui/title-block";

export default function TitleStickySection({
	title,
	cards,
	lastCard,
	className,
}: TitleStickySectionProps) {
	if (!cards?.length) return;

	return (
		<section className={`${css.root} ${className} container`}>
			<TitleBlock title={title} imageCard={lastCard} />
			<ul className={css.list}>
				{cards.map((card, index) => (
					<AnimationWrapper
						as="li"
						className={`${css.card} ${css[card.theme ?? "white"]}`}
						key={index}
					>
						{card.title && (
							<div className={css.cardTitleWrapper}>
								<MiniIconSVG className={css.miniIcon} />

								<p
									dangerouslySetInnerHTML={{
										__html: card.title,
									}}
									className={css.cardDescription}
								/>
							</div>
						)}
						{card.description && (
							<div
								dangerouslySetInnerHTML={{
									__html: card.description,
								}}
								className={css.cardUnderDescription}
							/>
						)}
						{card.button && (
							<Button
								className={css.cardButton}
								rightIcon={<ButtonIconSVG className={css.buttonIcon} />}
								{...defineButtonProps(card.button)}
							>
								{card.button.title}
							</Button>
						)}
					</AnimationWrapper>
				))}
			</ul>
		</section>
	);
}
