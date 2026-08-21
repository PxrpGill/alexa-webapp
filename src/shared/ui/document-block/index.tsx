/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "../animation-wrapper";
import css from "./index.module.css";

export type DocumentBlockProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export default function DocumentBlock({
	title,
	description,
	className,
}: DocumentBlockProps) {
	if (!(title || description)) return null;

	return (
		<AnimationWrapper as="article" className={`${css.root} ${className}`}>
			{title && (
				<h2 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{description && (
				<div
					dangerouslySetInnerHTML={{ __html: description }}
					className={css.description}
				/>
			)}
		</AnimationWrapper>
	);
}
