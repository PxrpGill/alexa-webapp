/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import ButtonIcon from "@/public/icons/button-teeth.svg";
import MiniIconSVG from "@/public/icons/mini-logo.svg";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import type { TitleStickySectionProps } from "./types/title-sticky-section.types";

export default function TitleStickySection({
	title,
	cards,
	lastCard,
	className,
}: TitleStickySectionProps) {
	if (!cards?.length) return;

	return (
		<section className={`${css.root} ${className} container`}>
			<AnimationWrapper as="div" className={css.wrapper}>
				{title && (
					<h2
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				<ul className={css.list}>
					{cards.map((card, index) => (
						<AnimationWrapper as="li" className={css.card} key={index}>
							<MiniIconSVG className={css.miniIcon} />
							{card && (
								<p
									dangerouslySetInnerHTML={{ __html: card }}
									className={css.cardDescription}
								/>
							)}
						</AnimationWrapper>
					))}
					{lastCard && (
						<AnimationWrapper as="li" className={css.lastCard}>
							<div className={css.pictureWrapper}>
								{lastCard.poster && <Picture poster={lastCard.poster} />}
							</div>
							<Button
								className={css.button}
								rightIcon={<ButtonIcon className={css.buttonIcon} />}
							>
								{lastCard.buttonText ?? "Записаться на прием"}
							</Button>
						</AnimationWrapper>
					)}
				</ul>
			</AnimationWrapper>
		</section>
	);
}
