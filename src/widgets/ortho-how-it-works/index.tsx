/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { OrthoHowItWorksProps } from "./models/ortho-how-it-works.types";

export default function OrthoHowItWorks({
	chips,
	className,
	leftLabel,
	rightLabel,
	description,
	sectionTitle,
}: OrthoHowItWorksProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			{sectionTitle && (
				<h2
					dangerouslySetInnerHTML={{ __html: sectionTitle }}
					className={css.title}
				/>
			)}
			<div className={css.wrapper}>
				<div className={css.leftPart}>
					{leftLabel && (
						<p
							className={css.label}
							dangerouslySetInnerHTML={{ __html: leftLabel }}
						/>
					)}
					{description && (
						<p
							dangerouslySetInnerHTML={{ __html: description }}
							className={css.description}
						/>
					)}
				</div>
				<div className={css.rightPart}>
					{rightLabel && (
						<p
							dangerouslySetInnerHTML={{ __html: rightLabel }}
							className={css.label}
						/>
					)}
					{Array.isArray(chips) && chips.length > 0 && (
						<ul className={css.chips}>
							{chips.map((chip, index) => (
								<li
									key={index}
									className={css.chip}
									dangerouslySetInnerHTML={{ __html: chip }}
								/>
							))}
						</ul>
					)}
				</div>
			</div>
		</AnimationWrapper>
	);
}
