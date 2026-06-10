/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";

import type { SectionContentProps } from "../../types/mock-tabs-section.types";
import css from "./index.module.css";

export default function SectionContent({
	title,
	description,
	buttonText,
	poster,
	className,
}: SectionContentProps) {
	return (
		<AnimationWrapper className={`${css.root} ${className}`}>
			<article className={css.content}>
				{description && (
					<p
						dangerouslySetInnerHTML={{ __html: description }}
						className={css.description}
					/>
				)}
				{title && (
					<h5
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				<Button
					className={css.button}
					rightIcon={<ButtonIconSVG className={css.icon} />}
				>
					{buttonText ?? "Записаться на прием"}
				</Button>
			</article>
			<div className={css.posterWrapper}>
				{poster && <Picture poster={poster} />}
			</div>
		</AnimationWrapper>
	);
}
