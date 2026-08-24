/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

"use client";

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import { defineButtonProps } from "@/shared/helpers/define-site-button-props";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { WhyChooseUsMainSectionProps } from "../../types/why-choose-us.types";
import css from "./index.module.css";

export default function WhyChooseUsMainSection({
	title,
	list,
	poster,
	button,
	className,
}: WhyChooseUsMainSectionProps) {
	return (
		<AnimationWrapper className={`${css.root} ${className}`}>
			<div className={css.contentPart}>
				{title && (
					<h3
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{list?.length && (
					<ul className={css.list}>
						{list.map((item, index) => {
							const paragraphNumber = index + 1;

							return (
								<li className={css.paragraph} key={index}>
									<p className={css.number}>
										{paragraphNumber > 9
											? paragraphNumber
											: `0${paragraphNumber}`}
									</p>
									<p
										dangerouslySetInnerHTML={{
											__html: item,
										}}
										className={css.item}
									/>
								</li>
							);
						})}
					</ul>
				)}

				{button && (
					<Button
						className={css.button}
						rightIcon={<ButtonIconSVG className={css.icon} />}
						{...defineButtonProps(button)}
					>
						{button.title}
					</Button>
				)}
			</div>

			<div className={css.posterWrapper}>
				{poster && <Picture poster={poster} />}
			</div>
		</AnimationWrapper>
	);
}
